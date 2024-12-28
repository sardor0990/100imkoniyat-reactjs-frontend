import React from "react";
import Logo from "../../assets/imgs/Logo.png";
import Twitter from "../../assets/icons/iconoir_x.svg";
import Telegram from "../../assets/icons/ic_twotone-telegram.svg";
import Facebok from "../../assets/icons/ic_twotone-facebook.svg";
import Youtube from "../../assets/icons/mdi_youtube.svg";
import Ins from "../../assets/icons/ri_instagram-fill.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Footer: React.FC = () => {
  const {t} = useTranslation()

  const navigate = useNavigate();

  return (
    <div className="w-full h-[328px] max-[800px]:h-fit flex flex-col items-center bg-[#161616] max-[1350px]:px-[20px]">
      <div className="w-full max-w-[1280px] flex justify-between py-[30px] max-[800px]:hidden">
        <img src={Logo} alt="" className="w-[113px] h-[60px] max-[450px]:w-[94px] max-[450px]:h-[50px]"/>
        <div className="flex flex-col gap-[12px]">
          <p className="text-[#fff] text-[18px] font-[400] mb-[10px]">
            {t("w9")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer" onClick={() => navigate('/barcha-imkoniyatlar')}>
          {t("w10")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer" onClick={() => navigate('/nogironligi-borlar-uchun')}>
          {t("w11")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer" onClick={() => navigate('/xotin-qizlar-uchun')}>
          {t("w12")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer" onClick={() => navigate('/talim-uchun')}>
          {t("w14")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer" onClick={() => navigate('/tadbirkorlik-uchun')}>
          {t("w15")}
          </p>
        </div>

        {/* <div className="flex flex-col gap-[12px]">
          <p className="text-[#fff] text-[18px] font-[400] mb-[10px] ">
          {t("w8")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer" onClick={() => navigate('/loyihalar')}>
          {t("w16")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer" onClick={() => navigate('/tanlovlar')}>
          {t("w17")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer" onClick={() => navigate('/grandlar')}>
          {t("w18")}
          </p>
        </div> */}

        <div className="flex flex-col gap-[12px]">
          <p className="text-[#fff] text-[18px] font-[400] mb-[10px] ">
            {t("w49")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer" onClick={() => navigate('/biz-haqimizda')}>
            {t("w6")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer" onClick={() => navigate('/yangiliklar')}>
          {t("w7")}

          </p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <p className="text-[#fff] text-[18px] font-[400] mb-[10px] ">{t("w50")}</p>
        
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer" onClick={() => navigate('/aloqa')}>
          {t("w51")}         
           </p>
        </div>
      </div>



      <div className="w-full flex flex-col justify-between py-[30px] min-[800px]:hidden">
        <img src={Logo} alt="" className="w-[113px] h-[60px] mb-[40px] max-[450px]:w-[94px] max-[450px]:h-[50px]"/>
        
        <div className="w-full flex justify-between mb-[40px] ">
        <div className="flex flex-col gap-[12px]">
          <p className="text-[#fff] text-[18px] font-[400] mb-[10px]">
            {t("w49")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer">
            {t("w16")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer">
            {t("w17")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer">
            {t("w18")}
          </p>
        </div>

        <div className="flex flex-col gap-[12px]">
          <p className="text-[#fff] text-[18px] font-[400] mb-[10px] ">
            {t("w50")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer">
            {t("w51")}
          </p>
        </div>
        </div>


        <div className="w-full flex justify-between ">
        <div className="flex flex-col gap-[12px]">
          <p className="text-[#fff] text-[18px] font-[400] mb-[10px] ">
            {t("w49")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer">
            {t("w6")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer">
            {t("w7")}
          </p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <p className="text-[#fff] text-[18px] font-[400] mb-[10px] ">Aloqa</p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer">
            {t("w52")}
          </p>
          <p className="text-[#fff] text-[14px] font-[400] opacity-70 cursor-pointer">
            {t("w53")}
          </p>
        </div>
        </div>


       
      </div>







      <div className="w-full h-[1px] bg-[#DDD] opacity-15 max-[800px]:mb-[20px]"></div>
      <div className="max-w-[1280px] w-full min-[800px]:h-[64px] flex max-[800px]:pb-[20px]
       justify-between items-center max-[800px]:flex-col max-[800px]:gap-[30px] max-[800px]:items-start">
        <p className="text-[#fff] text-[14px] font-[400] opacity-70 ">
          ©100ta Imkoniyat 2023. {t("w28")}.
        </p>
        <div className="flex items-center gap-[30px]">
        </div>
      </div>
    </div>
  );
};

export default Footer;
