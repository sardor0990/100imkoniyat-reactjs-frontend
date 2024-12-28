import React, { useEffect, useState } from "react";
import Arrow from "../../../assets/icons/arrow-right-top.svg";
import backgroundImage from '../../../assets/imgs/dotImage.png';
import { useNavigate } from "react-router-dom";


interface propsCard {
  item: {
    titleUz: string;
    descriptionUz: string[];
    titleRu: string;
    descriptionRu: string[];
    titleEn: string;
    descriptionEn: string[];
    linkToService: string;
  };
  category: string;
  index: number;
}

const CardOpportunity: React.FC<propsCard> = ({item, index, category}) => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'uz');

  const handleClick = () => {
    navigate(`/opportunity/${category}/${index+1}`, {state: {opportunityData : item}});
  };

  useEffect(() => {
    console.log(category);
    setLanguage(localStorage.getItem('language') || 'uz');
  }, []);

  return (
   <div className="w-full max-w-[625px] min-h-[260px] rounded-[16px] bg-[#fff] p-[20px] cursor-pointer max-[1300px]:max-w-[358px] border border-solid" onClick={handleClick} style={{borderRadius: '16px', border: '1px solid var(--Orange, #F58634)', }}>
      <div className="w-full max-w-[600px] min-h-[250px] rounded-[16px] relative p-[30px] bg-cover bg-center shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ 
        backgroundImage: `url(${backgroundImage}), radial-gradient(81.36% 81.36% at 50% 50%, rgba(245, 134, 52, 0.9) 100%, rgba(143, 78, 30, 0.00) 88.92%)`
        }} 
      />
      
      <img
        src={Arrow}
        alt=""
        width={42}
        height={42}
        className="absolute top-[10px] right-[10px]"
      />
    
      <div key={index} className="flex flex-col gap-[10px] relative z-10">
        <p className="text-[#161616] text-[24px] font-[600] leading-[36px] max-[1300px]:text-[18px] line-clamp-2">
          {language === 'uz' ? item.titleUz : language === 'ru' ? item.titleRu : item.titleEn || "Yoshlar uchun imkoniyatlar"}
        </p>
        <p
          className="text-[#161616] leading-[26px] 
          w-[90%]  text-[16px] font-[400] opacity-80 overflow-hidden overflow-ellipsis line-clamp-2 max-[1300px]:text-[14px]"
        >
          {language === 'uz' ? item.descriptionUz?.join(' ') : language === 'ru' ? item.descriptionRu?.join(' ') : item.descriptionEn?.join(' ') || "Axborot texnologiyalari sohasida O`zbekiston yoshlari uchun yaratilgan imkoniyatlar."}
        </p>
        <p className="text-[#fff] text-[100px] font-[700] uppercase text-center opacity-100 absolute bottom-[-90px] right-[10px]">
          {`${index + 1}` || 5}
        </p>
      </div>
  

      </div>
    </div>

  );
};

export default CardOpportunity;
