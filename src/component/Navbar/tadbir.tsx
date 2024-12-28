import React from "react";
import Next from "../../assets/icons/arrow-right.svg";
import Apps from "../../assets/icons/apps.svg";
import Tanlov from "../../assets/imgs/CVs on clipboard and hiring employees.png";
import Loyiha from "../../assets/imgs/Project management, teamwork and integration.png";
import Cup from "../../assets/imgs/cup.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Tadbir: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="h-full w-full max-w-[1280px] flex gap-[20px]">
      <div
        onClick={() => navigate("/barcha-tadbirlar")}
        className="w-[298px] h-[155px] border border-solid cursor-pointer p-[20px] relative group
             border-[#161616] rounded-[12px] border-opacity-15 hover:border-[#F58634]"
      >
        <div className="flex gap-[10px] items-center mb-[15px]">
          <img src={Apps} alt="" className="w-[24px] h-[24px]" />
          <p className="text-[#161616] text-[16px] font-[600] ">
          {t('w3')}
          </p>
        </div>
        <p className="text-[#161616] text-[14px] font-[500] opacity-70">
          Yoshlar kelajak bunyodkorlariga AKT sohasidagi 100 imkoniyatlar.
        </p>
        <img
          src={Next}
          alt=""
          className="w-[24px] h-[24px] absolute bottom-[20px] right-[20px] group-hover:right-[10px] transition-all duration-200"
        />
      </div>

      <div className="flex flex-col gap-[15px]">
        <div
          onClick={() => navigate("/loyihalar")}
          className="w-[298px] h-[70px] border border-solid cursor-pointer p-[20px] relative group
             border-[#161616] rounded-[12px] border-opacity-15 hover:border-[#F58634] flex items-center"
        >
          <div className="flex gap-[10px] items-center ">
            <img src={Loyiha} alt="" className="w-[26px] h-[23px]" />
            <p className="text-[#161616] text-[14px] font-[600] "> {t('w16')}</p>
          </div>
          <img
            src={Next}
            alt=""
            className="w-[24px] h-[24px] absolute bottom-[20px] right-[20px] group-hover:right-[10px] transition-all duration-200"
          />
        </div>

        <div
          onClick={() => navigate("/tanlovlar")}
          className="w-[298px] h-[70px] border border-solid cursor-pointer p-[20px] relative group
             border-[#161616] rounded-[12px] border-opacity-15 hover:border-[#F58634]"
        >
          <div className="flex gap-[10px] items-center mb-[15px]">
            <img src={Tanlov} alt="" className="w-[26px] h-[26px]" />
            <p className="text-[#161616] text-[14px] font-[600] ">{t('w17')}</p>
          </div>
          <img
            src={Next}
            alt=""
            className="w-[24px] h-[24px] absolute bottom-[20px] right-[20px] group-hover:right-[10px] transition-all duration-200"
          />
        </div>
      </div>

      <div
        onClick={() => navigate("/grandlar")}
        className="w-[298px] h-[70px] border border-solid cursor-pointer px-[15px] relative group
             border-[#161616] rounded-[12px] border-opacity-15 hover:border-[#F58634] flex items-center"
      >
        <div className="flex gap-[10px] items-center ">
          <img src={Cup} alt="" className="w-[27px] h-[27px]" />
          <p className="text-[#161616] text-[14px] font-[600] ">{t('w18')}</p>
        </div>
        <img
          src={Next}
          alt=""
          className="w-[24px] h-[24px] absolute bottom-[20px] right-[20px] group-hover:right-[10px] transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default Tadbir;
