import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Bg from "../../assets/imgs/xotin-qizlar-uchun.png";
import {  CardOpportunity } from "../Customs";
import { AntCollapse } from "./style";
import { useTranslation } from "react-i18next";
import data from '../../Xotin-qizlar.json'
import ReactPlayer from "react-player";


const ForGirls: React.FC = () => {
  const {t} = useTranslation();
  const [category, setCategory] = useState("xotinqizlar");

  return (
    <div className="w-full flex flex-col items-center gap-[100px]">
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
          <div className="w-full max-w-[1280px] z-20  max-[1300px]:px-[10px]">
            <div className="w-full max-w-[900px]">
              <p
                className="text-[#fff] text-[66px] font-[800]
               leading-[90px] mt-[100px] ] max-[1300px]:text-[50px] max-[450px]:text-[30px] max-[450px]:leading-[30px]"
              >
                {t("w12")}
              </p>
            </div>
            <p className="w-full max-w-[650px] mark mt-[20px] mb-[30px]  ">
             {t("w33")}
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "-100px" }}>
            <ReactPlayer
              url="https://youtu.be/n5ty4VvMjLk"
              playing={false}
              loop={true}
              controls={true}
              volume={0.8}
              muted={false}
              width="40%"
              height="300px"
            />
          </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1280px] h-fit flex justify-start gap-[30px] flex-wrap max-[1300px]:px-[10px]">
      {data.data.map((item, index) => (
        <CardOpportunity item={item} index={index} category={category} key={index}/>
        ))}
        
      </div>

      <div className="w-fit flex flex-col gap-[10px]  px-[10px]">
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
  );
};
export default ForGirls;
