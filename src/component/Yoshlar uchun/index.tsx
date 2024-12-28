import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Bg from "../../assets/imgs/yoshlar.png";
import { CardOpportunity, YoshlarCard } from "../Customs";
import { AntCollapse } from "./style";
import { useTranslation } from "react-i18next";
import data from '../../Yoshlar.json'

const ForGirls: React.FC = () => {
  const {t} = useTranslation()
  return (
    <div className="w-full flex flex-col items-center gap-[100px]">
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
          className="absolute top-0 left-0 object-cover w-full h-full z-0"
        ></div>

        <Navbar />
        <div className="w-full flex justify-center z-20">
          <div className="w-full max-w-[1280px] z-20">
            <div className="w-full max-w-[900px]">
              <p className="text-[#fff] text-[66px] max-[1230px]:text-[40px] max-[1000px]:text-[30px]  font-[800] leading-[90px] mt-[130px] max-[650px]:mt-[30px] max-[650px]:leading-[30px]">
               {t("w13")}
              </p>
            </div>
            <p className="w-full max-w-[650px] mark mt-[20px] mb-[30px] max-[1230px]:text-[40px] max-[1000px]:text-[24px]">
               {t("w34")}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1280px] h-fit flex justify-center gap-[30px] flex-wrap max-[1300px]:px-[10px]">
      {data.data.map((item, index) => (
        <CardOpportunity item={item} index={index} key={index}/>
        ))}
      </div>

      <div className="w-fit flex flex-col px-[20px] gap-[10px] mb-[100px] max-[450px]:mb-[0px] ">
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
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
export default ForGirls;
