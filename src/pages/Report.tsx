import { useState } from "react";
import chat from "../assets/chat.png";
import { ReportForm } from "../components/ReportForm";
import { ReportSuccess } from "../components/ReportSuccess";
export default function Report() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  return (
    <section className="w-full flex flex-col justify-start items-start gap-11 py-11 px-6 relative">
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <p className="text-3xl text-[#9B9B9B] font-medium">
          Report Suspicious Claims
        </p>
        <p className="text-xl text-[#9B9B9B] font-normal w-full max-w-[1000px]">
          Contribute to the decentralized fight against misinformation. Submit a
          claim, attach proof, and help validate truth on the blockchain.
        </p>
        <img
          src={chat}
          alt="chat"
          className="mx-auto mt-16"
          width={179}
          height={169}
        />
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-20 max-w-[705px] mx-auto">
        <div className="w-full flex flex-col justify-start items-center gap-4">
          <p className="text-3xl text-[#E8E8E8] font-medium">No Reports made</p>
          <p className="text-sm text-[#ACACAC] font-medium text-center">
            Not sure what to report? If you've seen any suspicious or misleading
            claims online, submit it here. Every report helps strengthen our
            collective truth.
          </p>
          <button
            className="text-[#E9E9E9] text-base font-normal py-4 px-7 bg-[#8133F1] rounded-xl"
            onClick={() => setIsOpen(true)}
          >
            Click to make a report
          </button>
        </div>
        <p className="text-base text-white font-medium">
          Want to verify a claim first? Try our{" "}
          <span className="text-[#9654F4] cursor-pointer">
            Quick Check Tool
          </span>{" "}
          before submitting.
        </p>
      </div>
      {isOpen && (
        <ReportForm setIsOpen={setIsOpen} setIsSuccess={setIsSuccess} />
      )}
      {isSuccess && <ReportSuccess setIsSuccess={setIsSuccess} />}
    </section>
  );
}
