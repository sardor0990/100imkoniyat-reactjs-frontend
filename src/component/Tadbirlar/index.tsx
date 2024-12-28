import React from "react";
import ATKC from "../../assets/imgs/ATKC.png";
import Park from "../../assets/imgs/it park.png";
import Epam from "../../assets/imgs/epam.png";
import Unicon from "../../assets/imgs/unicon.png";
import Bg from "../../assets/imgs/tadbirlar.png";
import Mitc from "../../assets/imgs/mitc.png";
import Yoshlar from "../../assets/imgs/tadbir-yoshlar.png";
import { CardBlog } from "./../Customs";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Arrow from "../../assets/icons/arrow-right.svg";

import "swiper/css";
import "swiper/css/navigation";
const OpportunitySection: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="relative w-full flex flex-col h-[700px] bg-gradient-to-t from-opacity-60 via-transparent to-transparent backdrop-blur-10 ">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(22, 22, 22, 0.60) 19.66%, rgba(22, 22, 22, 0.00) 100%)",
            backdropFilter: "blur(10px)",
            width: "100%",
            height: "700px",
          }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-opacity-60 via-transparent to-transparent   backdrop-blur-10 z-20"
        ></div>

        <div
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="absolute top-0 left-0 object-cover w-full h-[700px] z-0"
        ></div>

        <Navbar />
        <div className="w-full flex justify-center z-20">
          <div className="w-[1280px] z-20">
            <div className="w-[900px]">
              <p className="text-[#fff] text-[66px] font-[800] leading-[90px] mt-[130px]">
                Tadbirlar
              </p>
            </div>
            <p className="w-[650px] mark mt-[20px] mb-[30px]">
              Ushbu sahifada, Siz, AKT sohasidagi grantlar, tanlovlar va
              loyihalar bilan tanishib borishingiz mumkin. Shuningdek, Forum
              sahifasida faol ishtirok etishingiz mumkin.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full  my-[80px] bg-[#F8F8F8] h-[462px] p-[40px]">
        {" "}
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="max-w-[1350px] h-full"
          autoplay={{ delay: 3000 }}
          speed={500}
        >
          <SwiperSlide>
            <div className="w-[90%] h-full flex gap-[100px] justify-center">
              <div className="w-[522px] h-full flex flex-col gap-[20px] justify-center">
                <p className="text-[#161616] text-[42px] font-[600]">
                  IT-Hamjamiyati
                </p>
                <p className="text-[#161616] text-[18px] font-[400] opacity-80">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
              <img
                src={Yoshlar}
                alt=""
                width={625}
                height={360}
                style={{ objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[90%] h-full flex gap-[100px] justify-center">
              <div className="w-[522px] h-full flex flex-col gap-[20px] justify-center">
                <p className="text-[#161616] text-[42px] font-[600]">
                  IT-Hamjamiyati
                </p>
                <p className="text-[#161616] text-[18px] font-[400] opacity-80">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
              <img
                src={Yoshlar}
                alt=""
                width={625}
                height={360}
                style={{ objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[90%] h-full flex gap-[100px] justify-center">
              <div className="w-[522px] h-full flex flex-col gap-[20px] justify-center">
                <p className="text-[#161616] text-[42px] font-[600]">
                  IT-Hamjamiyati
                </p>
                <p className="text-[#161616] text-[18px] font-[400] opacity-80">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
              <img
                src={Yoshlar}
                alt=""
                width={625}
                height={360}
                style={{ objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full max-w-[1280px] mb-[100px] flex gap-[26px] flex-wrap justify-between">
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>

      <div className="w-[1280px] flex flex-col gap-[30px]">
        <div className="mt-[140px] relative">
          <p
            className="text-[#161616] text-[100px] 
          font-[700] uppercase text-center opacity-10 absolute top-[-80px] left-1/2 transform -translate-x-1/2 "
          >
            Hamkorlarimiz
          </p>
          <div className="w-full flex  justify-between">
            <img src={ATKC} alt="" width={90} height={60} />
            <img src={Park} alt="" width={180} height={60} />
            <img src={Epam} alt="" width={170} height={60} />
            <img src={Unicon} alt="" width={157} height={60} />
            <img src={Mitc} alt="" width={140} height={60} />
          </div>
        </div>
      </div>

      <div className="w-full h-[250px] bg-[#F6F6F6] flex items-center justify-center my-[100px]">
        <p
          className="text-[#161616] text-[100px] 
          font-[700] uppercase text-center opacity-10 absolute left-1/2 transform -translate-x-1/2 "
        >
          Loyihalar
        </p>

        <p className="text-[#161616] text-[52px]  font-[700]">Loyihalar</p>
      </div>
      <div className="w-full max-w-[1280px] flex my-[30px] justify-end ">
        <div className="flex gap-[10px] items-center cursor-pointer">
          <p className="text-[#161616] text-[18px] font-[400]">
            Ko’proq yuklash
          </p>
          <img src={Arrow} alt="" width={24} height={24} />
        </div>
      </div>

      <div className="w-full max-w-[1280px] flex mb-[30px]gap-[30px] flex-wrap  justify-between ">
        <CardBlog row />
        <CardBlog row />
      </div>
      <div className="w-full max-w-[1280px] flex gap-[30px] flex-wrap justify-between">
        <CardBlog row />
        <CardBlog row />
      </div>
      <div className="w-full h-[250px] bg-[#F6F6F6] flex items-center justify-center my-[100px]">
        <p
          className="text-[#161616] text-[100px] 
          font-[700] uppercase text-center opacity-10 absolute left-1/2 transform -translate-x-1/2 "
        >
          Tanlovlar
        </p>

        <p className="text-[#161616] text-[52px]  font-[700]">Tanlovlar</p>
      </div>
      <div className="w-full max-w-[1280px] flex my-[30px] justify-end ">
        <div className="flex gap-[10px] items-center cursor-pointer">
          <p className="text-[#161616] text-[18px] font-[400]">
            Ko’proq yuklash
          </p>
          <img src={Arrow} alt="" width={24} height={24} />
        </div>
      </div>
      <div className="w-full max-w-[1280px] mb-[100px] flex gap-[26px] flex-wrap justify-between">
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>

      <div className="w-full h-[250px] bg-[#F6F6F6] flex items-center justify-center my-[100px]">
        <p
          className="text-[#161616] text-[100px] 
          font-[700] uppercase text-center opacity-10 absolute left-1/2 transform -translate-x-1/2 "
        >
          Grantlar
        </p>

        <p className="text-[#161616] text-[52px]  font-[700]">Grantlar</p>
      </div>
      <div className="w-full max-w-[1280px] flex my-[30px] justify-end ">
        <div className="flex gap-[10px] items-center cursor-pointer">
          <p className="text-[#161616] text-[18px] font-[400]">
            Ko’proq yuklash
          </p>
          <img src={Arrow} alt="" width={24} height={24} />
        </div>
      </div>
      <div className="w-full max-w-[1280px] mb-[30px] flex gap-[30px] flex-wrap  justify-between ">
        <CardBlog row />
        <CardBlog row />
      </div>
      <div className="w-full max-w-[1280px] flex gap-[30px] flex-wrap justify-between">
        <CardBlog row />
        <CardBlog row />
      </div>
      <Footer />
    </div>
  );
};

export default OpportunitySection;
