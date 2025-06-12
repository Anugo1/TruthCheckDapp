import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { navData2 } from "../data/navdata";
import { Bell, ChevronDown, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useWallet } from "../hooks/useWallet";
import { useTranslation } from "react-i18next";
import "../i18n"; // Import i18n configuration

export default function DashboardLayout() {
  const navigate = useNavigate();
  const { walletAddress, connectWallet, disconnectWallet } = useWallet();
  const { t, i18n } = useTranslation();

  const { pathname } = useLocation();
  useEffect(() => {
    const activeNavItem = navData2.find((item) => item.path === pathname);
    if (activeNavItem) {
      document.title = activeNavItem.title; // Optionally set the document title
    }
  }, [pathname]);

  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleLanguageDropdown = () => {
    setLanguageDropdownVisible(!languageDropdownVisible);
  };

  const handleLanguageSelect = (language: string, lngCode: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(lngCode); // Change the language
    setLanguageDropdownVisible(false); // Close the dropdown
  };

  return (
    <section className="flex justify-start items-start bg-[#6c6868] min-h-screen h-full">
      <nav className="w-fit h-full min-h-screen flex flex-col justify-between items-center p-7 bg-[#0F0F0F]">
        <div className="w-full flex flex-col justify-start items-start gap-14">
          <div className="flex justify-start items-center cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
            <p className="text-lg text-purple-50 ">TruthCheck</p>
          </div>
          <div className="flex flex-col justify-start items-start gap-7">
            {navData2.map((data) => (
              <NavLink
                to={data.path}
                key={data.title}
                className={({ isActive }) =>
                  `text-base flex justify-start items-center gap-3 whitespace-nowrap ${
                    isActive ? "text-[#9654F4]" : "text-[#A0A0A0]"
                  }`
                }
              >
                <data.icon />
                <p>{data.title}</p>
              </NavLink>
            ))}
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="flex justify-start items-center gap-2 text-base text-[#A0A0A0] cursor-pointer"
              >
                <Globe className="size-4 stroke-[#A0A0A0]" />
                <p>{selectedLanguage}</p>
                <ChevronDown className="size-4 stroke-[#A0A0A0]" />
              </button>
              {languageDropdownVisible && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-[#1F1F1F] rounded-lg shadow-lg z-10">
                  <ul className="flex flex-col">
                    {[
                      { name: "English", code: "en" },
                      { name: "Igbo", code: "ig" },
                      { name: "Yoruba", code: "yo" },
                      { name: "Hausa", code: "ha" }
                    ].map((language) => (
                      <li
                        key={language.code}
                        onClick={() => handleLanguageSelect(language.name, language.code)}
                        className="px-4 py-2 text-[#A0A0A0] hover:bg-[#3B3B3B] cursor-pointer"
                      >
                        {language.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 border-t border-t-[#292929] py-3.5 px-2">
          <p className="text-[#A0A0A0] text-base whitespace-nowrap">
            Terms of use
          </p>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66675 7.45348L14.1334 1.98682"
              stroke="#A0A0A0"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.6666 4.65361V1.45361H11.4666"
              stroke="#A0A0A0"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.33325 1.45361H5.99992C2.66659 1.45361 1.33325 2.78695 1.33325 6.12028V10.1203C1.33325 13.4536 2.66659 14.7869 5.99992 14.7869H9.99992C13.3333 14.7869 14.6666 13.4536 14.6666 10.1203V8.78695"
              stroke="#A0A0A0"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </nav>
      <section className="w-full flex flex-col justify-start items-start bg-[#030303] h-screen">
        <section className="w-full px-6 py-7 flex justify-between items-center border-b border-b-[#3B3B3B]">
          <p className="text-white text-[28px]">{t("dashboard")}</p>
          <div className="flex justify-start items-center gap-6">
            <Bell className="stroke-[#C6C6C6]" />
            {walletAddress ? (
              <div
                onClick={disconnectWallet}
                className="py-2 px-4 bg-[#1B82E8] rounded-xl text-[#E9E9E9] cursor-pointer hover:bg-[#155fa1] transition-all"
                title="Click to disconnect wallet"
              >
                <p className="text-sm text-white">
                  {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                </p>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="py-3 px-4 bg-[#1B82E8] rounded-xl text-[#E9E9E9] cursor-pointer hover:bg-[#155fa1] transition-all"
              >
                {t("connect_wallet")}
              </button>
            )}
          </div>
        </section>
        <section className="w-full h-full bg-[#030303] overflow-y-auto">
          <Outlet />
        </section>
      </section>
    </section>
  );
}
