import React from "react";
import Next from "../../../assets/icons/arrow-right.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";



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
}
const CardBlog: React.FC<propsType> = ({ row, item, index }) => {

  const navigate = useNavigate();
  const handleGoDetail = (id:number) => {
    navigate(`/tadbir/${id}`, {state: {someData : item}})
  }

  const { t } = useTranslation();

  const stripHtml = (html: string | undefined) => {
    return html ? html.replace(/<\/?[^>]+(>|$)/g, "") : "";
  }

  const getTitle = () => localStorage.getItem('language') === 'uz' ? item.titleUz : item.titleRu;
  const getContent = () => localStorage.getItem('language') === 'uz' ? item.contentUz : item.contentRu;

  console.log(getTitle());

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
        <div>
          {getTitle()}
          </div>
        </p>
        <p
          className="text-[#161616] text-[14px]
         h-[100px] leading-[20px] font-[400] opacity-80 overflow-hidden  overflow-ellipsis line-clamp-4"
        >
          {stripHtml(getContent())}
        </p>
        <div className="w-fit mt-[10px] cursor-pointer flex gap-[10px] px-[12px] py-[7px] bg-[#1616161A] bg-opacity-10 rounded-[8px]" onClick={() => handleGoDetail(item.id)}>
          <p className="text-[#161616] text-[14px] font-[400]">{t('w20')}</p>
          <img src={Next} alt="Next" />
        </div>
        {/* display: flex; padding: 7px 12px; align-items: center; gap: 10px; */}
        {/* border-radius: 8px; background: rgba(22, 22, 22, 0.10); */}
      </div>
    </div>
  ) : (
    <div className="flex flex-col w-[298px] ">
      <div
        style={{
          background: `url(${item.photoUrl}) lightgray 0% / cover no-repeat`,
          borderRadius: "16px 16px 0 0",
        }}
        className={`w-[298px] h-[298px]  `}
      ></div>
      <div className="flex w-full h-[248px] flex-col gap-[10px] p-[20px] bg-[#F6F6F6]   rounded-br-[16px] rounded-bl-[16px]">
        <p className="w-full text-[#161616] text-[16px] font-[600] overflow-hidden  overflow-ellipsis line-clamp-2">
          <div>
          {getTitle()}
          </div>
        </p>
        <p
          className="text-[#161616] text-[14px]
         h-[100px] leading-[20px] font-[400] opacity-80 overflow-hidden  overflow-ellipsis line-clamp-4"
        >
          {stripHtml(getContent())}
        </p>
        <div className="w-fit mt-[10px] cursor-pointer flex gap-[10px] px-[12px] py-[7px] bg-[#1616161A] bg-opacity-10 rounded-[8px]" onClick={() => handleGoDetail(item.id)}>
          <p className="text-[#161616] text-[14px] font-[400]"> {t('w20')}</p>
          <img src={Next} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
