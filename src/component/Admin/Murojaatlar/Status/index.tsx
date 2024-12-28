import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { items } from '../items'; // Import the items array
import { Breadcrumb, message } from "antd";

const Status: React.FC = () => {
  const { murojatlarid } = useParams<{ murojatlarid: string }>(); // Get the MurojatId from URL params

  // Find the item by id
  const selectedItem = items.find(item => item.id.toString() === murojatlarid);
  const navigate = useNavigate();

  const [status, setStatus] = useState(selectedItem ? selectedItem.status : '');

  const changeStatus = (newStatus: string) => {
    if (selectedItem) {
      selectedItem.status = newStatus;
      setStatus(newStatus);
      message.success(`Murojat ${newStatus}`);
      navigate('/admin/murojaatlar')
    }
  };

  if (!selectedItem) {
    return <div>Item not found for ID: {murojatlarid}</div>; // Handle if item is not found
  }

  return (
    <div className="w-full">
      <div
        className="w-full box-border flex flex-row items-center flex-none order-1 flex-grow-0 pl-[30px] pt-[8px] pb-[8px] bg-white border-b border-gray-300 solid border"
        style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E9EB' }}
      >
        <div className="h-[60px]">
          <span
            className="static flex flex-row justify-start items-center text-[24px] h-[32px] mb-[4px]"
            style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 700 }}
          >
            {selectedItem.title}
          </span>
          <div className="flex items-center">
            <Breadcrumb
              style={{ cursor: 'pointer' }}
              separator=">"
              items={[
                {
                  title: 'Murojatlar',
                  onClick: () => navigate('/admin/murojaatlar'),
                },
                {
                  title: selectedItem.title,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="w-[886px] border-box rounded-[10px] mt-[30px] mb-[30px] ml-[30px] mr-[30px] p-[16px]" style={{ border: '1px solid rgb(229, 233, 235)', background: 'rgb(255, 255, 255)' }}>
        <div>
          <div className="mt-[16px] ml-[16px] mr-[16px]">
            <div className="flex items-center justify-between">
              <span
                className="opacity-80 text-[14px]"
                style={{ fontFamily: 'Inter', fontWeight: 400, color: 'rgb(105, 126, 146)' }}
              >
                {selectedItem.date}
              </span>
            </div>
            <h4
              className="w-[331px] h-[24px] mt-[16px] mb-[16px] flex-none order-1 flex-grow-0 font-inter text-[20px] line-clamp-1"
              style={{ color: 'rgb(20, 21, 26)', fontFamily: 'Inter', fontWeight: 700 }}
            >
              {selectedItem.title}
            </h4>
            <p
              className="line-clamp-12 overflow-hidden text-ellipsis opacity-80 leading-6"
              style={{
                color: 'rgb(48, 57, 64)',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '14px',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 12,
                overflow: 'hidden',
              }}
            >
              {selectedItem.description}
            </p>
            <div className="flex items-center mt-[16px]">
              <p className="mr-[30px] text-[14px]" style={{ color: 'rgb(105, 126, 146)', fontWeight: '400', fontFamily: 'Inter' }}>Akbarali Khasanov</p>
              <span className="mr-[30px] text-[14px]" style={{ color: 'rgb(105, 126, 146)', fontWeight: '400', fontFamily: 'Inter' }}>+998994562535</span>
              <span className="mr-[30px] text-[14px]" style={{ color: 'rgb(105, 126, 146)', fontWeight: '400', fontFamily: 'Inter' }}>image.png</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            style={{
              backgroundColor: 'white',
              boxSizing: 'border-box',
              border: '1px solid rgb(255, 77, 77)',
              borderRadius: '6px',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: '500',
              color: 'rgb(255, 77, 77)',
            }}
            onClick={() => changeStatus("Rad etildi")}
            className="px-16 py-4 mr-[16px] rounded cursor-pointer"
          >
            Rad etildi
          </button>
          <button
            style={{
              backgroundColor: 'green',
              boxSizing: 'border-box',
              borderRadius: '6px',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: '500',
              color: 'rgb(255, 255, 255)',
            }}
            onClick={() => changeStatus("Bajarildi")}
            className="mr-2 px-16 py-4 rounded border-none cursor-pointer"
          >
            Bajarildi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Status;
