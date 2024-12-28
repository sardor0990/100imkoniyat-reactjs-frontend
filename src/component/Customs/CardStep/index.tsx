import React from "react";
import { CardWrapper, GoToArrow } from "./style";
import { useNavigate } from "react-router-dom";
import goToArrow from '../../../assets/icons/circleArrow2.png';


interface propsCard {
  item: {
    title: string;
    description: string[];
    linkToService?: string;
  };
  step: number;
  totalSteps: number;
  isExternalLink?: boolean;
}

const CardStep: React.FC<propsCard> = ({ item, step, totalSteps, isExternalLink }: propsCard) => {

  const navigate = useNavigate();
  
  return (
    <div>
    <CardWrapper className={`h-[300px] rounded-[16px] bg-[#F6F6F6] p-[30px] relative w-full md:mb-0 mb-2`} style={{background: isExternalLink 
            ? 'white' // White background for the last card
            : 'radial-gradient(circle, rgba(192, 192, 192, 0.4) 1px, transparent 1px), linear-gradient(to top, rgba(245, 134, 52, 1), rgba(245, 134, 52, 0.9))', border: isExternalLink ? '2px dashed #F58634' : ''}}>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[#161616] text-[24px] font-[600] leading-[36px]"></p>
        <p className="text-[#fff] leading-[20px] w-[90%] h-[200px] font-[500] overflow-hidden  overflow-ellipsis font-montserrat" style={{ color: isExternalLink ? '#F58634' : 'white', fontSize: isExternalLink ? '25px' : '15px', lineHeight: isExternalLink ? '45px' : '20px'}}>
          {item.description.join(" ") ||
            "Axborot texnologiyalari sohasida O`zbekiston yoshlari uchun yaratilgan imkoniyatlar."}
        </p>
      </div>
      <p className="text-[#fff] text-[60px] font-[700] uppercase text-center  absolute bottom-0 right-[20px]" style={{color: isExternalLink ? '' : 'white'}}>
        {step + 1 || ""}
      </p>

      {step === step && item.linkToService && (
        <a
        href={item.linkToService}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#161616] text-[24px] font-[600] leading-[36px]"
      >
        <GoToArrow src={goToArrow} alt="" className="w-[64px] h-[64px]" style={{marginTop: '-20px'}}/>
      </a>
      )}
    </CardWrapper>
</div>
  );
};

export default CardStep;
