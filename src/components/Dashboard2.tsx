import { Link } from "lucide-react";

export const Dashboard2 = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center gap-20 px-8">
      <div className="w-full flex flex-col justify-start items-center gap-4 max-w-[700px]">
        <p className="text-6xl font-semibold text-[#9B9B9B] text-center w-full leading-tight">
          Decentralize the truth with TruthCheck
        </p>
        <p className="text-xl text-[#B6B6B6] font-medium">
          Verify and report claims with blockchain-backed trust
        </p>
        <div className="flex justify-center items-center gap-6">
          <button className="py-4 px-6 rounded-xl cursor-pointer border border-[#6C6C6C] text-[#6C6C6C] btn-glow btn-glow-white">
            Try quick check
          </button>
          <button className="py-4 px-6 rounded-xl border border-[#1B82E8] bg-[#1B82E8] text-[#E9E9E9] cursor-pointer btn-glow btn-glow-blue">
            Get started
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-6 max-w-[1112px] mx-auto">
        <p className="text-2xl text-white font-medium">How it works</p>
        <div className="w-full grid grid-cols-3 gap-4">
          <div className="px-4 py-5 bg-[#0F0F0F] rounded-2xl flex justify-start items-center gap-3">
            <Link className="stroke-2 stroke-[#B1B1B1] size-6" />
            <p className="text-[15px] text-[#B1B1B1] font-normal">
              Store verified claims on-chain
            </p>
          </div>
          <div className="px-4 py-5 bg-[#0F0F0F] rounded-2xl flex justify-start items-center gap-3">
            <svg
              width="24"
              height="24"
              className="size-6 whitespace-nowrap"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.91992 20.2799L6.68993 21.6499C6.91993 21.8799 7.42992 21.9898 7.77992 21.9898H9.94992C10.6399 21.9898 11.3799 21.4799 11.5499 20.7899L12.9199 16.6198C13.2099 15.8198 12.6899 15.1299 11.8299 15.1299H9.53992C9.19992 15.1299 8.90992 14.8398 8.96992 14.4398L9.25993 12.6098C9.36993 12.0998 9.02992 11.5198 8.51992 11.3498C8.05992 11.1798 7.48993 11.4099 7.25993 11.7499L4.91992 15.2398"
                stroke="#B1B1B1"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path
                d="M2 20.2799V14.6799C2 13.8799 2.34 13.5898 3.14 13.5898H3.71C4.51 13.5898 4.85 13.8799 4.85 14.6799V20.2799C4.85 21.0799 4.51 21.3699 3.71 21.3699H3.14C2.34 21.3699 2 21.0899 2 20.2799Z"
                stroke="#B1B1B1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.0801 3.71997L17.3101 2.34998C17.0801 2.11998 16.5701 2.01001 16.2201 2.01001H14.0501C13.3601 2.01001 12.6201 2.51996 12.4501 3.20996L11.0801 7.38C10.7901 8.18 11.3101 8.87 12.1701 8.87H14.4601C14.8001 8.87 15.0901 9.16006 15.0301 9.56006L14.7401 11.39C14.6301 11.9 14.9701 12.48 15.4801 12.65C15.9401 12.82 16.5101 12.59 16.7401 12.25L19.0801 8.76001"
                stroke="#B1B1B1"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path
                d="M22.0001 3.71985V9.31982C22.0001 10.1198 21.6601 10.4099 20.8601 10.4099H20.2901C19.4901 10.4099 19.1501 10.1198 19.1501 9.31982V3.71985C19.1501 2.91985 19.4901 2.62988 20.2901 2.62988H20.8601C21.6601 2.62988 22.0001 2.90985 22.0001 3.71985Z"
                stroke="#B1B1B1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-[15px] text-[#B1B1B1] font-normal">
              Community votes on disputed info
            </p>
          </div>
          <div className="px-4 py-5 bg-[#0F0F0F] rounded-2xl flex justify-start items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.26999 9.01999 9.01999C9.00999 8.84999 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z"
                stroke="#B1B1B1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.00999 9.01999 9.01999C12.19 9.26999 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z"
                stroke="#B1B1B1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.62 14.62L8.5 13L9.38 14.62L11 15.5L9.38 16.38L8.5 18L7.62 16.38L6 15.5L7.62 14.62Z"
                stroke="#B1B1B1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-[15px] text-[#B1B1B1] font-normal">
              Earn tokens for accurate fact-checking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
