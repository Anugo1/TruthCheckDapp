import { NotepadText } from "lucide-react";

export default function Dashboard() {
  return (
    <section className="py-[53px] px-11 flex flex-col justify-start items-start gap-10">
      <section className="w-full flex flex-col justify-start items-start gap-4">
        <p className="text-4xl text-white font-medium">
          Welcome back, Truth Ninja!🤗
        </p>
        <div className="w-full flex justify-start items-center gap-7 text-[#969696]">
          <p>👋0x4A...03DC</p>
          <p>Reputation level 2</p>
          <p>780 $TRUTH</p>
          <p>Verified claims 15</p>
        </div>
      </section>
      <section className="w-full flex flex-col justify-start items-start">
        <div className="w-full flex flex-col justify-start items-start gap-6">
          <p className="text-2xl text-white font-medium">My Activity</p>
          <div className="w-full flex justify-start items-start gap-10">
            <div className="w-[735px] grid grid-cols-2 gap-6">
              <div className="w-full flex justify-start items-center gap-4 p-6 bg-[#0F0F0F] rounded-2xl">
                <div className="bg-[#532C8A] p-2 rounded-md">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 11C20 15.97 15.97 20 11 20C6.03 20 2 15.97 2 11C2 6.03 6.03 2 11 2"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.9304 20.6898C19.4604 22.2898 20.6704 22.4498 21.6004 21.0498C22.4504 19.7698 21.8904 18.7198 20.3504 18.7198C19.2104 18.7098 18.5704 19.5998 18.9304 20.6898Z"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 5H20"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 8H17"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-start items-start gap-2.5">
                  <p className="text-white text-xl">Quick checks</p>
                  <p className="text-base font-normal text-white">
                    14 this month
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-start items-center gap-4 p-6 bg-[#0F0F0F] rounded-2xl">
                <div className="bg-[#532C8A] p-2 rounded-md">
                  <NotepadText className="stroke-white" />
                </div>
                <div className="flex flex-col justify-start items-start gap-2.5">
                  <p className="text-white text-xl">Reports filed</p>
                  <p className="text-base font-normal text-white">6 total</p>
                </div>
              </div>
              <div className="w-full flex justify-start items-center gap-4 p-6 bg-[#0F0F0F] rounded-2xl">
                <div className="bg-[#532C8A] p-2 rounded-md">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.6499 13.7999L11.2599 15.0499C11.4699 15.2599 11.9399 15.3598 12.2499 15.3598H14.2299C14.8499 15.3598 15.5299 14.8899 15.6899 14.2699L16.9399 10.4798C17.1999 9.74981 16.7299 9.12984 15.9499 9.12984H13.8699C13.5599 9.12984 13.2999 8.86984 13.3499 8.50984L13.6099 6.84981C13.7099 6.37981 13.3999 5.85979 12.9299 5.70979C12.5099 5.54979 11.9899 5.75978 11.7899 6.06978L9.65991 9.23982"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M7 13.7998V8.70972C7 7.97972 7.30999 7.71973 8.03999 7.71973H8.56C9.29 7.71973 9.60001 7.97972 9.60001 8.70972V13.7998C9.60001 14.5298 9.29 14.7898 8.56 14.7898H8.03999C7.30999 14.7898 7 14.5298 7 13.7998Z"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-start items-start gap-2.5">
                  <p className="text-white text-xl">Vote casts</p>
                  <p className="text-base font-normal text-white">
                    24 DAO votes
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-start items-center gap-4 p-6 bg-[#0F0F0F] rounded-2xl">
                <div className="bg-[#532C8A] p-2 rounded-md">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.26999 9.01999 9.01999C9.00999 8.84999 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.00999 9.01999 9.01999C12.19 9.26999 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.62 14.62L8.5 13L9.38 14.62L11 15.5L9.38 16.38L8.5 18L7.62 16.38L6 15.5L7.62 14.62Z"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-start items-start gap-2.5">
                  <p className="text-white text-xl">Tokens earned</p>
                  <p className="text-base font-normal text-white">
                    780 $TRUTHS
                  </p>
                </div>
              </div>
              <button className="w-full text-xl text-[#CEB0FA] rounded-xl bg-[#532C8A] py-4 btn-glow">
                Run Quick check
              </button>
              <button className="w-full text-xl text-[#CEB0FA] rounded-xl bg-[#532C8A] py-4 btn-glow">
                Submit new report
              </button>
            </div>

            <div className="flex flex-col justify-start items-start gap-5 w-full max-w-[356px]">
              <div className="w-full py-7 px-6 bg-[#532C8A] rounded-xl flex flex-col justify-start items-start gap-6">
                <p className="text-white text-xl font-normal">Token balance</p>
                <p className="text-3xl text-[#CEB0FA] font-medium flex justify-start items-center">
                  2,400 <span className="text-sm font-normal ml-3">$TRUTH</span>
                </p>
                <p className="mt-1.5 text-base text-[#CECECE]">
                  Contribute verified reports to earn $TRUTH tokens
                </p>
              </div>
              <div className="w-full py-5 px-6 rounded-xl flex flex-col justify-start items-start gap-7 bg-[#0F0F0F]">
                <p className="text-xl text-white font-normal">Reputation</p>
                <p className="text-[#CECECE] text-base font-normal">Level 2</p>
                <div className="w-full bg-[#202020] h-2.5 rounded-full">
                  <div className="bg-[#CEB0FA] w-16 h-full rounded-full"></div>
                </div>
                <p className="text-[#CECECE] text-base font-normal">
                  Contribute verified reports to level up
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[685px] flex flex-col justify-start items-start gap-7">
          <div className="w-full flex justify-between items-center">
            <p className="text-white text-2xl font-medium">Recent Activity</p>
            <p className="text-[#868686] text-2xl font-medium">See all</p>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <div className="w-full bg-[#0F0F0F] flex justify-between items-start py-4 px-6 rounded-2xl">
              <div className="flex justify-start items-center gap-7">
                <div className="bg-[#532C8A] rounded-lg p-2.5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.37988 12.0001L10.7899 14.4201L15.6199 9.58008"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.7499 2.45007C11.4399 1.86007 12.5699 1.86007 13.2699 2.45007L14.8499 3.81007C15.1499 4.07007 15.7099 4.28007 16.1099 4.28007H17.8099C18.8699 4.28007 19.7399 5.15007 19.7399 6.21007V7.91007C19.7399 8.30007 19.9499 8.87007 20.2099 9.17007L21.5699 10.7501C22.1599 11.4401 22.1599 12.5701 21.5699 13.2701L20.2099 14.8501C19.9499 15.1501 19.7399 15.7101 19.7399 16.1101V17.8101C19.7399 18.8701 18.8699 19.7401 17.8099 19.7401H16.1099C15.7199 19.7401 15.1499 19.9501 14.8499 20.2101L13.2699 21.5701C12.5799 22.1601 11.4499 22.1601 10.7499 21.5701L9.16988 20.2101C8.86988 19.9501 8.30988 19.7401 7.90988 19.7401H6.17988C5.11988 19.7401 4.24988 18.8701 4.24988 17.8101V16.1001C4.24988 15.7101 4.03988 15.1501 3.78988 14.8501L2.43988 13.2601C1.85988 12.5701 1.85988 11.4501 2.43988 10.7601L3.78988 9.17007C4.03988 8.87007 4.24988 8.31007 4.24988 7.92007V6.20007C4.24988 5.14007 5.11988 4.27007 6.17988 4.27007H7.90988C8.29988 4.27007 8.86988 4.06007 9.16988 3.80007L10.7499 2.45007Z"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-start items-start gap-2.5">
                  <p className="text-white text-xl font-normal">
                    You verified a claim
                  </p>
                  <p className="text-base text-[#CECECE]">
                    “Naira redesigned again” - Earned 20 $TRUTH
                  </p>
                </div>
              </div>
              <div className="bg-[#891414] rounded-full py-1.5 px-5 flex justify-center items-center gap-2">
                <div className="size-[5px] rounded-full bg-[#FCCFCF]" />
                <p className="text-xs text-[#FCCFCF] font-normal">False</p>
              </div>
            </div>
            <div className="w-full bg-[#0F0F0F] flex justify-between items-start py-4 px-6 rounded-2xl">
              <div className="flex justify-start items-center gap-7">
                <div className="bg-[#532C8A] rounded-lg p-2.5">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.42 6.94987C17.86 9.38987 17.86 13.3498 15.42 15.7898C12.98 18.2298 9.02 18.2298 6.58 15.7898C4.14 13.3498 4.14 9.38987 6.58 6.94987C9.02 4.50987 12.98 4.50987 15.42 6.94987Z"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.24999 20.6399C5.24999 19.8399 3.49999 18.3899 2.33999 16.3799C1.19999 14.4099 0.819991 12.2199 1.08999 10.1299"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.8501 3.47986C6.5501 2.14986 8.68009 1.35986 11.0001 1.35986C13.2701 1.35986 15.3601 2.12985 17.0401 3.40985"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.75 20.6399C16.75 19.8399 18.5 18.3899 19.66 16.3799C20.8 14.4099 21.18 12.2199 20.91 10.1299"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-start items-start gap-2.5">
                  <p className="text-white text-xl font-normal">
                    You made a report
                  </p>
                  <p className="text-base text-[#CECECE]">
                    “Fuel subsidy removal” - Earned 50 $TRUTH
                  </p>
                </div>
              </div>
              <div className="bg-[#0B602D] rounded-full py-1.5 px-5 flex justify-center items-center gap-2">
                <div className="size-[5px] rounded-full bg-[#D1FAE0]" />
                <p className="text-xs text-[#D1FAE0] font-normal">Verified</p>
              </div>
            </div>
            <div className="w-full bg-[#0F0F0F] flex justify-between items-start py-4 px-6 rounded-2xl">
              <div className="flex justify-start items-center gap-7">
                <div className="bg-[#532C8A] rounded-lg p-2.5">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.42 6.94987C17.86 9.38987 17.86 13.3498 15.42 15.7898C12.98 18.2298 9.02 18.2298 6.58 15.7898C4.14 13.3498 4.14 9.38987 6.58 6.94987C9.02 4.50987 12.98 4.50987 15.42 6.94987Z"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.24999 20.6399C5.24999 19.8399 3.49999 18.3899 2.33999 16.3799C1.19999 14.4099 0.819991 12.2199 1.08999 10.1299"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.8501 3.47986C6.5501 2.14986 8.68009 1.35986 11.0001 1.35986C13.2701 1.35986 15.3601 2.12985 17.0401 3.40985"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.75 20.6399C16.75 19.8399 18.5 18.3899 19.66 16.3799C20.8 14.4099 21.18 12.2199 20.91 10.1299"
                      stroke="#CEB0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-start items-start gap-2.5">
                  <p className="text-white text-xl font-normal">
                    New claim pending verification
                  </p>
                  <p className="text-base text-[#CECECE]">
                    “Tinubu dissolves EFCC”
                  </p>
                </div>
              </div>
              <div className="bg-[#855C15] rounded-full py-1.5 px-5 flex justify-center items-center gap-2">
                <div className="size-[5px] rounded-full bg-[#FFF1B3]" />
                <p className="text-xs text-[#FFF1B3] font-normal">
                  Pending verification
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
