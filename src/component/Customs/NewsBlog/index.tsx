import React, { useEffect, useState } from "react";
import Next from "../../../assets/icons/arrow-right.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "antd";

interface propsType {
  item: {
    id: number;
    photoUrl: string;
    titleUz: string;
    contentUz: string;
    titleRu: string;
    contentRu: string;
  };
  index: number;
  row?: Boolean;
  loading?: boolean;
}

const NewsBlog: React.FC<propsType> = ({ row, item, index, loading = false }) => {
  const navigate = useNavigate();
  const handleGoDetail = (id: number) => {
    navigate(`/news/${id}`, { state: { someData: item } });
  }

  const { t,  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>('uz');

  useEffect(() => {
    const languageKey = localStorage.getItem('language');
    if (languageKey) {
      setCurrentLanguage(languageKey);
    }
  }, []);

  const stripHtml = (html: string | undefined) => {
    return html ? html.replace(/<\/?[^>]+(>|$)/g, "") : "";
  }

  if (loading) {
    return row ? (
      <div className="flex w-[605px]">
        <div className="w-[240px] h-[240px] rounded-tl-2xl rounded-bl-2xl">
          <Skeleton.Image active className="w-full h-full" />
        </div>
        <div className="flex w-[365px] h-[240px] flex-col gap-[10px] p-[20px] bg-[#F6F6F6] rounded-tr-2xl rounded-br-2xl">
          <Skeleton active paragraph={{ rows: 4 }} />
          <div className="w-[100px]">
            <Skeleton.Button active size="small" />
          </div>
        </div>
      </div>
    ) : (
      <div className="flex flex-col w-[298px]">
        <div className="w-[298px] h-[298px]">
          <Skeleton.Image active className="w-full h-full" />
        </div>
        <div className="flex w-full h-[248px] flex-col gap-[10px] p-[20px] bg-[#F6F6F6] rounded-br-[16px] rounded-bl-[16px]">
          <Skeleton active paragraph={{ rows: 4 }} />
          <div className="w-[100px]">
            <Skeleton.Button active size="small" />
          </div>
        </div>
      </div>
    );
  }

  return row ? (
    <div className="flex w-[605px]">
      <div
        style={{
          background: `url(${item.photoUrl}) lightgray 50% / cover no-repeat`,
        }}
        className={`w-[240px] h-[240px] rounded-tl-2xl rounded-bl-2xl `}
      ></div>
      <div className="flex w-[365px] h-[240px] flex-col gap-[10px] p-[20px] bg-[#F6F6F6] rounded-tr-2xl rounded-br-2xl">
        <p className="w-[290px] text-[#161616] text-[16px] font-[600] overflow-hidden  overflow-ellipsis line-clamp-1">
          {currentLanguage === 'uz' ? item.titleUz : item.titleRu}
        </p>
        <p
          className="text-[#161616] text-[14px]
         h-[100px] leading-[20px] font-[400] opacity-80 overflow-hidden  overflow-ellipsis line-clamp-4"
        >
          {stripHtml(currentLanguage === 'uz' ? item.contentUz : item.contentRu)}
        </p>
        <div className="w-fit mt-[10px] cursor-pointer flex gap-[10px] px-[12px] py-[7px] bg-[#1616161A] bg-opacity-10 rounded-[8px]" onClick={() => handleGoDetail(item.id)}>
          <p className="text-[#161616] text-[14px] font-[400]">{t('w20')}</p>
          <img src={Next} alt="Next" />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col w-[298px] ">
      <div
        style={{
          background: `url(${item.photoUrl}) lightgray 0% / cover no-repeat`,
          borderRadius: "16px 16px 0 0",
        }}
        className={`w-[298px] h-[298px]`}
      ></div>
      <div className="flex w-full h-[248px] flex-col gap-[10px] p-[20px] bg-[#F6F6F6]   rounded-br-[16px] rounded-bl-[16px]">
        <p className="w-full text-[#161616] text-[16px] font-[600] overflow-hidden  overflow-ellipsis line-clamp-2">
          {currentLanguage === 'uz' ? item.titleUz : item.titleRu}
        </p>
        <p
          className="text-[#161616] text-[14px]
         h-[100px] leading-[20px] font-[400] opacity-80 overflow-hidden  overflow-ellipsis line-clamp-4"
        >
          {stripHtml(currentLanguage === 'uz' ? item.contentUz : item.contentRu)}
        </p>
        <div className="w-fit mt-[10px] cursor-pointer flex gap-[10px] px-[12px] py-[7px] bg-[#1616161A] bg-opacity-10 rounded-[8px]" onClick={() => handleGoDetail(item.id)}>
          <p className="text-[#161616] text-[14px] font-[400]"> {t('w20')}</p>
          <img src={Next} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default NewsBlog;

