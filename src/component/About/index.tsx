import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Bg from "../../assets/imgs/about.png";
import ATKC from "../../assets/imgs/ATKC.png";
import Park from "../../assets/imgs/it park.png";
import Epam from "../../assets/imgs/epam.png";
import Unicon from "../../assets/imgs/unicon.png";
import Mitc from "../../assets/imgs/mitc.png";
import Vektor3 from "../../assets/icons/Vector3.svg";
import { CardEmploye } from "../Customs";
import { AntCollapse } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import feedbackData from "../../feedback.json";


import "swiper/css";
import { useTranslation } from "react-i18next";
const About: React.FC = () => {

  const {t} = useTranslation();


  return (
    <div className="w-full flex flex-col items-center gap-[60px] max-[800px]:gap-[20px]">
      <div className="relative w-full flex flex-col h-[700px] max-[1300px]:h-[500px] bg-gradient-to-t from-opacity-60 via-transparent to-transparent backdrop-blur-10 ">
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
          className="absolute top-0 left-0 object-cover w-full h-full z-0"
        ></div>

        <Navbar />
        <div className="w-full flex justify-center z-20">
          <div className="w-full max-w-[1280px] z-20  px-[10px]">
            <div className="w-full max-w-[900px]">
              <p
                className="text-[#fff] text-[66px] font-[800]
               leading-[90px] mt-[100px] ] max-[1300px]:text-[50px]
                max-[450px]:text-[30px] max-[450px]:leading-[30px] "
              >
                {t("w41")}
              </p>
            </div>
            <p className="w-full max-w-[650px] mark mt-[20px] mb-[30px]  ">
              {t("w40")}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1280px] my-[80px] flex px-[10px] max-[800px]:flex-col max-[800px]:gap-[20px] max-[450px]:mt-[20px]">
        <div className="w-full max-w-[298px]">
          <p className="text-[#161616] text-[32px] font-[600] leading-[42px] max-[1300px]:text-[22px] max-[1300px]:leading-[22px]">
            {t("w42")}
          </p>
        </div>
        <div className="w-full max-w-[981px] ">
          <p className="text-[#161616] text-[18px] font-[400] leading-[32px] opacity-80 max-[1300px]:text-[14px] max-[1300px]:leading-[22px]">
          {t("w65")}
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1280px] px-[10px] flex max-[800px]:flex-col max-[800px]:gap-[20px]">
        <div className="w-[298px]">
          <p className="text-[#161616] text-[32px] font-[600] leading-[42px] max-[1300px]:text-[22px] max-[1300px]:leading-[22px]">
            {t("w43")}
          </p>
        </div>
        <div className="w-full max-w-[981px]">
          <p className="text-[#161616] text-[18px] font-[400] leading-[32px] opacity-80 max-[1300px]:text-[14px] max-[1300px]:leading-[22px]">
           {t("w66")}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center gap-[30px] mt-[100px] px-[20px] max-[1350px]:flex-col max-[1350px]:items-center max-[450px]:mt-[50px]">
        <div className="w-full max-w-[407px] h-[240px] rounded-[16px] bg-[#F58634] px-[30px] py-[20px] relative">
          <div className="flex flex-col gap-[10px]">
            <img src={Vektor3} alt="" width={200} height={14} />
            <p className="text-[#fff] text-[20px] font-[600] ">
              {t("w45")}
            </p>
            <p className="text-[#fff] leading-[20px] w-[90%] h-[100px] text-[14px] font-[500] opacity-70 overflow-hidden  overflow-ellipsis">
              {t("w34")}
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
              {t("w58")}
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
            {t("w36")}
            </p>
          </div>
          <p className="text-[#fff] text-[100px] font-[700] uppercase text-center opacity-30 absolute bottom-0 right-[20px]">
            3
          </p>
        </div>
      </div>

      {/* <div className="w-full max-w-[1280px] my-[100px] max-[700px]:my-[20px] relative max-[450px]:mt-[100px]">
        <p
          className="text-[#161616] text-[100px] 
          font-[700] uppercase text-center opacity-10 absolute top-[-80px] left-1/2 transform -translate-x-1/2 
          max-[1000px]:text-[70px] max-[700px]:text-[2em] max-[700px]:top-[-60px]"
        >
          Hamkorlarimiz
        </p>

       
        <div className="w-full flex justify-between cursor-pointer max-[920px]:hidden">
          <a href="https://mitc.uz/ru/management/index"><img src={ATKC} alt="" width={90} height={60} /></a>
          <a href="https://it-park.uz/"><img src={Park} alt="" width={180} height={60} /></a>
          <a href="https://www.epam.com/"><img src={Epam} alt="" width={170} height={60} /></a>
          <a href="https://unicon.uz/"><img src={Unicon} alt="" width={157} height={60} /></a>
          <a href="https://mitc.uz/ru/management/index"><img src={Mitc} alt="" width={140} height={60} /></a>
        </div>

        <div className="w-full flex justify-between min-[920px]:hidden">
          <Swiper slidesPerView={1} onSwiper={(swiper) => console.log(swiper)}>
            <div className="w-full flex gap-[30px] items-center justify-center ">
              <SwiperSlide>
                <img src={ATKC} alt="" width={90} height={60} />
              </SwiperSlide>

              <SwiperSlide>
                <img src={Park} alt="" width={180} height={60} />
              </SwiperSlide>

              <SwiperSlide>
                <img src={Epam} alt="" width={170} height={60} />
              </SwiperSlide>

              <SwiperSlide>
                <img src={Unicon} alt="" width={157} height={60} />
              </SwiperSlide>

              <SwiperSlide>
                <img src={Mitc} alt="" width={140} height={60} />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div> */}

      <div className="relative mt-[160px] px-[20px]">
        <p
          className="text-[#161616] text-[100px]  max-[1350px]:text-[80px]   max-[450px]:text-[40px]
          font-[700] uppercase text-center opacity-10 absolute top-[-150px] left-1/2 transform -translate-x-1/2 "
        >
          {t("w44")}
        </p>
        <div className="flex flex-col max-[800px]:hidden">
          <div className="w-full flex gap-[30px] flex-wrap  justify-center max-[1300px]:flex-col max-[1300px]:items-center">
          {feedbackData.data.map((item, index) => (
              <CardEmploye item={item} key={index} />
            ))}
          </div>
          <div className="w-full mt-[30px] flex gap-[30px] flex-wrap  justify-center max-[1300px]:flex-col max-[1300px]:items-center">
          {feedbackData.data.map((item, index) => (
              <CardEmploye item={item} key={index} />
            ))}
          </div>
        </div>

        <div
          className="w-full max-w-[700px] flex gap-[30px]
         items-center justify-center  min-[800px]:hidden 
         max-[750px]:max-w-[540px] max-[570px]:max-w-[300px] "
        >
          <Swiper slidesPerView={1}>
            <div className="w-full max-w-[800px] flex gap-[30px] items-center justify-center ">
            {feedbackData.data.map((item, index) => (
                <SwiperSlide>
                  <CardEmploye item={item} key={index} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[10px] mb-[80px] max-[450px]:my-[20px] items-center px-[10px] ">
        <p className="text-[#161616] text-[24px]  font-[600] mb-[30px] w-full text-center">
          {t("w57")}
        </p>
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

      <div className="w-full max-w-[1050px] h-[600px] mb-[30px] px-[10px] max-[450px]:h-[300px]">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/v-9LW78-JPs"
          title="IT Park в Узбекистане. Кто развивает IT- экспорт в Центральной Азии"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: "20px" }}
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};
export default About;
