import React from "react";
import Navbar from "../NavbarWhite";
import Footer from "../Footer";
import Arrow from "../../assets/icons/arrow-right.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import request from "../../services/api/index.d";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


interface EventData{
  id: string,
  title: string,
  content: string,
  photoUrl: string
}

const TadbirById: React.FC = () => {

  const {t} = useTranslation();

  const location = useLocation();
  const { id } = useParams<{id: string}>();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  const [eventData, setEventData] = useState<EventData | null>(null);

  const getDetailById = async() => {
    try{
        const res = await request.get<EventData>(`/base/events/${id}`);
        setEventData(res.data.data);
    }catch(error){
        console.error("Error", error);
    }
  }

  const stripHtml = (html: string | undefined) => {
    return html ? html.replace(/<\/?[^>]+(>|$)/g, "") : "";
  }

  // Add this function to get current language
  const getCurrentLanguage = () => {
    return localStorage.getItem('language') || 'uz';
  };

  useEffect(() => {
    getDetailById();
  }, [id])

  return (
    <div className="w-full flex flex-col items-center gap-[60px]">
      <div className="relative w-full flex flex-col  bg-gradient-to-t from-opacity-60 via-transparent to-transparent backdrop-blur-10 ">
        <Navbar />
      </div>

      <div className="w-full h-fit flex flex-col items-center gap-[30px]">
        <div className="w-full md:max-w-[1280px] flex flex-col gap-[30px] items-start">
          <div
            className="flex gap-[10px] items-center cursor-pointer"
            onClick={() => handleGoBack()}
          >
            <img
              src={Arrow}
              alt=""
              width={24}
              height={24}
              style={{ transform: "rotate(-180deg)" }}
            />
            <p className="text-[#161616] text-[18px] font-[400]">{t("w56")}</p>
          </div>
          <div className="w-full md:w-[1280px] h-[600px] relative">
            <img
              src={eventData ? eventData.photoUrl : "Loading..."}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.5)" }}
            />
            <p className="absolute bottom-[40px] left-[10px] md:left-[40px] md:w-[930px] text-[#fff] text-[24px] w-full md:text-[52px] md:leading-[64px] font-[800]">
              {eventData ? eventData.title : "Loading..."}
            </p>
          </div>

          <div className="w-full flex justify-start">
            <p
              className="w-full md:w-[1062px] text-[#161616] text-[18px] font-[400] opacity-80 px-1 md:p-0 "
              style={{
                wordWrap: "break-word", // Ensures that long words are broken correctly
                overflowWrap: "break-word", // Prevents text from overflowing horizontally
                wordBreak: "break-word", // Forces words to break at the container's boundaries
              }}
            >
              {eventData ? stripHtml(eventData.content) : "Loading..."}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default TadbirById;
