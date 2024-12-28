import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Bg from "../../assets/imgs/barchaimkoniyatlar.png";
import NogironligiBorlar from "../../assets/imgs/nogironligi.png";
import XotinQizlar from "../../assets/imgs/xotin-qizlar.png";
import YoshlarUchun from "../../assets/imgs/yoshlaruchun.png";
import TalimUchun from "../../assets/imgs/talimuchun.png";
import TadbirkorlikUchun from "../../assets/imgs/25.png";
import NumberOne from "../../assets/imgs/1.png";
import NumberTwo from "../../assets/imgs/2.png";
import NumberThree from "../../assets/imgs/3.png";
import NumberFour from "../../assets/imgs/4.png";
import AntCollapse from "./style";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AllOpportunity: React.FC = () => {
  const navigate = useNavigate();
  const {t} = useTranslation()
  return (
    <div>
      <div className="w-full flex flex-col items-center gap-[100px] ">
        <div className="relative w-full flex flex-col h-[700px] max-[1300px]:h-[500px] max-[1300px]:p-[10px] bg-gradient-to-t from-opacity-60 via-transparent to-transparent backdrop-blur-10 ">
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(22, 22, 22, 0.60) 19.66%, rgba(22, 22, 22, 0.00) 100%)",
              backdropFilter: "blur(10px)",
              width: "100%",
              height: "100%",
            }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-opacity-60 via-transparent to-transparent   backdrop-blur-10 z-20"
          ></div>

          <div
            style={{
              backgroundImage: `url(${Bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="absolute top-0 left-0 object-cover w-full h-full z-0 "
          ></div>

          <Navbar />
          <div className="w-full flex justify-center z-20">
            <div className="w-full max-w-[1280px] z-20 max-[1300px]:p-[20px]">
              <div className="w-full max-w-[900px]">
                <p
                  className="text-[#fff] text-[66px] font-[800] leading-[90px] mt-[130px]
                max-[800px]:mt-[40px] max-[800px]:font-[700] max-[800px]:text-[30px] max-[400px]:text-[20px] max-[800px]:leading-[42px]
                text-wrap break-words
                "
                >
                  {t("w9")}
                </p>
              </div>
              <p className="w-full max-w-[650px] mark mt-[20px] mb-[30px]">
                {t("w29")}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[250px] bg-[#F6F6F6] flex items-center justify-center relative overflow-hidden">
          <p
            className="text-[#161616] text-[100px] text-nowrap
          font-[800] uppercase text-center opacity-10
           absolute left-1/2 transform -translate-x-1/2 max-[1230px]:text-[80px] max-[1000px]:text-[50px] max-[625px]:text-[0px]"
          >
            {t("w67")}
          </p>

          <p className="text-[#161616] text-[52px]  font-[700] max-[1230px]:text-[40px] max-[1000px]:text-[20px]">
            {t("w67")}
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-[100px] px-[10px]">

          <div className="w-full max-w-[1280px] h-[370px] flex max-[1000px]:hidden" onClick={() => navigate('/nogironligi-borlar-uchun')}>
            <img
              src={NogironligiBorlar}
              alt="Nogironligi borlar"
              className="w-[625px] h-[370px] rounded-tl-[18px] rounded-bl-[18px] object-cover"
            />

            <div className="bg-[#F6F6F6] w-full max-w-[625px] h-[370px] rounded-tr-[18px] rounded-br-[18px] relative">
              <h2 className="text-[32px] font-[600] pt-[50px] pr-[100px] pb-[15px] pl-[30px]">
                {t("w11")}
              </h2>
              <p className="text-[18px] font-[400] leading-[30px] opacity-[0.6] pl-[30px]">
              {t("w30")}
              </p>
              <img
                src={NumberOne}
                alt="1"
                className="absolute end-[30px] bottom-[20px]"
              />
            </div>
          </div>
          <div className="min-[1000px]:hidden flex max-w-[450px] w-full h-[500px] rounded-[26px] bg-[#fff] flex-col" onClick={() => navigate('/nogironligi-borlar-uchun')}>
            <img
              src={NogironligiBorlar}
              alt="Nogironligi borlar"
              className="w-[full] h-[280px]  object-cover rounded-tl-[16px] rounded-tr-[16px]"
            />

            <div className="bg-[#F6F6F6] w-full max-w-[625px] min-h-[226px] relative p-[15px] rounded-bl-[16px] rounded-br-[16px]">
              <h2 className="text-[16px] font-[600] mb-[10px]">
              {t("w11")}
              </h2>
              <p className="text-[14px] font-[500] leading-[20px] opacity-[0.8] ">
              {t("w30")}
              </p>
              <div className="flex w-full justify-end">
                <img
                  src={NumberOne}
                  alt="1"
                  className=" absolute bottom-[20px] right-[20px] t-[20px]"
                />
              </div>
            </div>
          </div>

          <div className="max-[1000px]:hidden w-full max-w-[1280px] h-[370px] flex" onClick={() => navigate('/xotin-qizlar-uchun')}>
            <div className="bg-[#F6F6F6] w-[625px] h-[370px] rounded-tl-[18px] rounded-bl-[18px] relative">
              <h2 className="text-[32px] font-[600] pt-[50px] pr-[100px] pb-[15px] pl-[30px]">
                {t("w12")}
              </h2>
              <p className="text-[18px] font-[400] leading-[30px] opacity-[0.6] pl-[30px]">
              {t("w33")}
              </p>
              <img
                src={NumberTwo}
                alt="2"
                className="absolute start-[30px] bottom-[20px]"
              />
            </div>

            <img
              src={XotinQizlar}
              alt="Nogironligi borlar"
              className="w-[625px] h-[370px]  rounded-tr-[18px] rounded-br-[18px] object-cover"
            />
          </div>
          <div className="min-[1000px]:hidden flex max-w-[450px] w-full h-[500px] rounded-[26px] bg-[#fff] flex-col" onClick={() => navigate('/xotin-qizlar-uchun')}>
            <img
              src={XotinQizlar}
              alt="Nogironligi borlar"
              className="w-[full] h-[280px]  object-cover rounded-tl-[16px] rounded-tr-[16px]"
            />

            <div className="bg-[#F6F6F6] w-full max-w-[625px] relative min-h-[226px] p-[15px] rounded-bl-[16px] rounded-br-[16px]">
              <h2 className="text-[16px] font-[600] mb-[10px]">
                {t("w12")}
              </h2>
              <p className="text-[14px] font-[500] leading-[20px] opacity-[0.8] ">
              {t("w33")}
              </p>
              <div className="flex w-full justify-end">
                <img
                  src={NumberTwo}
                  alt="1"
                  className="absolute bottom-[20px] right-[20px] t-[20px]"
                />
              </div>
            </div>
          </div>

          <div className="max-[1000px]:hidden w-full max-w-[1280px] h-[370px] flex" onClick={() => navigate('/talim-uchun')}>
            <div className="bg-[#F6F6F6] w-[625px] h-[370px] rounded-tl-[18px] rounded-bl-[18px] relative">
              <h2 className="text-[32px] font-[600] pt-[50px] pr-[100px] pb-[15px] pl-[30px]">
              {t("w14")}

              </h2>
              <p className="text-[18px] font-[400] leading-[30px] opacity-[0.6] pl-[30px]">
              {t("w35")}
               
              </p>
              <img
                src={NumberThree}
                alt="3"
                className="absolute start-[30px] bottom-[20px]"
              />
            </div>

            <img
              src={TalimUchun}
              alt="Nogironligi borlar"
              className="w-[625px] h-[370px]  rounded-tr-[18px] rounded-br-[18px] object-cover"
            />
          </div>
          <div className="min-[1000px]:hidden flex max-w-[450px] w-full h-[500px] rounded-[26px] bg-[#fff] flex-col" onClick={() => navigate('/talim-uchun')}>
            <img
              src={TalimUchun}
              alt="Nogironligi borlar"
              className="w-[full] h-[280px]  object-cover rounded-tl-[16px] rounded-tr-[16px]"
            />

            <div className="bg-[#F6F6F6] w-full max-w-[625px] relative min-h-[226px] p-[15px] rounded-bl-[16px] rounded-br-[16px]">
              <h2 className="text-[16px] font-[600] mb-[10px]">{t("w14")}</h2>
              <p className="text-[14px] font-[500] leading-[20px] opacity-[0.8] ">
              {t("w35")}

              </p>
              <div className="flex w-full justify-end">
                <img
                  src={NumberThree}
                  alt="3"
                  className="absolute bottom-[20px] right-[20px] t-[20px]"
                />
              </div>
            </div>
          </div>

          <div className="max-[1000px]:hidden w-full max-w-[1280px] h-[370px] flex" onClick={() => navigate('/tadbirkorlik-uchun')}>
            <img
              src={TadbirkorlikUchun}
              alt="Nogironligi borlar"
              className="w-[625px] h-[370px] rounded-tl-[18px] rounded-bl-[18px] object-cover"
            />

            <div className="bg-[#F6F6F6] w-full max-w-[625px] h-[370px] rounded-tr-[18px] rounded-br-[18px] relative">
              <h2 className="text-[32px] font-[600] pt-[50px] pr-[100px] pb-[15px] pl-[30px]">
              {t("w15")}
              </h2>
              <p className="text-[18px] font-[400] leading-[30px] opacity-[0.6] pl-[30px]">
              {t("w36")}

              </p>
              <img
                src={NumberFour}
                alt="4"
                className="absolute end-[30px] bottom-[20px]"
              />
            </div>
          </div>
          <div className="min-[1000px]:hidden flex max-w-[450px] w-full h-[500px] rounded-[26px] bg-[#fff] flex-col" onClick={() => navigate('/tadbirkorlik-uchun')}>
            <img
              src={TadbirkorlikUchun}
              alt="Nogironligi borlar"
              className="w-[full] h-[280px]  object-cover rounded-tl-[16px] rounded-tr-[16px]"
            />

            <div className="bg-[#F6F6F6] w-full max-w-[625px] relative min-h-[226px] p-[15px] rounded-bl-[16px] rounded-br-[16px]">
              <h2 className="text-[16px] font-[600] mb-[10px]">
              {t("w15")}
              </h2>
              <p className="text-[14px] font-[500] leading-[20px] opacity-[0.8] ">
              {t("w36")}

              </p>
              <div className="flex w-full justify-end">
                <img
                  src={NumberFour}
                  alt="4"
                  className="absolute bottom-[20px] right-[20px] t-[20px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-[24px] font-[600] mt-0">
           {t("w52")}
         </div>

        <div className="w-fit flex flex-col gap-[10px] px-[10px] ">
          <AntCollapse
            items={[
              {
                key: 1,
                label: (
                  <p className="text-[#18181B]  text-[18px] font-[600] ">
                    {t("w31")}
                  </p>
                ),
                children: (
                  <p className="text-[#18181B]  text-[16px] font-[500] leading-[25px] opacity-80">
                    {t("w54")}
                  </p>
                ),
              },
            ]}
            expandIconPosition="end"
          />
          <AntCollapse
            items={[
              {
                key: 1,
                label: (
                  <p className="text-[#18181B]  text-[18px] font-[600] ">
                  {t("w32")}
                  </p>
                ),
                children: (
                  <p className="text-[#18181B]  text-[16px] font-[500] leading-[25px] opacity-80">
                   {t("w55")}
                  </p>
                ),
              },
            ]}
            expandIconPosition="end"
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AllOpportunity;
