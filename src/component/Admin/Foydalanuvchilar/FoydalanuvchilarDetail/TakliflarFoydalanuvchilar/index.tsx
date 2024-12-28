import React, { useState } from "react";
import { list } from "../../../Takliflar/list";
import BackIcon from "../../../../../assets/icons/back.png";

interface ListItem {
  id: number;
  date: string;
  title: string;
  description: string;
}

const TakliflarFoydalanuvchilar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);

  const handleItemClick = (item: ListItem) => {
    setSelectedItem(item);
  };

  const handleBackClick = () => {
    setSelectedItem(null); // Clear the selected item to show the list again
  };

  return (
    <div>
      {/* Conditional rendering of the selected item */}
      {selectedItem ? (
        <div className="p-[16px]">
          <div onClick={handleBackClick} className="">
            <img src={BackIcon} alt="" width={"10px"} /> Ortga
          </div>
          <div className="border-[1px] border-solid border-[#E5E9EB] rounded-[12px] mt-[24px] p-[16px] max-w-[886px]">
            <p
              className="text-[#697E92] text-[14px]"
              style={{ fontFamily: "Inter" }}
            >
              {selectedItem.date}
            </p>
            <h2
              className="text-[#2A3D4B] text-[20px] font-[700px] leading-[32px] mt-[16px]"
              style={{ fontFamily: "Inter" }}
            >
              {selectedItem.title}
            </h2>
            <p
              className="text-[#303940] text-[14px] tracking-[-0.084px] mt-[16px]"
              style={{ fontFamily: "Inter" }}
            >
              {selectedItem.description}
            </p>
            <div className="flex gap-[30px] mt-[16px]">
              <p
                className="text-[#697E92] text-[14px]"
                style={{ fontFamily: "Inter" }}
              >
                a
              </p>
              <p
                className="text-[#697E92] text-[14px]"
                style={{ fontFamily: "Inter" }}
              >
                image.png
              </p>
            </div>
          </div>
          {/* Add more detail fields as needed */}
        </div>
      ) : (
        list.map((item: ListItem) => (
          <div
            key={item.id}
            className="w-[886px] ml-[30px] flex-col h-[170px] rounded-[10px] mt-[24px] cursor-pointer"
            style={{ border: "1px solid rgb(229, 233, 235)" }}
            onClick={() => handleItemClick(item)}
          >
            <div className="mt-[16px] mb-[16px] ml-[16px] mr-[16px]">
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

              <h4
                className="w-[331px] h-[24px] mt-[8px] mb-[16px] flex-none order-1 flex-grow-0 font-inter text-[20px] line-clamp-1"
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
        ))
      )}
    </div>
  );
};

export default TakliflarFoydalanuvchilar;
