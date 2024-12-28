import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ParentStyle } from "../style";
import { ButtonGreenStyle, ButtonRedOutlineStyle } from "./style";
import { message } from "antd";


const StatusMurojaatlar: React.FC = () => {
  const location = useLocation();
  const {status} = location.state || {};
  const [setStatusState] = useState(status ? status.status : '');
  const navigate = useNavigate();
  console.log(status);
  const changeStatus = (newStatus: string) => {
    if(status){
      status.status = newStatus;
      setStatusState(newStatus);

      if(newStatus === 'Bajarildi'){
        message.success(`Murojaat ${newStatus}`);  
      }else if(newStatus === 'Rad etildi'){
        message.error(`Murojaat ${newStatus}`);
      }

      navigate('/admin/foydalanuvchilar/');
    }
  }
  


  return (
    <div>
      <div className="border-[1px] border-solid border-[#E5E9EB] rounded-[12px] mt-[24px] ml-[30px] p-[16px] max-w-[886px]">
            <p
              className="text-[#697E92] text-[14px]"
              style={{ fontFamily: "Inter" }}
            >
              {status.date}
            </p>
            <h2
              className="text-[#2A3D4B] text-[20px] font-[700px] leading-[32px] mt-[16px]"
              style={{ fontFamily: "Inter" }}
            >
              {status.title}
            </h2>
            <p
              className="text-[#303940] text-[14px] tracking-[-0.084px] mt-[16px]"
              style={{ fontFamily: "Inter" }}
            >
              {status.description}
            </p>
            <div className="flex gap-[30px] mt-[16px]">
              <p
                className="text-[#697E92] text-[14px]"
                style={{ fontFamily: "Inter" }}
              >
               {status.phone} 
              </p>
              <p
                className="text-[#697E92] text-[14px]"
                style={{ fontFamily: "Inter" }}
              >
                {status.image ? status.image : 'asdas'}
              </p>
            </div>

            <ParentStyle className="mt-[16px] gap-[16px]">
              <ButtonRedOutlineStyle onClick={() => changeStatus('Rad etildi')}>Rad etildi</ButtonRedOutlineStyle>
              <ButtonGreenStyle onClick={() => changeStatus('Bajarildi')}>Bajarildi</ButtonGreenStyle>
            </ParentStyle>
          </div>
    </div>
  );
};

export default StatusMurojaatlar;
