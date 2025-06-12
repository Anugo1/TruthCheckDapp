import { ArrowLeft } from "lucide-react";
import resultImg from "../assets/result.png";

export const NoResult = () => {
  return (
    <section className="w-full py-9 px-6 flex flex-col justify-start items-start gap-10">
      <div className="w-full flex justify-start items-center gap-3 text-[#B78AF7] cursor-pointer">
        <ArrowLeft />
        <p className="text-base">Back to previous page</p>
      </div>
      <div className="w-full bg-[#0F0F0F] border-[#4E4E4E] py-4 px-6 rounded-3xl flex justify-between items-center gap-2">
        <input
          type="search"
          name="search"
          id="search"
          className="w-full bg-transparent outline-none text-base text-white placeholder:text-[#B6B6B6]"
          placeholder="Enter text or URL"
        />
        <div className="flex justify-start items-center gap-6">
          <button className="text-base text-white py-3 px-8 bg-[#8133F1] rounded-xl w-fit whitespace-nowrap">
            Quick check
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-center gap4">
        <img src={resultImg} alt="result" width={233} height={155} />
        <p className="text-3xl font-medium text-[#E8E8E8] mt-8">
          No results found
        </p>
        <p className="text-xl text-[#8F8F8F]">
          There's no verified information to show you now
        </p>
      </div>
    </section>
  );
};
