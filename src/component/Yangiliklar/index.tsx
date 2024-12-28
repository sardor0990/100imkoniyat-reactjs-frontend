import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Bg from "../../assets/imgs/xotin-qizlar-uchun.png";
import ATKC from "../../assets/imgs/ATKC.png";
import Park from "../../assets/imgs/it park.png";
import Epam from "../../assets/imgs/epam.png";
import Unicon from "../../assets/imgs/unicon.png";
import Mitc from "../../assets/imgs/mitc.png";
import { CardBlog } from "../Customs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../../Tadbirlar.json";
import request from "../../services/api/index.d";
import NewsBlog from "../Customs/NewsBlog";
import { useTranslation } from "react-i18next";

const ForGirls: React.FC = () => {

  const [cards, setCards] = useState<Card[]>([]);

  const {t} = useTranslation();
  
  useEffect(() => {
    const fetchCards = async () => {
      const response = await request.get('base/news');
      setCards(response.data.data);
    };
    fetchCards();
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-[100px] max-[450px]:gap-[40px]">
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
          <div className="w-full max-w-[1280px] z-20">
            <div className="w-full max-w-[900px]">
              <p
                className="text-[#fff] text-[66px] font-[800]
               leading-[90px] mt-[100px] ] max-[1300px]:text-[50px] max-[450px]:text-[30px] max-[450px]:leading-[30px]"
              >
                {t("w7")}
              </p>
            </div>
            <p className="w-full max-w-[650px] mark mt-[20px] mb-[30px]  ">
            {t("w64")}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1280px] mb-[100px] flex gap-[26px] flex-wrap justify-start max-[1350px]:hidden">
        {cards.map((item, index) => (
          <NewsBlog item={item} index={index} key={index} />
        ))}
      </div>
      <div className="w-full flex gap-[30px] items-center justify-center min-[1350px]:hidden">
        <Swiper slidesPerView={1}>
          <div className="w-full flex gap-[30px] items-center justify-center ">
            {cards.map((item, index) => (
              <SwiperSlide>
                <NewsBlog item={item} index={index} key={index} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <Footer />
    </div>
  );
};
export default ForGirls;
