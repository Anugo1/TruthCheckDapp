import headerImage from "../assets/header.png";
export default function Homepage() {
  return (
    <section className="w-full flex flex-col justify-start items-center gap-24 pt-14 relative overflow-hidden">
      <div className="w-full flex flex-col justify-start items-center gap-4 max-w-[1060px] mx-auto">
        <p className="text-[90px] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ECECEC] to-[#8C5BD8] text-center  font-semibold">
          Empowering Nigerians with the Truth
        </p>
        <p className="text-white text-2xl font-medium">
          Fight misinformation with our Truth Quick Check Tool
        </p>
        <div className="w-full bg-white max-w-[700px] flex justify-between items-center rounded-xl mt-6 overflow-hidden">
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Paste a message, link, or describe the claim"
            className="text-base py-5 px-6 placeholder:text-[#BEBEBE] w-full outline-none"
          />
          <button
            type="button"
            className="py-5 px-10 bg-[#8133F1] whitespace-nowrap text-white text-base font-medium cursor-pointer"
          >
            Verify claim
          </button>
        </div>
      </div>
      <div className="w-full px-6 relative z-20">
        <img
          src={headerImage}
          alt="header"
          className="max-w-[1240px] w-full mx-auto"
        />
      </div>
      <div className="size-[1000px] bg-[#0A56A0]/70 blur-[400px] rounded-full absolute top-[40%] -left-[50%]" />
      <div className="size-[1000px] bg-[#0A56A0]/70 blur-[400px] rounded-full absolute top-[40%] -right-[50%]" />
    </section>
  );
}
