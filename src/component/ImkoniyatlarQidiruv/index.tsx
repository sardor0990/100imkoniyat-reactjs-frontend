import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Bg from "../../assets/imgs/nogironligi.png";
import { CardOpportunity } from "../Customs";
import { AntCollapse } from "./style";
import nogironlikData from "../../NogironligiBorlar.json";
import talimData from "../../Talim2.json";
import tadbirkorlarData from "../../Tadbirkorlar2.json";
import xotinQizlarData from "../../Xotin-qizlar.json";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";

interface Item {
  id: number;
  category: string;
  titleUz: string;
  descriptionUz: string[];
  titleRu: string;
  descriptionRu: string[];
  titleEn: string;
  descriptionEn: string[];
  linkToService: string;
}

const ImkoniyatlarQidiruv: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const mergedData: Item[] = [...nogironlikData.data, ...talimData.data, ...tadbirkorlarData.data, ...xotinQizlarData.data];
  const [filteredData, setFilteredData] = useState<Item[]>(mergedData);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('search');
    if (searchValue) {
      const filteredItems = mergedData.filter(item => 
        item.titleUz.toLowerCase().includes(searchValue.toLowerCase()) || 
        item.descriptionUz.some(description => description.toLowerCase().includes(searchValue.toLowerCase())) ||
        item.titleRu.toLowerCase().includes(searchValue.toLowerCase()) || 
        item.descriptionRu.some(description => description.toLowerCase().includes(searchValue.toLowerCase())) ||
        item.titleEn.toLowerCase().includes(searchValue.toLowerCase()) || 
        item.descriptionEn.some(description => description.toLowerCase().includes(searchValue.toLowerCase()))
      );
      setFilteredData(filteredItems);
    } else {
      setFilteredData(mergedData);
    }
  }, [location.search]);
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
                {t("w67")}
              </p>
            </div>
            <p className="w-full max-w-[650px] mark mt-[20px] mb-[30px] max-[1230px]:text-[40px] max-[1000px]:text-[20px]">
              {t("w30")}
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "-100px" }}>
            <ReactPlayer
              url="https://youtu.be/iJNQhZDFGFs"
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

      <div className="w-full max-w-[1280px] h-fit flex justify-center gap-[30px] flex-wrap max-[1300px]:px-[10px]">
        {filteredData.map((item, index) => (
          <CardOpportunity item={item} index={index} key={index} category={item.category} />
        ))}
      </div>
      {/* adsd */}
      <div className="w-fit flex flex-col gap-[10px] mb-[100px] max-[450px]:mb-[0px]">
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
      <Footer />
    </div>
  );
};
export default ImkoniyatlarQidiruv;
