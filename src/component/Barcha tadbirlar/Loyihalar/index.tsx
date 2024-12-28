import React, { useEffect, useState } from "react";
import Navbar from "../../NavbarWhite";
import Footer from "../../Footer";
import Arrow from "../../../assets/icons/arrow-right.svg";
import { CardBlog } from "../../Customs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../../../Tadbirlar.json";
import { useNavigate } from "react-router-dom";
import Card from "../../Card/Card";
import request from "../../../services/api/index.d";
import { useTranslation } from "react-i18next";


const Loyihalar: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const {t} = useTranslation();
  
  useEffect(() => {
    const fetchCards = async () => {
      const response = await request.get('base/events');
      const projects = (response.data.data as Card[])?.filter(event => event.type === 'PROJECTS');
      setCards(projects);
    };
    fetchCards();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <div className="w-full flex flex-col items-center gap-[100px] max-[1350px]:gap-[30px] ">
      <div className="relative w-full flex flex-col  bg-gradient-to-t from-opacity-60 via-transparent to-transparent backdrop-blur-10 ">
        <Navbar />
      </div>

      <div className="w-full h-fit flex flex-col items-center gap-[30px] ">
        <div className="max-w-[1280px] w-full flex flex-col items-start ">
          <div className="flex gap-[10px] items-center cursor-pointer" onClick={handleClick}>
            <img
              src={Arrow}
              alt=""
              width={24}
              height={24}
              style={{ transform: "rotate(-180deg" }}
            />
            <p className="text-[#161616] text-[18px] font-[400]">
              {t("w38")}
            </p>
          </div>
          <div className="w-full relative h-[122px] mt-[30px] mb-[10px] max-[1350px]:mt-[10px] max-[1350px]:h-fit max-[450px]:px-[10px]">
            <p
              className="text-[#161616] text-[100px] 
          font-[700] uppercase text-center opacity-10 absolute top-[0px] max-[1350px]:text-[40px] max-[470px]:text-[30px] max-[470px]:mt-[10px]"
            >
              {t("w68")}
            </p>

            <p className="text-[#161616] text-[52px]  font-[700] max-[1350px]:text-[24px]">
              {t("w68")}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-[1350px]:hidden max-w-[1280px] mb-[40px] flex gap-[26px] flex-wrap">
      {cards.map((item, index) => (
        <CardBlog item={item} index={index} key={index}/>
        ))}
      </div>
      <div className="w-full flex gap-[30px] items-center justify-center min-[1350px]:hidden">
        <Swiper
          // spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="w-full flex gap-[30px] items-center justify-center ">
            {cards.map((item, index) => (
            <SwiperSlide>
              <CardBlog item={item} index={index} key={index}/>
            </SwiperSlide>
            ))}

          </div>
        </Swiper>
      </div>

      <Footer />
    </div>
  );
};
export default Loyihalar;
