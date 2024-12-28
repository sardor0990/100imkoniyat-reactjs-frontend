import React from "react";
import Card1 from "../../../assets/imgs/tadbirlarcard1.jpg";
import Card2 from "../../../assets/imgs/tadbirlarcard2.jpg";
import Card3 from "../../../assets/imgs/tadbirlarcard3.jpg";
import { useNavigate } from "react-router-dom";
const Tadbirlar: React.FC = () => {
    const navigate = useNavigate();
    const openProjects = () => {
        navigate("/admin/tadbirlar/loyihalar")
    };
    const openGrands = () => {
        navigate("/admin/tadbirlar/grandlar")
    };
    const openContests = () => {
        navigate("/admin/tadbirlar/tanlovlar")
    };
  return (
<div className="w-full">
   <div className="w-full box-border flex flex-row items-center flex-none order-1 flex-grow-0  pl-[30px] pt-[8px] pb-[8px] bg-white border-b border-gray-300 solid border h-[80px] " style={{background: '#FFFFFF',borderBottom: '1px solid #E5E9EB'}}>
    <span className="static    flex flex-row justify-start items-center  text-[24px]" style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: 700,}}
    >Tadbirlar</span>
   </div>
   <div  className="flex flex-row flex-wrap items-start content-start p-30 gap-30 w-1600 h-219  ml-[30px]">
    <div style={{cursor:'pointer'}} onClick={openProjects} className=" mt-[30px] box-border w-[363px] h-[159px] bg-white border-solid border border-gray-300 rounded-lg flex-none relative pr-4 mr-[30px]">
        <p className="absolute w-[70px] h-[19px] left-[20px] top-[20px] font-inter font-medium text-base leading-[19px] " style={{fontFamily: 'Inter',fontWeight: 700,}}>Loyihalar</p>
        <img className="absolute w-[129px] h-[112px] left-[230px] top-[44px]  bg-center overflow-hidden" src={Card1} />
    </div>
    <div  style={{cursor:'pointer'}} onClick={openGrands}  className=" mt-[30px] box-border w-[363px] h-[159px] bg-white border-solid border border-gray-300 rounded-lg flex-none relative mr-[30px]">
        <p className="absolute w-[70px] h-[19px] left-[20px] top-[20px] font-inter font-medium text-base leading-[19px] " style={{fontFamily: 'Inter',fontWeight: 700,}}>Grantlar</p>
        <img className="absolute absolute w-[114px] h-[120px] left-[246px] top-[36px]  bg-center overflow-hidden" src={Card2} />
    </div>
    <div  style={{cursor:'pointer'}} onClick={openContests}  className=" mt-[30px] box-border w-[363px] h-[159px] bg-white border-solid border border-gray-300 rounded-lg flex-none relative ">
        <p className="absolute w-[70px] h-[19px] left-[20px] top-[20px] font-inter font-medium text-base leading-[19px] " style={{fontFamily: 'Inter',fontWeight: 700,}}>Tanlovlar</p>
        <img className="absolute w-[123px] h-[123px] left-[237px] top-[33px]   bg-center overflow-hidden" src={Card3} />
    </div>
</div>
 </div>

);
};

export default Tadbirlar;





