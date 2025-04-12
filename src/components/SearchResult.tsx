import { ArrowLeft, ThumbsDown, ThumbsUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { claimData } from "../data/claimsData";

export const SearchResult = () => {
  const navigate = useNavigate();

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
            SEARCH CATEGORY - FINANCE
          </p>
          <div className="w-full flex flex-col justify-start items-start gap-5 p-7 bg-[#0F0F0F] rounded-xl">
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <p className="text-[#EFEFEF] text-4xl font-medium">
                No, NYSC corp members' salary was not increased to ₦450k
              </p>
              <div className="w-full flex justify-between items-center">
                <p className="text-sm text-[#B6B6B6] font-normal">
                  8 April, 2025, Status - FALSE
                </p>
                <p className="text-sm text-[#B6B6B6]">
                  Sources: <span className="text-[#9654F4]">FactCheckNG</span> |{" "}
                  <span className="text-[#9654F4]">AfriCheck</span> |{" "}
                  <span className="text-[#9654F4]">VanguardFactCheck</span>
                </p>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-9">
              <div className="bg-[#2E2E2E] py-2.5 px-6 flex flex-col justify-start items-start gap-2.5 rounded-2xl">
                <p className="text-sm text-[#8B8B8B]">CLAIM</p>
                <p className="text-base text-[#B6B6B6] leading-tight pr-4">
                  NYSC corp members' salary increased to ₦450,000 monthly.
                </p>
              </div>
              <div className="bg-[#2E2E2E] py-2.5 px-6 flex flex-col justify-start items-start gap-2.5 rounded-2xl">
                <p className="text-sm text-[#8B8B8B]">SUMMARY</p>
                <p className="text-base text-[#B6B6B6] leading-tight pr-4">
                  Various fack-checkers debunked this claim, stating that there
                  is no official record or announcement of such an increase. The
                  salary remains ₦77,000.
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
                  Showing 6 related claims from multiple Fact-checking sources
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
              {claimData.map((data) => (
                <div
                  className="w-full flex flex-col justify-start items-start gap-4"
                  key={data.title}
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
