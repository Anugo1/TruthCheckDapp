import { X } from "lucide-react";
interface MyComponentProps {
  setIsOpen: (isOpen: boolean) => void;
  setIsSuccess: (isSuccess: boolean) => void;
}
export const ReportForm: React.FC<MyComponentProps> = ({
  setIsOpen,
  setIsSuccess,
}) => {
  return (
    <section className="absolute top-0 left-0 w-full h-full bg-black/25 backdrop-blur-md flex items-start justify-center">
      <section className="w-full max-w-[465px] bg-[#1D1D1D] p-5 rounded-2xl mt-4 flex flex-col justify-start items-start gap-8">
        <div className="w-full flex justify-between items-center">
          <p></p>
          <p className="text-xl text-white font-medium">Report claim</p>
          <X
            className="stroke-[#6F6F6F] size-6 stroke-3 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <form className="w-full flex flex-col justify-start items-start gap-5">
          <div className="flex flex-col justify-start items-start gap-3 w-full">
            <label htmlFor="title" className="text-sm text-[#C7C7C7]">
              Claim title<span className="text-[#FF3838]">*</span>
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="bg-[#252525] py-3.5 px-2.5 rounded-lg outline-none text-xs text-white placeholder:text-[#838383] w-full"
              placeholder="Short summary, e.g Okro soup cures Cancer"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-3 w-full">
            <label
              htmlFor="desc"
              className="text-sm text-[#C7C7C7] flex justify-between items-center w-full"
            >
              <p>Full claim description</p>
              <p className="text-[#AEAEAE]">500 word limit</p>
            </label>
            <textarea
              name="desc"
              id="desc"
              className="bg-[#252525] py-3.5 px-2.5 rounded-lg outline-none text-xs text-white placeholder:text-[#838383] w-full resize-none h-[88px]"
              placeholder="Describe the claim as seen/heard"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-3 w-full">
            <label htmlFor="claim" className="text-sm text-[#C7C7C7]">
              Where did you find this claim?
              <span className="text-[#FF3838]">*</span>
            </label>
            <select
              name="claim"
              id="claim"
              className="bg-[#252525] py-3.5 px-2.5 rounded-lg outline-none text-xs text-[#838383] placeholder:text-[#838383] w-full "
            >
              <option value="">Select where you found this claim</option>
            </select>
          </div>
          <div className="flex flex-col justify-start items-start gap-3 w-full relative">
            <label htmlFor="title" className="text-sm text-[#C7C7C7]">
              Source link or Screenshot
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="bg-[#252525] py-3.5 px-2.5 rounded-lg outline-none text-xs text-white placeholder:text-[#838383] w-full"
              placeholder="Paste URL here"
            />
            <div className="flex justify-start items-center gap-1 bg-[#3A3A3A] border border-[#515151] rounded-md py-1 px-2 absolute bottom-2 right-2 cursor-pointer">
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.31358 1.34911C6.85663 0.80606 7.59317 0.500977 8.36116 0.500977C9.12915 0.500977 9.86569 0.80606 10.4087 1.34911C10.9518 1.89217 11.2569 2.6287 11.2569 3.3967C11.2569 4.16469 10.9518 4.90123 10.4087 5.44428L5.40006 10.453C5.24542 10.6077 5.06182 10.7304 4.85975 10.8141C4.65768 10.8979 4.4411 10.941 4.22236 10.941C3.78061 10.9411 3.35692 10.7657 3.04449 10.4534C2.73206 10.1411 2.5565 9.71746 2.55642 9.2757C2.55634 8.83395 2.73175 8.41025 3.04405 8.09783L7.9031 3.23792L8.51907 3.85389L3.65916 8.71293C3.58529 8.78679 3.5267 8.87448 3.48673 8.97099C3.44675 9.0675 3.42618 9.17093 3.42618 9.27539C3.42618 9.37985 3.44675 9.48329 3.48673 9.5798C3.5267 9.67631 3.58529 9.764 3.65916 9.83786C3.73302 9.91172 3.82071 9.97032 3.91722 10.0103C4.01373 10.0503 4.11716 10.0708 4.22162 10.0708C4.32608 10.0708 4.42952 10.0503 4.52603 10.0103C4.62253 9.97032 4.71022 9.91172 4.78409 9.83786L9.79277 4.82918C9.98089 4.64106 10.1301 4.41773 10.2319 4.17195C10.3337 3.92616 10.3861 3.66273 10.3861 3.3967C10.3861 3.13066 10.3337 2.86723 10.2319 2.62144C10.1301 2.37566 9.98089 2.15233 9.79277 1.96421C9.60465 1.7761 9.38133 1.62688 9.13554 1.52507C8.88976 1.42326 8.62632 1.37086 8.36029 1.37086C8.09425 1.37086 7.83082 1.42326 7.58504 1.52507C7.33925 1.62688 7.11592 1.7761 6.92781 1.96421L1.77035 7.12254C1.17206 7.73575 0.839521 8.56002 0.844796 9.41673C0.850071 10.2734 1.19274 11.0936 1.79853 11.6994C2.40433 12.3051 3.22445 12.6478 4.08115 12.6531C4.93786 12.6584 5.76214 12.3258 6.37535 11.7275L11.384 6.71798L12 7.33395L6.99045 12.3426C6.21193 13.0932 5.1699 13.5081 4.08856 13.4982C3.00722 13.4882 1.973 13.0542 1.2084 12.2895C0.443807 11.5248 0.00994653 10.4905 0.0001689 9.40915C-0.00960873 8.32782 0.405478 7.28585 1.15612 6.50744L6.31358 1.34911Z"
                  fill="#FBFBFB"
                />
              </svg>
              <p className="text-[#FBFBFB] text-xs">Attach Screenshot</p>
            </div>
          </div>
          <div className="w-full flex justify-start items-center gap-2">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className="size-[18px] accent-[#C7C7C7] bg-transparent cursor-pointer"
            />
            <p className="text-sm text-[#C7C7C7]">
              I agree to store this report publicly on the blockchain
            </p>
          </div>
          <div className="w-full flex justify-between items-center">
            <button
              type="button"
              className="py-3 px-16 bg-[#252525] border border-[#343434] cursor-pointer rounded-xl text-[#909090] btn-glow btn-glow-white"
            >
              Discard
            </button>
            <button
              type="button"
              className="py-3 px-16 bg-[#8133F1] border border-[#8133F1] cursor-pointer rounded-xl text-white btn-glow"
              onClick={() => {
                setIsSuccess(true);
                setIsOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};
