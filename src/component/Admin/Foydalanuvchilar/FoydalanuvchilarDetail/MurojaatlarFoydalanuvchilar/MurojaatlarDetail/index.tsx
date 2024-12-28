import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import { Border } from "../../style";
import { ButtonStyle, ParentStyle } from "./style";

type User = {
  id: number;
  date: string;
  title: string;
  description: string;
  phone: string;
  image: string;
  status: string;
};

const MurojaatlarDetail: React.FC = () => {

  const {murojaatlarid} =useParams<{murojaatlarid: string}>();

  const location = useLocation();

  const navigate = useNavigate();

  const { user:users } : {user: User[]} = location.state || {};



  const selectedUser = users.find(item => item.id === Number(murojaatlarid));


  const GotoStatus = () => {
    navigate('/admin/foydalanuvchilar/murojaatlar/detail/1/statusMurojaatlar', {state : {status : selectedUser}});
  }


  return (
    <div>
     <Breadcrumb
              style={{ cursor: 'pointer' }}
              separator=">"
              items={[
                {
                  title: 'Murojatlar',
                  onClick: () => navigate(-1),
                },
                {
                  title: selectedUser?.title,
                },
              ]}
            />

            <Border/>
     {selectedUser ? (
        <>
           <div className="border-[1px] border-solid border-[#E5E9EB] rounded-[12px] mt-[24px] ml-[30px] p-[16px] max-w-[886px]">
            <p
              className="text-[#697E92] text-[14px]"
              style={{ fontFamily: "Inter" }}
            >
              {selectedUser.date}
            </p>
            <h2
              className="text-[#2A3D4B] text-[20px] font-[700px] leading-[32px] mt-[16px]"
              style={{ fontFamily: "Inter" }}
            >
              {selectedUser.title}
            </h2>
            <p
              className="text-[#303940] text-[14px] tracking-[-0.084px] mt-[16px]"
              style={{ fontFamily: "Inter" }}
            >
              {selectedUser.description}
            </p>
            <div className="flex gap-[30px] mt-[16px]">
              <p
                className="text-[#697E92] text-[14px]"
                style={{ fontFamily: "Inter" }}
              >
               {selectedUser.phone} 
              </p>
              <p
                className="text-[#697E92] text-[14px]"
                style={{ fontFamily: "Inter" }}
              >
                {selectedUser.image ? selectedUser.image : 'asdas'}
              </p>
            </div>

            <ParentStyle className="mt-[16px]" onClick={()=>GotoStatus()}>
              <ButtonStyle>Ko`rib chiqish</ButtonStyle>
            </ParentStyle>
          </div>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default MurojaatlarDetail;
