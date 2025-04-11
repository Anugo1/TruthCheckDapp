import { ArrowLeft } from "lucide-react";

export const PageLoader = () => {
  return (
    <section className="w-full py-9 px-6 flex flex-col justify-start items-start gap-10">
      <div className="w-full flex justify-start items-center gap-3 text-[#B78AF7] cursor-pointer">
        <ArrowLeft />
        <p className="text-base">Back to previous page</p>
      </div>
      <section className="w-full max-w-[814px] flex flex-col justify-start items-start gap-14 mx-auto">
        <section className="w-full flex flex-col justify-start items-start gap-5">
          <p className="max-w-[204px] w-full bg-[#4B4B4B] h-[12px] rounded-full"></p>
          <div className="w-full flex flex-col justify-start items-start gap-5 p-7 bg-[#0F0F0F] rounded-xl">
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <p className="bg-[#4B4B4B] w-full h-[31px] rounded-full"></p>
              <p className="bg-[#4B4B4B] w-full max-w-[459px] h-[31px] rounded-full"></p>
              <div className="w-full flex justify-between items-center">
                <p className="w-full max-w-[192px] h-3 rounded-full bg-[#4B4B4B]"></p>
                <p className="w-full max-w-[367px] bg-[#4B4B4B] rounded-full h-3"></p>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-9">
              <div className="bg-[#2E2E2E] py-5 px-6 flex flex-col justify-start items-start gap-2.5 rounded-2xl">
                <p className="w-full max-w-[43px] bg-[#4B4B4B] h-3 rounded-full"></p>
                <p className="w-full max-w-[248px] bg-[#4B4B4B] h-3 rounded-full"></p>
                <p className="w-full max-w-[204px] bg-[#4B4B4B] h-3 rounded-full"></p>
              </div>
              <div className="bg-[#2E2E2E] py-5 px-6 flex flex-col justify-start items-start gap-2.5 rounded-2xl">
                <p className="w-full max-w-[68px] bg-[#4B4B4B] h-3 rounded-full"></p>
                <p className="w-full max-w-[158px] bg-[#4B4B4B] h-3 rounded-full"></p>
                <p className="w-full max-w-[272px] bg-[#4B4B4B] h-3 rounded-full"></p>
                <p className="w-full max-w-[272px] bg-[#4B4B4B] h-3 rounded-full"></p>
                <p className="w-full max-w-[272px] bg-[#4B4B4B] h-3 rounded-full"></p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col justify-start items-start gap-5">
          <p className="max-w-[136px] w-full bg-[#4B4B4B] h-[12px] rounded-full"></p>
          <div className="w-full flex flex-col justify-start items-start gap-7 p-7 bg-[#0F0F0F] rounded-xl">
            <div className="w-full flex justify-between items-center gap-2">
              <div className="flex justify-start items-center gap-3.5 w-full">
                <p className="w-full max-w-[415px] bg-[#4B4B4B] rounded-full h-3"></p>
                <p className="w-full max-w-[64px] bg-[#4B4B4B] rounded-full h-3"></p>
                <div className="w-full max-w-[100px] h-8 bg-[#2E2E2E] rounded-lg flex justify-center items-center gap-2 py-2 px-3">
                  <div className="w-full max-w-[60px] h-2.5 bg-[#4B4B4B] rounded-full" />
                  <div className="w-full max-w-[8.5px] h-1 bg-[#4B4B4B] rounded-full" />
                </div>
              </div>
              <p className="w-full max-w-[81px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-14">
              <div className="w-full flex flex-col justify-start items-start gap-4">
                <div className="w-full flex justify-between items-center">
                  <p className="w-full max-w-[482px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                  <div className="bg-[#2E2E2E] w-full max-w-[60px] h-6 flex justify-center items-center gap-2 rounded-full py-1 px-2">
                    <div className="size-[5px] bg-[#4B4B4B] rounded-full" />
                    <p className="w-full max-w-[30px] h-2.5 bg-[#4B4B4B] rounded-full"></p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <p className="w-full max-w-[307px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                  <p className="w-full max-w-[448px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                </div>
                <div className="flex justify-start items-start gap-6 mt-2 w-full">
                  <div className="flex justify-start items-center gap-2">
                    <div className="size-3 rounded-full bg-[#4B4B4B]" />
                    <p className="w-[85px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="size-3 rounded-full bg-[#4B4B4B]" />
                    <p className="w-[109px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                  </div>
                  <p className="w-[162px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-4">
                <div className="w-full flex justify-between items-center">
                  <p className="w-full max-w-[482px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                  <div className="bg-[#2E2E2E] w-full max-w-[60px] h-6 flex justify-center items-center gap-2 rounded-full py-1 px-2">
                    <div className="size-[5px] bg-[#4B4B4B] rounded-full" />
                    <p className="w-full max-w-[30px] h-2.5 bg-[#4B4B4B] rounded-full"></p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <p className="w-full max-w-[307px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                  <p className="w-full max-w-[448px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                </div>
                <div className="flex justify-start items-start gap-6 mt-2 w-full">
                  <div className="flex justify-start items-center gap-2">
                    <div className="size-3 rounded-full bg-[#4B4B4B]" />
                    <p className="w-[85px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="size-3 rounded-full bg-[#4B4B4B]" />
                    <p className="w-[109px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                  </div>
                  <p className="w-[162px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-4">
                <div className="w-full flex justify-between items-center">
                  <p className="w-full max-w-[482px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                  <div className="bg-[#2E2E2E] w-full max-w-[60px] h-6 flex justify-center items-center gap-2 rounded-full py-1 px-2">
                    <div className="size-[5px] bg-[#4B4B4B] rounded-full" />
                    <p className="w-full max-w-[30px] h-2.5 bg-[#4B4B4B] rounded-full"></p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <p className="w-full max-w-[307px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                  <p className="w-full max-w-[448px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                </div>
                <div className="flex justify-start items-start gap-6 mt-2 w-full">
                  <div className="flex justify-start items-center gap-2">
                    <div className="size-3 rounded-full bg-[#4B4B4B]" />
                    <p className="w-[85px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="size-3 rounded-full bg-[#4B4B4B]" />
                    <p className="w-[109px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                  </div>
                  <p className="w-[162px] h-3.5 bg-[#4B4B4B] rounded-full"></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
