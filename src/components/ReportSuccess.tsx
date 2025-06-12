import { Check, X } from "lucide-react";
interface MyComponentProps {
  setIsSuccess: (isSuccess: boolean) => void;
}
export const ReportSuccess: React.FC<MyComponentProps> = ({ setIsSuccess }) => {
  return (
    <section className="absolute top-0 left-0 w-full h-full bg-black/25 backdrop-blur-md flex items-start justify-center">
      <section className="w-full max-w-[465px] bg-[#1D1D1D] p-5 rounded-2xl mt-4 flex flex-col justify-start items-center gap-8">
        <div className="w-full flex justify-end items-center">
          <X
            className="stroke-[#6F6F6F] size-6 stroke-3 cursor-pointer"
            onClick={() => setIsSuccess(false)}
          />
        </div>
        <div className="p-6 rounded-full bg-[#0E7C3A] border-8 border-[#36D576] mx-auto">
          <Check className="stroke-[#36D576]" />
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-2 pb-10">
          <p className="text-xl text-white font-medium">
            Claim submitted successfully
          </p>
          <p className="text-sm text-[#ADADAD]">
            Thanks for contributing to the truth.
          </p>
        </div>
      </section>
    </section>
  );
};
