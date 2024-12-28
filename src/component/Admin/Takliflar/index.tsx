import React from "react";
import { list } from './list'; // Import items array
import { useNavigate } from "react-router-dom"

const Takliflar: React.FC = () => {
  const navigate = useNavigate();

  const GotoRead = (takliflarId: number) => {
    navigate(`/admin/takliflar/read/${takliflarId}`)
  };

  return (
    <div className="w-full">
      <div
        className="w-full box-border flex flex-row items-center flex-none order-1 flex-grow-0 h-[80px] pl-[30px] pt-[8px] pb-[8px] bg-white border-b border-gray-300 solid border"
        style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E9EB' }}
      >
        <span
          className="static flex flex-row justify-start items-center text-[24px]"
          style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 700 }}
        >
          Takliflar
        </span>
      </div>
      <div>
        {list.map(item => (
          <div
            key={item.id}
            className="w-[886px] ml-[30px] flex-col h-[170px] rounded-[10px] mt-[24px] cursor-pointer"
            style={{ border: '1px solid rgb(229, 233, 235)' }}
            onClick={() => GotoRead(item.id)}
          >
            <div className="mt-[16px] mb-[16px] ml-[16px] mr-[16px]">
              <span className="opacity-80 text-[14px]" style={{ fontFamily: 'Inter', fontWeight: 400, color: 'rgb(105, 126, 146)' }}>
                {item.date}
              </span>
              
              <h4 className="w-[331px] h-[24px] mt-[8px] mb-[16px] flex-none order-1 flex-grow-0 font-inter text-[20px] line-clamp-1" style={{ color: 'rgb(20, 21, 26)', fontFamily: 'Inter', fontWeight: 700 }}>
                {item.title}
              </h4>
              
              <p className="line-clamp-2 overflow-hidden text-ellipsis opacity-80 leading-6" style={{ color: 'rgb(48, 57, 64)', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400, fontSize: '14px', whiteSpace: 'normal', wordBreak: 'break-word' }}>
                {item.description}
              </p>

              <div className="flex items-center mt-[8px]">
                <p className="mr-[30px] text-[14px]" style={{ color: 'rgb(105, 126, 146)', fontWeight: '400', fontFamily: 'Inter' }}>
                  Akbarali Khasanov
                </p>
                <span className="mr-[30px] text-[14px]" style={{ color: 'rgb(105, 126, 146)', fontWeight: '400', fontFamily: 'Inter' }}>
                  +998994562535
                </span>
                <span className="mr-[30px] text-[14px]" style={{ color: 'rgb(105, 126, 146)', fontWeight: '400', fontFamily: 'Inter' }}>
                  image.png
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Takliflar;
