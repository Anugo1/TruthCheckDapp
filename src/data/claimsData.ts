type claimType = {
  title: string;
  desc: string;
  verified: "False" | "Verified";
  upvotes: number;
  downvotes: number;
  updated: string;
};
export const claimData: claimType[] = [
  {
    title: "NYSC corp members' salary increases to ₦450k - FackCheckNG",
    desc: "Several fact-checkers confirm the salary increase rumour is false, with no official announcement from the government...",
    verified: "False",
    upvotes: 48,
    downvotes: 112,
    updated: "March 5, 2025",
  },
  {
    title:
      "Government Plans to Increase NYSC Salary to ₦77,000 in 2025 - NaijaCheck",
    desc: "Several fact-checkers confirm the salary increase rumour is false, with no official announcement from the government...",
    verified: "Verified",
    upvotes: 248,
    downvotes: 2,
    updated: "March 5, 2025",
  },
  {
    title: "NYSC corp members' salary increases to NGN450k - FackCheckNG",
    desc: "Several fact-checkers confirm the salary increase rumour is false, with no official announcement from the government...",
    verified: "False",
    upvotes: 48,
    downvotes: 12,
    updated: "March 5, 2025",
  },
];
