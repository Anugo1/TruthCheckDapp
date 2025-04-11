import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { navData } from "../data/navdata";
import { ChevronDown, Globe } from "lucide-react";

export default function HomeLayout() {
  const { pathname } = useLocation();
  return (
    <>
      <nav className="w-full py-10 px-6 flex justify-between items-center bg-[#04000B] border-b border-b-[#3B3B3B]">
        <div className="flex justify-start items-center">
          <img src={logo} alt="logo" />
          <p className="text-lg text-purple-50 ">TruthCheck</p>
        </div>
        <div className="flex justify-start items-center gap-7">
          {navData.map((data) => (
            <Link
              key={data.title}
              to={data.path}
              className="text-base text-[#FBFBFB] font-normal flex flex-col justify-start items-center"
            >
              {data.title}
              {pathname === data.path && (
                <div className="bg-[#6200EE] rounded-full size-1" />
              )}
            </Link>
          ))}
          <button className="flex justify-start items-center gap-2 text-base text-[#E9E9E9] cursor-pointer">
            <Globe className="size-4 color-[#E9E9E9]" />
            <p>English</p>
            <ChevronDown className="size-4 color-[#E9E9E9]" />
          </button>
        </div>
        <button className="py-4 px-5 bg-[#1B82E8] rounded-xl text-[#E9E9E9]">
          Go to dashboard
        </button>
      </nav>
      <main className="w-full bg-[#04000B] min-h-screen">
        <Outlet />
      </main>
    </>
  );
}
