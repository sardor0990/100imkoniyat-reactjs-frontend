import React, { useState } from "react";
import ArrowBlack from "../../assets/icons/arrow-right.svg";
import User from "../../assets/icons/user-black.svg";
import Setting from "../../assets/icons/setting-2.svg";
import Nap from "../../assets/icons/material-symbols_prompt-suggestion.svg";
import Message from "../../assets/icons/message-question.svg";
import SmcT from "../../assets/icons/sms-tracking.svg";
import SmcStar from "../../assets/icons/sms-star.svg";
import Logout from "../../assets/icons/logout.svg";
import ArrowUp from "../../assets/icons/arrow-down-black.svg";
import Taklif from "./taklif";
import Sozlamalar from "./sozlamalar";
import Shaxsiy from "./shaxsiy";
import { useNavigate } from "react-router-dom";

const Profil: React.FC = () => {
  let url = window.location.pathname;
  console.log(url);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-[20px] items-center my-[60px]">
      <div className="w-full max-w-[1280px] flex-start">
        <div
          className="flex gap-[10px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={ArrowBlack} width={20} height={20} className="rotate-180" />
          <p className="text-[#161616]  text-[14px] font-[600] ">
            Ortga qaytish
          </p>
        </div>
      </div>

      <div className="flex w-full max-w-[1280px] gap-[30px]">
        <div
          className="w-[407px] h-[750px] rounded-[24px]  flex flex-col items-start relative
        py-[30px] gap-[14px]  border border-solid z-10 border-1 border-[#E3E3E7]"
        >
          <p className="text-[#18181B] mb-[20px] ml-[30px] text-[24px] font-[600] max-[1000px]:text-[18px] max-[450px]:text-[14px]">
            Foydalanuvchi profili
          </p>

          <div
            className={`w-full hover:bg-[#F4F4F4] mb-[10px]
  flex h-[56px] cursor-pointer px-[30px] items-center gap-[15px]  ${
    url == "/profil"
      ? "bg-[#F4F4F4] border-solid border-[#F4F4F4] border-r-[#F58634]"
      : "opacity-50"
  }`}
            onClick={() => navigate("/profil")}
          >
            <img src={User} alt="" className="w-[24px] h-[24px] " />
            <p className="text-[#18181B] text-[16px] font-[600] max-[1000px]:text-[18px] max-[450px]:text-[14px]">
              Shaxsiy ma’lumotlar
            </p>
          </div>

          <div
            className={`w-full hover:bg-[#F4F4F4] mb-[10px]
  flex h-[56px] cursor-pointer px-[30px] items-center gap-[15px]  ${
    url == "/profil/sozlamalar"
      ? "bg-[#F4F4F4] border-solid border-[#F4F4F4] border-r-[#F58634]"
      : "opacity-50"
  }`}
            onClick={() => navigate("/profil/sozlamalar")}
          >
            <img src={Setting} alt="" className="w-[24px] h-[24px] " />
            <p className="text-[#18181B] text-[16px] font-[600] max-[1000px]:text-[18px] max-[450px]:text-[14px]">
              Sozlamalar
            </p>
          </div>

          <div
            className={`w-full hover:bg-[#F4F4F4] mb-[10px]
  flex h-[56px] cursor-pointer px-[30px] items-center gap-[15px]  ${
    url == "/profil/taklif"
      ? "bg-[#F4F4F4] border-solid border-[#F4F4F4] border-r-[#F58634]"
      : "opacity-50"
  }`}
            onClick={() => navigate("/profil/taklif")}
          >
            <img src={Nap} alt="" className="w-[24px] h-[24px] " />
            <p className="text-[#18181B] text-[16px] font-[600] max-[1000px]:text-[18px] max-[450px]:text-[14px]">
              Takliflar
            </p>
          </div>

          <div
            className="w-full hover:bg-[#F4F4F4] opacity-50 relative
  flex h-[56px] cursor-pointer px-[30px] items-center gap-[15px]"
            onClick={() => setOpen(!open)}
          >
            <img src={Message} alt="" className="w-[24px] h-[24px] " />
            <p className="text-[#18181B] text-[16px] font-[600] max-[1000px]:text-[18px] max-[450px]:text-[14px]">
              Murojaatlar
            </p>

            <img
              src={ArrowUp}
              alt=""
              className={`w-[20px] h-[20px] absolute right-[30px] ${
                open && "rotate-[180deg]"
              }`}
            />
          </div>

          <div className={`${!open && "hidden"}`}>
            <div
              className={`w-full hover:bg-[#F4F4F4] mb-[10px]
  flex h-[56px] cursor-pointer px-[30px] items-center gap-[15px]  ${
    url == "/profil/barcha-murojatlar"
      ? "bg-[#F4F4F4] border-solid border-[#F4F4F4] border-r-[#F58634]"
      : "opacity-50"
  }`}
              onClick={() => navigate("/profil/barcha-murojatlar")}
            >
              <img src={SmcT} alt="" className="w-[24px] h-[24px] " />
              <p className="text-[#18181B] text-[16px] font-[600] max-[1000px]:text-[18px] max-[450px]:text-[14px]">
                Barcha murojaatlar
              </p>
            </div>

            <div
              className={`w-full hover:bg-[#F4F4F4] mb-[10px]
  flex h-[56px] cursor-pointer px-[30px] items-center gap-[15px]  ${
    url == "/profil/imkoniyat-buyicha-murojatlar"
      ? "bg-[#F4F4F4] border-solid border-[#F4F4F4] border-r-[#F58634]"
      : "opacity-50"
  }`}
              onClick={() => navigate("/profil/imkoniyat-buyicha-murojatlar")}
            >
              <img src={SmcStar} alt="" className="w-[24px] h-[24px] " />
              <p className="text-[#18181B] text-[16px] font-[600] max-[1000px]:text-[18px] max-[450px]:text-[14px]">
                Imkoniyatlar bo’yicha murojaatlar
              </p>
            </div>
          </div>

          <div
            className="w-full absolute bottom-[30px] left-[0px]
  flex h-[56px] cursor-pointer px-[30px] items-center gap-[15px]"
          >
            <img src={Logout} alt="" className="w-[24px] h-[24px] " />
            <p className="text-[#FF4D4D] text-[16px] font-[600] max-[1000px]:text-[18px] max-[450px]:text-[14px]">
              Profildan chiqish
            </p>
          </div>
        </div>
        {url === "/profil" && <Shaxsiy />}
        {url === "/profil/sozlamalar" && <Sozlamalar />}
        {url === "/profil/taklif" && <Taklif />}
        {url === "/profil/barcha-murojatlar" && (
          <h1>/profil/barcha-murojatlar/test</h1>
        )}
        {url === "/profil/imkoniyat-buyicha-murojatlar" && (
          <h1>/profil/imkoniyat-buyicha-murojatlar</h1>
        )}
      </div>
    </div>
  );
};

export default Profil;
