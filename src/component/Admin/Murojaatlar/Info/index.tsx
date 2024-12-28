import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Breadcrumb, message, Select } from "antd";
import request from "../../../../services/api/index.d";
import { useTranslation } from "react-i18next";

interface DetailData {
  id: string;
  userName: string;
  title: string;
  photoUrl: string;
  comment: string;
  userEmail: string;
  callRequestStatus: string;
  createdAt: string;
  status: string;
}

interface LocationState {
  data?: DetailData[]; // Define the shape of the data in location.state
}
const { Option } = Select;
const MurojatlarInfo: React.FC<DetailData> = () => {
  const { murojatlarid } = useParams<{ murojatlarid: string }>(); // Get the MurojatId from URL params

  const location = useLocation();

  const { data }: LocationState = location.state as LocationState || {};

  const safeData = data || [];
const {t}=useTranslation();
  // Find the item by id
  const selectedItem = safeData.find(item => item.id.toString() === murojatlarid);
  const navigate = useNavigate();

  const [status, setStatus] = useState(selectedItem ? selectedItem.callRequestStatus : '');
 // Define the list of valid statuses manually
 const validStatuses = [
  "REPLIED",
  "CLOSED",
  "NEW",
];
const rgbColors: Record<string, string> = {
  REPLIED: "rgb(76, 175, 80)",    // Green
  CLOSED: "rgb(244, 67, 54)",     // Red
  NEW: "rgb(33, 150, 243)",       // Blue
  DEFAULT: "rgb(189, 189, 189)",  // Gray fallback
};
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};
const handleStatusChange = async (newStatus: string) => {
  setStatus(newStatus); // Temporarily update the status locally

  if (!selectedItem) return;


  try {
    const response = await request.put(
      "/admin/call-request",
      {
        data: {
          id:selectedItem.id,
          callRequestStatus: newStatus,
        },
      },
      
    );

    if (response.status === 200) {
      message.success(t("w78"));
    } else {
      message.error(t("w79"));
      // If update fails, revert the status
      setStatus(selectedItem.callRequestStatus);
    }
  } catch (error) {
    message.error(t("w79"));
    console.error(t('w80'), error);
    // Revert status to the original if the update fails
    setStatus(selectedItem.callRequestStatus);
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
    <div className="w-[886px] border-box rounded-[10px] mt-[30px] mb-[32px] ml-[30px] mr-[30px] py-10 p-[24px]" style={{ border: '1px solid rgb(229, 233, 235)', background: 'rgb(255, 255, 255)' }}>
      <div>
        <div className="mt-[16px] ml-[16px] mr-[16px]">
          <div className="flex items-center justify-between">
            <span
              className="opacity-80 text-[14px]"
              style={{ fontFamily: 'Inter', fontWeight: 400, color: 'rgb(105, 126, 146)' }}
            >
                 {formatDate(selectedItem.createdAt)}
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
            {selectedItem.comment}
          </p>
          <div className="flex items-center mt-[16px]">
            <p className="mr-[30px] text-[14px]" style={{ color: 'rgb(105, 126, 146)', fontWeight: '400', fontFamily: 'Inter' }}>{selectedItem.userName}</p>
            <span className="mr-[30px] text-[14px]" style={{ color: 'rgb(105, 126, 146)', fontWeight: '400', fontFamily: 'Inter' }}>+998994562535</span>
            <span className="mr-[30px] text-[14px]" style={{ color: 'rgb(105, 126, 146)', fontWeight: '400', fontFamily: 'Inter' }}>image.png</span>
          </div>
        </div>
      </div>

      <Select
        value={status}
        onChange={handleStatusChange}
     
        style={{
          width: 150,
          float:'right',
          padding:"3px",
          borderRadius:"10px",
          backgroundColor: rgbColors[status] || rgbColors.DEFAULT, // Set RGB color for selected value
          color: "white", // Ensure readable text
        }}
        popupClassName="custom-dropdown"
      >
        {validStatuses.map((statusOption) => (
          <Option key={statusOption} 
          value={statusOption} 
          style={{
            backgroundColor: rgbColors[statusOption] || rgbColors.DEFAULT, // Set RGB color for options
            color: "white", // Ensure readable text
          }}>
            {statusOption}
          </Option>
        ))}
      </Select>
    </div>
  </div>
  );
};

export default MurojatlarInfo;
