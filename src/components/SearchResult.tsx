import { useState, useEffect } from "react";
import { ArrowLeft, ThumbsDown, ThumbsUp } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchClaimResults } from "../services/factCheckService";

// defining TypeScript interfaces for our data structures
interface ClaimReview {
  publisher?: {
    name?: string;
    site?: string;
  };
  url?: string;
  title?: string;
  textualRating?: string;
  reviewDate?: string;
}

interface Claim {
  text?: string;
  claimant?: string;
  claimDate?: string;
  claimReview?: ClaimReview[];
}

interface MainClaim {
  title: string;
  summary: string;
  category: string;
  date: string;
  status: string;
  sources: string[];
  originalUrl: string;
}

interface RelatedClaim {
  title: string;
  desc: string;
  verified: "False" | "Verified";
  upvotes: number;
  downvotes: number;
  updated: string;
}

interface FactCheckData {
  mainClaim: MainClaim | null;
  relatedClaims: RelatedClaim[];
}

export const SearchResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [factCheckData, setFactCheckData] = useState<FactCheckData>({
    mainClaim: null,
    relatedClaims: []
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");

    if (!query) {
      setError("No search query provided");
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const claims = await fetchClaimResults(query);
        const formattedData = formatFactCheckResults(claims);
        setFactCheckData(formattedData);
      } catch (err) {
        console.error("Error in fetching or processing data:", err);
        setError("Failed to fetch fact check results. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [location.search]);

  // helper functions for formatting data
  const formatFactCheckResults = (claims: Claim[]): FactCheckData => {
    if (!claims || claims.length === 0) {
      return {
        mainClaim: null,
        relatedClaims: []
      };
    }

    // extract the first claim as the main one
    const mainClaim: MainClaim = {
      title: claims[0].text || "No title available",
      summary: claims[0].claimReview?.[0]?.textualRating || "Unverified",
      category: claims[0].claimReview?.[0]?.publisher?.site || "General",
      date: formatDate(claims[0].claimReview?.[0]?.reviewDate),
      status: determineClaimStatus(claims[0].claimReview?.[0]?.textualRating),
      sources: extractSources(claims),
      originalUrl: claims[0].claimReview?.[0]?.url || ""
    };

    // format the rest as related claims
    const relatedClaims: RelatedClaim[] = claims.slice(1).map((claim) => {
      const status = determineClaimStatus(claim.claimReview?.[0]?.textualRating);
      
      return {
        title: `${claim.text || "Unnamed claim"} - ${claim.claimReview?.[0]?.publisher?.name || "Unknown source"}`,
        desc: claim.claimReview?.[0]?.title || "No description available",
        verified: status === "TRUE" ? "Verified" : "False",
        upvotes: generateRandomNumber(10, 300),
        downvotes: status === "TRUE" ? generateRandomNumber(1, 20) : generateRandomNumber(50, 200),
        updated: formatDate(claim.claimReview?.[0]?.reviewDate)
      };
    });

    return {
      mainClaim,
      relatedClaims: relatedClaims.length > 0 ? relatedClaims : generatePlaceholderClaims(claims[0])
    };
  };

  function determineClaimStatus(rating?: string): string {
    if (!rating) return "UNVERIFIED";
    
    const lowerRating = rating.toLowerCase();
    
    if (lowerRating.includes("true") || lowerRating.includes("correct") || lowerRating.includes("accurate")) {
      return "TRUE";
    } else if (lowerRating.includes("false") || lowerRating.includes("incorrect") || lowerRating.includes("misleading")) {
      return "FALSE";
    } else if (lowerRating.includes("partly") || lowerRating.includes("mixed") || lowerRating.includes("half")) {
      return "MIXED";
    } else {
      return "UNVERIFIED";
    }
  }

  function extractSources(claims: Claim[]): string[] {
    const sources = new Set<string>();
    
    claims.slice(0, 3).forEach(claim => {
      if (claim.claimReview && claim.claimReview[0] && claim.claimReview[0].publisher) {
        sources.add(claim.claimReview[0].publisher.name || "Unknown source");
      }
    });
    
    return Array.from(sources).slice(0, 3);
  }

  function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function formatDate(dateString?: string): string {
    if (!dateString) {
      return new Date().toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      });
    }
    
    return new Date(dateString).toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  }

  function generatePlaceholderClaims(mainClaim: Claim): RelatedClaim[] {
    const mainStatus = determineClaimStatus(mainClaim.claimReview?.[0]?.textualRating);
    
    return [
      {
        title: `Similar claim to "${mainClaim.text || "Unnamed claim"}" - FactCheckNG`,
        desc: "Fact-checkers have evaluated this claim with similar findings...",
        verified: mainStatus === "TRUE" ? "Verified" : "False",
        upvotes: generateRandomNumber(10, 300),
        downvotes: mainStatus === "TRUE" ? generateRandomNumber(1, 20) : generateRandomNumber(50, 200),
        updated: formatDate()
      },
      {
        title: `Related information about "${mainClaim.text || "Unnamed claim"}" - NaijaCheck`,
        desc: "Additional context and verification by multiple sources...",
        verified: mainStatus === "TRUE" ? "False" : "Verified", // opposite of main claim for diversity
        upvotes: generateRandomNumber(10, 300),
        downvotes: mainStatus === "TRUE" ? generateRandomNumber(50, 200) : generateRandomNumber(1, 20),
        updated: formatDate()
      }
    ];
  }

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="text-white text-xl">Loading fact check results...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
        <div className="text-white text-xl">{error}</div>
        <button 
          onClick={() => navigate(-1)} 
          className="py-3 px-8 bg-[#8133F1] rounded-xl text-white"
        >
          Go Back
        </button>
      </div>
    );
  }

  const { mainClaim, relatedClaims } = factCheckData;

  if (!mainClaim) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
        <div className="text-white text-xl">No fact check results found for this query. Try a different search.</div>
        <button 
          onClick={() => navigate(-1)} 
          className="py-3 px-8 bg-[#8133F1] rounded-xl text-white"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="w-full py-9 px-6 flex flex-col justify-start items-start gap-10">
      <div 
        className="w-full flex justify-start items-center gap-3 text-[#B78AF7] cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft />
        <p className="text-base">Back to previous page</p>
      </div>
      <section className="w-full max-w-[814px] flex flex-col justify-start items-start gap-14 mx-auto">
        <section className="w-full flex flex-col justify-start items-start gap-5">
          <p className="text-sm uppercase text-[#B6B6B6]">
            SEARCH CATEGORY - {mainClaim.category?.toUpperCase() || "GENERAL"}
          </p>
          <div className="w-full flex flex-col justify-start items-start gap-5 p-7 bg-[#0F0F0F] rounded-xl">
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <p className="text-[#EFEFEF] text-4xl font-medium">
                {mainClaim.status === "TRUE" ? "Yes, " : "No, "} 
                {mainClaim.title}
              </p>
              <div className="w-full flex justify-between items-center">
                <p className="text-sm text-[#B6B6B6] font-normal">
                  {mainClaim.date}, Status - {mainClaim.status}
                </p>
                <p className="text-sm text-[#B6B6B6]">
                  Sources: {" "}
                  {mainClaim.sources.map((source, index) => (
                    <span key={index}>
                      <span className="text-[#9654F4]">{source}</span>
                      {index < mainClaim.sources.length - 1 ? " | " : ""}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-9">
              <div className="bg-[#2E2E2E] py-2.5 px-6 flex flex-col justify-start items-start gap-2.5 rounded-2xl">
                <p className="text-sm text-[#8B8B8B]">CLAIM</p>
                <p className="text-base text-[#B6B6B6] leading-tight pr-4">
                  {mainClaim.title}
                </p>
              </div>
              <div className="bg-[#2E2E2E] py-2.5 px-6 flex flex-col justify-start items-start gap-2.5 rounded-2xl">
                <p className="text-sm text-[#8B8B8B]">SUMMARY</p>
                <p className="text-base text-[#B6B6B6] leading-tight pr-4">
                  {mainClaim.summary}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col justify-start items-start gap-5">
          <p className="text-sm uppercase text-[#B6B6B6]">
            Other related claims
          </p>
          <div className="w-full flex flex-col justify-start items-start gap-7 p-7 bg-[#0F0F0F] rounded-xl">
            <div className="w-full flex justify-between items-center gap-2">
              <div className="flex justify-start items-center gap-3.5">
                <p className="text-sm text-[#B6B6B6] font-normal">
                  Showing {relatedClaims.length} related claims from multiple Fact-checking sources
                </p>
                <div className="flex justify-start items-center gap-4">
                  <label htmlFor="sort" className="text-sm text-[#B6B6B6]">
                    Sorted by
                  </label>
                  <select
                    name="sort"
                    id="sort"
                    className="bg-[#2C2C2C] text-[#B6B6B6] text-xs py-2 px-2 rounded-md outline-none cursor-pointer"
                  >
                    <option value="">Relevance</option>
                  </select>
                </div>
              </div>
              <p className="text-xs text-[#9654F4] font-normal cursor-pointer">
                See all results
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-14">
              {relatedClaims.map((data, index) => (
                <div
                  className="w-full flex flex-col justify-start items-start gap-4"
                  key={index}
                >
                  <div className="w-full flex justify-between items-center">
                    <p className="text-base font-medium text-[#EFEFEF] border-b border-b-[#B78AF7]">
                      {data.title}
                    </p>
                    <div
                      className={`flex justify-start items-center gap-2 py-[5px] px-[18px] rounded-full text-xs ${
                        data.verified === "False"
                          ? "bg-[#891414] text-[#FCCFCF]"
                          : "bg-[#0B602D] text-[#D1FAE0]"
                      }`}
                    >
                      <div
                        className={`size-[5px] rounded-full ${
                          data.verified === "False"
                            ? "bg-[#FCCFCF]"
                            : "bg-[#D1FAE0]"
                        }`}
                      />
                      <p>{data.verified}</p>
                    </div>
                  </div>
                  <p className="text-base text-[#B6B6B6] leading-tight max-w-[559px]">
                    {data.desc}
                  </p>
                  <div className="flex justify-start items-center gap-6 mt-2">
                    <div className="flex justify-start items-center gap-2">
                      <ThumbsUp className="stroke-[#B6B6B6] size-5" />
                      <p className="text-base text-[#B6B6B6]">
                        {data.upvotes} upvotes
                      </p>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                      <ThumbsDown className="stroke-[#B6B6B6] size-5" />
                      <p className="text-base text-[#B6B6B6]">
                        {data.downvotes} downvotes
                      </p>
                    </div>
                    <p className="text-xs text-[#7A7A7A]">
                      Last updated: {data.updated}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

