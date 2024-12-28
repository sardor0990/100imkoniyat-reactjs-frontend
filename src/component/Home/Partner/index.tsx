import React from "react";
import ATKC from "../../../assets/imgs/ATKC.png";
import Park from "../../../assets/imgs/it park.png";
import Epam from "../../../assets/imgs/epam.png";
import Unicon from "../../../assets/imgs/unicon.png";
import Mitc from "../../../assets/imgs/mitc.png";
import Vektor3 from "../../../assets/icons/Vector3.svg";
import { CardEmploye } from "./../../Customs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTranslation } from "react-i18next";
import data from "../../../feedback.json";

const OpportunitySection: React.FC = () => {
  const {t} = useTranslation()
  return (
    <div className="w-full flex flex-col items-center my-[160px]">
      <div className="w-full max-w-[1280px] flex flex-col gap-[30px]">
        <div className="relative">
          <p
            className="text-[#161616] text-[100px] 
          font-[700] uppercase text-center opacity-10 max-[450px]:text-[30px]
           absolute top-[-80px] left-1/2 transform -translate-x-1/2 max-[1350px]:text-[40px]"
          >
            {t("w27")}
          </p>
          <div className="w-full flex  justify-between max-[600px]:justify-center">
            <a href="https://digital.uz/"><img src={ATKC} alt=""  width={90} height={60} className="max-[800px]:hidden"/></a>
           <a href="https://it-park.uz/"><img src={Park} alt="" width={180} height={60} className="max-[600px]:hidden"/></a> 
           <a href="https://www.epam.com/"> <img src={Epam} alt="" width={170} height={60} /></a>
            <a href="https://us.uz/"><img src={Unicon} alt="" width={157} height={60} className="max-[600px]:hidden"/></a>
            <a href="https://digital.uz/"><img src={Mitc} alt="" width={140} height={60} className="max-[800px]:hidden"/></a>
          </div>
        </div>

        <div className="w-full flex gap-[30px] mt-[100px] px-[20px] max-[1350px]:flex-col max-[1350px]:items-center">
          <div className="w-full max-w-[407px] h-[240px] rounded-[16px] bg-[#F58634] px-[30px] py-[20px] relative">
            <div className="flex flex-col gap-[10px]">
              <img src={Vektor3} alt="" width={200} height={14} />
              <p className="text-[#fff] text-[20px] font-[600] ">
              {t("w45")}
              </p>
              <p className="text-[#fff] leading-[20px] w-[90%] h-[100px] text-[14px] font-[500] opacity-70 overflow-hidden  overflow-ellipsis">
                Axborot texnologiyalari sohasida O’zbekiston yoshlari uchun
                yaratilgan imkoniyatlar.
              </p>
            </div>
            <p className="text-[#fff] text-[100px] font-[700] uppercase text-center opacity-30 absolute bottom-0 right-[20px]">
              1
            </p>
          </div>

          <div className="w-full max-w-[407px] h-[240px] rounded-[16px] bg-[#F58634] px-[30px] py-[20px] relative">
            <div className="flex flex-col gap-[10px]">
              <img src={Vektor3} alt="" width={200} height={14} />
              <p className="text-[#fff] text-[20px] font-[600] ">
              {t("w46")}
              </p>
              <p className="text-[#fff] leading-[20px] w-[90%] h-[100px] text-[14px] font-[500] opacity-70 overflow-hidden  overflow-ellipsis">
                Xotin-qizlarni qo’llab-quvvatlash, ularning jamiyat hayotidagi
                faol ishtirokini ta’milash maqsadida ular uchun AKT sohasida
                imkoniyatlar yaratildi.
              </p>
            </div>
            <p className="text-[#fff] text-[100px] font-[700] uppercase text-center opacity-30 absolute bottom-0 right-[20px]">
              2
            </p>
          </div>

          <div className="w-full max-w-[407px] h-[240px] rounded-[16px] bg-[#F58634] px-[30px] py-[20px] relative">
            <div className="flex flex-col gap-[10px]">
              <img src={Vektor3} alt="" width={200} height={14} />
              <p className="text-[#fff] text-[20px] font-[600] ">
            {t("w47")}
               
              </p>
              <p className="text-[#fff] leading-[20px] w-[90%] h-[100px] text-[14px] font-[500] opacity-70 overflow-hidden  overflow-ellipsis">
                Yoshlarning tadbirkorlik faoliyatini qo‘llab-quvvatlash va
                bandligiga ko‘maklashish uchun yaratilgan imkoniyatlar.
              </p>
            </div>
            <p className="text-[#fff] text-[100px] font-[700] uppercase text-center opacity-30 absolute bottom-0 right-[20px]">
              3
            </p>
          </div>
        </div>

        <div className="relative mt-[160px] px-[20px]">
          <p
            className="text-[#161616] text-[100px]  max-[1350px]:text-[80px]   max-[450px]:text-[40px]
          font-[700] uppercase text-center opacity-10 absolute top-[-80px] left-1/2 transform -translate-x-1/2 "
          >
            {t("w44")}
          </p>
          <div className="flex flex-col max-[800px]:hidden">
          <div className="w-full flex gap-[30px] flex-wrap  justify-between max-[1300px]:flex-col max-[1300px]:items-center">
           {data.data.slice(0,2).map((item, index) => (
                <CardEmploye item={item} key={index}/>
           ))}
            
          </div>
          <div className="w-full mt-[30px] flex gap-[30px] flex-wrap  justify-between max-[1300px]:flex-col max-[1300px]:items-center">
          {data.data.slice(2,4).map((item, index) => (
                <CardEmploye item={item} key={index}/>
           ))}
          </div>
          </div>

          <div className="w-full flex gap-[30px] items-center justify-center  min-[800px]:hidden">
          
          <Swiper
					// spaceBetween={20}
					slidesPerView={1}
					onSwiper={(swiper) => console.log(swiper)}
				>
      <div className="w-full flex gap-[30px] items-center justify-center ">
  
          <SwiperSlide>
          {data.data.map((item, index) => (
          <CardEmploye item={item} key={index}/>  
           ))}
          </SwiperSlide>
      </div>
				</Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitySection;
