import React from "react";
import Call from "../../assets/icons/call-black.svg";
import Arrow from "../../assets/icons/arrow-right.svg";
import Security from "../../assets/icons/security-safe-black.svg";

const Sozlamalar: React.FC = () => {
  return (
    <div
      className="w-[843px] h-[120px] rounded-[24px]  flex  items-center justify-between
        p-[30px] gap-[24px]  border border-solid z-10 border-1 border-[#E3E3E7]"
    >
      <div className="w-full h-[56px] px-[30px] flex items-center rounded-[10px] bg-[#F4F4F4] cursor-pointer justify-between">
        <div className="flex gap-[10px] items-center">
          <img src={Call} alt="call" className="w-[24px] h-[24px]" />
          <p className="text-[#161616]  text-[16px] font-[600] ">
            +998(99) 123-45-89
          </p>
        </div>
        <img src={Arrow} alt="call" className="w-[24px] h-[24px]" />
      </div>

      <div className="w-full h-[56px] px-[30px] flex items-center rounded-[10px] bg-[#F4F4F4] cursor-pointer justify-between">
        <div className="flex gap-[10px] items-center">
          <img src={Security} alt="call" className="w-[24px] h-[24px]" />
          <p className="text-[#161616]  text-[16px] font-[600] ">
            Parolni o’zgartirish
          </p>
        </div>
        <img src={Arrow} alt="call" className="w-[24px] h-[24px]" />
      </div>
    </div>
  );
};

export default Sozlamalar;
