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

export const fetchClaimResults = async (query: string): Promise<Claim[]> => {
  const apiKey = "AIzaSyDvkB5s5n-Pmf_RDLh0BwirmAzW76Po0y4";
  const url = `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(query)}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('API Response:', data);
    return data.claims || []; // returns an array of claims
  } catch (err) {
    console.error("Error fetching claim:", err);
    return [];
  }
};