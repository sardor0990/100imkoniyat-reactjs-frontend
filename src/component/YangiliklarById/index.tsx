import React from "react";
import Navbar from "../NavbarWhite";
import Footer from "../Footer";
import Arrow from "../../assets/icons/arrow-right.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import request from "../../services/api/index.d";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Skeleton } from 'antd';


interface NewsData{
  id: string,
  title: string,
  content: string,
  photoUrl: string
}

const YangilikById: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { id } = useParams<{id: string}>();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  const [NewsData, setNewsData] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<string>('uz');

  const getDetailById = async() => {
    setLoading(true);
    try{
        const res = await request.get<any>(`/base/news/${id}`);
        setNewsData(res.data.data);
    }catch(error){
        console.error("Error", error);
    } finally {
        setLoading(false);
    }
  }

  const stripHtml = (html: string | undefined) => {
    return html ? html.replace(/<\/?[^>]+(>|$)/g, "") : "";
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'uz';
    setLanguage(storedLanguage);
    getDetailById();
  }, [id])

  const getLocalizedContent = (field: 'title' | 'content') => {
    if (!NewsData) return "Loading...";
    
    const contentMap = {
      title: {
        uz: NewsData.title,
      },
      content: {
        uz: NewsData.content,
      }
    };

    return contentMap[field][language as 'uz' | 'ru'] || contentMap[field]['uz'];
  };

  return (
    <div className="w-full flex flex-col items-center gap-[60px] mx-[20px] my-[20px]">
      <div className="relative w-full flex flex-col  bg-gradient-to-t from-opacity-60 via-transparent to-transparent backdrop-blur-10 ">
        <Navbar />
      </div>

      <div className="w-full h-fit flex flex-col items-center gap-[30px]">
        <div className="w-full md:max-w-[1280px] flex flex-col gap-[30px] items-start">
          <div className="flex gap-[10px] items-center cursor-pointer" onClick={() => handleGoBack()}>
            <img
              src={Arrow}
              alt=""
              width={24}
              height={24}
              style={{ transform: "rotate(-180deg)"}}
            />
            <p className="text-[#161616] text-[18px] font-[400]">
            {t('w70')}
            </p>
          </div>

          {loading ? (
            <>
              <div className="w-full md:w-[1280px] h-[600px] relative">
                <Skeleton.Image 
                  active 
                  className="!w-full !h-[600px]"
                  style={{ 
                    width: '100%', 
                    height: '600px',
                    borderRadius: '0px'
                  }} 
                />
                <div className="absolute bottom-[40px] left-[10px] md:left-[40px] md:w-[930px] w-full">
                  <Skeleton 
                    active 
                    paragraph={{ rows: 2 }} 
                    title={{ width: '80%', style: { height: '52px' } }}
                    className="!mt-0"
                  />
                </div>
              </div>
              <div className="w-full flex justify-start">
                <div className="w-full md:w-[1062px]">
                  <Skeleton 
                    active 
                    paragraph={{ 
                      rows: 10,
                      width: Array(10).fill(undefined).map(() => Math.floor(Math.random() * (100 - 85 + 1) + 85))
                    }} 
                    title={false}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full md:w-[1280px] h-[600px] relative">
                <img 
                  src={NewsData?.photoUrl} 
                  alt="" 
                  className="w-full h-full object-cover" 
                  style={{filter: 'brightness(0.5)'}} 
                />
                <p className="absolute bottom-[40px] left-[10px] md:left-[40px] md:w-[930px] text-[#fff] text-[24px] w-full md:text-[52px] md:leading-[64px] font-[800]">
                  {getLocalizedContent('title')}
                </p>
              </div>

              <div className="w-full flex justify-start">
                <p className="w-full md:w-[1062px] text-[#161616] text-[18px] font-[400] opacity-80 px-1 md:p-0" 
                  style={{
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: getLocalizedContent('content') }} />
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default YangilikById;
