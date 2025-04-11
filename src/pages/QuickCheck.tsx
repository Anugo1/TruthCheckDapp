export default function QuickCheck() {
  return (
    <section className="w-full py-9 px-6 flex flex-col justify-start items-start gap-8">
      <div className="w-full flex flex-col justify-start items-start gap-4 text-[#B6B6B6]">
        <p className="text-3xl font-medium">Check the fact - fast</p>
        <p className="text-xl font-normal">
          Paste a link, type a claim, or upload an image to verify if its true
          or false
        </p>
      </div>
      <div className="w-full h-[549px] flex flex-col justify-between items-start">
        <div className="w-full bg-[#0F0F0F] border-[#4E4E4E] py-4 px-6 rounded-3xl flex justify-between items-center gap-2">
          <input
            type="search"
            name="search"
            id="search"
            className="w-full bg-transparent outline-none text-base text-white placeholder:text-[#B6B6B6]"
            placeholder="Enter text or URL"
          />
          <div className="flex justify-start items-center gap-6">
            <button className="flex justify-start items-center gap-1 bg-[#3A3A3A] border border-[#515151] rounded-md py-1 px-2 cursor-pointer whitespace-nowrap">
              <svg
                width="13"
                height="15"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.31358 1.34911C6.85663 0.80606 7.59317 0.500977 8.36116 0.500977C9.12915 0.500977 9.86569 0.80606 10.4087 1.34911C10.9518 1.89217 11.2569 2.6287 11.2569 3.3967C11.2569 4.16469 10.9518 4.90123 10.4087 5.44428L5.40006 10.453C5.24542 10.6077 5.06182 10.7304 4.85975 10.8141C4.65768 10.8979 4.4411 10.941 4.22236 10.941C3.78061 10.9411 3.35692 10.7657 3.04449 10.4534C2.73206 10.1411 2.5565 9.71746 2.55642 9.2757C2.55634 8.83395 2.73175 8.41025 3.04405 8.09783L7.9031 3.23792L8.51907 3.85389L3.65916 8.71293C3.58529 8.78679 3.5267 8.87448 3.48673 8.97099C3.44675 9.0675 3.42618 9.17093 3.42618 9.27539C3.42618 9.37985 3.44675 9.48329 3.48673 9.5798C3.5267 9.67631 3.58529 9.764 3.65916 9.83786C3.73302 9.91172 3.82071 9.97032 3.91722 10.0103C4.01373 10.0503 4.11716 10.0708 4.22162 10.0708C4.32608 10.0708 4.42952 10.0503 4.52603 10.0103C4.62253 9.97032 4.71022 9.91172 4.78409 9.83786L9.79277 4.82918C9.98089 4.64106 10.1301 4.41773 10.2319 4.17195C10.3337 3.92616 10.3861 3.66273 10.3861 3.3967C10.3861 3.13066 10.3337 2.86723 10.2319 2.62144C10.1301 2.37566 9.98089 2.15233 9.79277 1.96421C9.60465 1.7761 9.38133 1.62688 9.13554 1.52507C8.88976 1.42326 8.62632 1.37086 8.36029 1.37086C8.09425 1.37086 7.83082 1.42326 7.58504 1.52507C7.33925 1.62688 7.11592 1.7761 6.92781 1.96421L1.77035 7.12254C1.17206 7.73575 0.839521 8.56002 0.844796 9.41673C0.850071 10.2734 1.19274 11.0936 1.79853 11.6994C2.40433 12.3051 3.22445 12.6478 4.08115 12.6531C4.93786 12.6584 5.76214 12.3258 6.37535 11.7275L11.384 6.71798L12 7.33395L6.99045 12.3426C6.21193 13.0932 5.1699 13.5081 4.08856 13.4982C3.00722 13.4882 1.973 13.0542 1.2084 12.2895C0.443807 11.5248 0.00994653 10.4905 0.0001689 9.40915C-0.00960873 8.32782 0.405478 7.28585 1.15612 6.50744L6.31358 1.34911Z"
                  fill="#747474"
                />
              </svg>
              <p className="text-[#989898] text-base">
                Click to upload screenshot or image
              </p>
            </button>
            <button className="text-base text-white py-3 px-8 bg-[#8133F1] rounded-xl w-fit whitespace-nowrap">
              Quick check
            </button>
          </div>
        </div>
        <div className="w-full max-w-[534px] flex flex-col justify-start items-center gap-4 mx-auto">
          <p className="text-xl font-medium text-[#E2E2E2]">
            Powered by Trusted sources and Verified data
          </p>
          <div className="flex justify-center items-center gap-11 text-[#888888] text-xl">
            <p>Privacy policy</p>
            <p>Report issue</p>
            <p>About TruthCheck</p>
          </div>
        </div>
      </div>
    </section>
  );
}
