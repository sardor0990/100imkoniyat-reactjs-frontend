import React from "react";
import { useNavigate } from "react-router-dom";

const MurojaatlarFoydalanuvchilar: React.FC = () => {


  const murojaatlarFoydalanuvchilar = [
    {
      id: 1,
      date: "29.07.2022",
      title: "Nogironligi bor yoshlar uchun",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here making it look like readable English.",
      phone: '+998994562535',
      image: '',
      status: 'Bajarildi'
    },
    {
      id: 2,
      date: "29.07.2022",
      title: "Xotin-qizlar uchun",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here making it look like readable English.",
      phone: '+998994562535',
      image: '',
      status: 'Rad etildi'
    },
    {
      id: 3,
      date: "29.07.2022",
      title: "Yoshlar uchun",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here making it look like readable English.",
      phone: '+998994562535',
      image: '',
      status: 'Ko`rib chiqilmoqda'
    },
  ];

  const navigate = useNavigate();

  
  const getStatusColor = (status: string) =>{
    switch(status){
      case 'Ko`rib chiqilmoqda':
        return{
          background: 'rgba(245, 134, 52, 0.15)',
          color: 'rgb(245, 134, 52)'
        };
        case 'Rad etildi':
          return {
            background: 'rgba(255, 77, 77, 0.15)',
            color: 'rgb(255, 77, 77)'
          };
         case 'Bajarildi':
          return{
            background: 'rgba(54, 173, 73, 0.15)',
            color: 'rgb(54, 173, 73)' 
          };
          default:
            return {};
    }
  }

  

  const gotoDetail = (murojaatlarId: number) => {
    navigate(`/admin/foydalanuvchilar/murojaatlar/detail/${murojaatlarId}`,  { state: { user: murojaatlarFoydalanuvchilar } })
  }

  return (
    <div>
      {murojaatlarFoydalanuvchilar.map(item => (
      <div
        onClick={() => gotoDetail(item.id)}
        key={item.id}
        className="w-[886px] ml-[30px] flex-col h-[170px] rounded-[10px] mt-[24px] cursor-pointer"
        style={{ border: "1px solid rgb(229, 233, 235)" }}
      >
        <div className="mt-[16px] mb-[16px] ml-[16px] mr-[16px]">
          <div className="flex items-center justify-between">
            <span
              className="opacity-80 text-[14px]"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                color: "rgb(105, 126, 146)",
              }}
            >
              {item.date}
            </span>
            <span
              className="pl-[12px] pr-[12px] h-[32px] pt-[6px]"
              style={{
                borderRadius: "16px",
                ...getStatusColor(item.status),
                fontFamily: "Inter",
                fontWeight: 500,
              }}
            >
              {item.status}
            </span>
          </div>
          <h4
            className="w-[331px] h-[24px] mt-[4px] mb-[10px] flex-none order-1 flex-grow-0 font-inter text-[20px] line-clamp-1"
            style={{
              color: "rgb(20, 21, 26)",
              fontFamily: "Inter",
              fontWeight: 700,
            }}
          >
            {item.title}
          </h4>
          <p
            className="line-clamp-2 overflow-hidden text-ellipsis opacity-80 leading-6"
            style={{
              color: "rgb(48, 57, 64)",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              whiteSpace: "normal",
              wordBreak: "break-word",
            }}
          >
            {item.description}
          </p>
          <div className="flex items-center mt-[8px]">
            <p
              className="mr-[30px] text-[14px]"
              style={{
                color: "rgb(105, 126, 146)",
                fontWeight: "400",
                fontFamily: "Inter",
              }}
            >
              Akbarali Khasanov
            </p>
            <span
              className="mr-[30px] text-[14px]"
              style={{
                color: "rgb(105, 126, 146)",
                fontWeight: "400",
                fontFamily: "Inter",
              }}
            >
              +998994562535
            </span>
            <span
              className="mr-[30px] text-[14px]"
              style={{
                color: "rgb(105, 126, 146)",
                fontWeight: "400",
                fontFamily: "Inter",
              }}
            >
              image.png
            </span>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default MurojaatlarFoydalanuvchilar;
