import React, { useState } from "react";
import Example from "../../assets/imgs/example.png";
import Edit from "../../assets/icons/edit-2.svg";
import { Modal } from "antd";
import { Button, CustomInput, CustomDatePicker } from "../Customs";
import { AntSelect } from "./style";
const Profil: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div
      className="w-full max-w-[843px] h-[750px] rounded-[24px]  flex flex-col relative
        p-[30px] gap-[24px]  border border-solid z-10 border-1 border-[#E3E3E7]"
    >
      <Modal
        open={visible}
        onCancel={handleCancel}
        centered={true}
        width={670}
        closeIcon={false}
        footer={null}
      >
        <div className="w-full h-[643px] flex flex-col gap-[24px]">
          <div className="w-full flex justify-center mb-[20px]">
            <div className="flex flex-col items-center gap-[8px] ">
              <img
                src={Example}
                alt="user"
                className="w-[100px] h-[100px] rounded-[50%]"
              />
              <p className="text-[#F58634] text-[14px] font-[500]  max-[1000px]:text-[12px] max-[450px]:text-[12px] cursor-pointer hover:underline">
                Yuklash
              </p>
            </div>
          </div>

          <div className="w-full flex gap-[10px] ">
            <CustomInput placeholder="Ismingiz*" />
            <CustomInput placeholder="Familiyangiz*" />
          </div>
          <div className="w-full flex gap-[10px]">
            <CustomInput placeholder="Otangizning ismi*" />
            <CustomDatePicker placeholder="Tug’ilgan yilingiz*" />
          </div>
          <div className=" w-full flex gap-[10px]">
            <AntSelect
              showSearch
              placeholder="Jins*"
              className="w-full h-[50px]"
              style={{ borderRadius: "12px" }}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
            <AntSelect
              showSearch
              placeholder="Manzil*"
              className="w-full h-[50px] rounded-[12px]"
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </div>
          <div className=" w-full flex gap-[10px]">
            <CustomInput placeholder="Otangizning ismi*" />

            <AntSelect
              showSearch
              placeholder="Manzil*"
              className="w-full h-[50px] rounded-[12px]"
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </div>
          <div className="w-full flex gap-[10px] mb-[20px]">
            <CustomInput placeholder="Otangizning ismi*" />
            <CustomDatePicker placeholder="Tug’ilgan yilingiz*" />
          </div>

          <div className="flex justify-end items-center gap-[10px]">
            <div
              className="w-[145px] h-[50px] flex items-center rounded-[12px] justify-center cursor-pointer"
              style={{ border: "1px solid rgba(22, 22, 22, 0.15)" }}
            >
              <p className="text-[#161616]  text-[14px] font-[600] ">
                Bekor qilish
              </p>
            </div>

            <Button width={"145px"} height={50}>
              <p className="text-[#fff]  text-[14px] font-[500] ">Saqlash</p>
            </Button>
          </div>
        </div>
      </Modal>

      <div
        className="absolute flex gap-[10px] items-center right-[20px] top-[20px] cursor-pointer"
        onClick={showModal}
      >
        <img
          src={Edit}
          alt="Edit"
          className="w-[20px] h-[20px] max-[1000px]:w-[15px] max-[1000px]:h-[15px]"
        />
        <p className="text-[#18181B] text-[16px] font-[600]  max-[1000px]:text-[14px] max-[450px]:text-[12px]">
          Tahrirlash
        </p>
      </div>

      <div className="flex gap-[20px] items-center">
        <img
          src={Example}
          alt="user"
          className="w-[100px] h-[100px] rounded-[50%]"
        />

        <div className="flex flex-col gap-[8px]">
          <p className="text-[#18181B] text-[20px] font-[600] max-[1000px]:text-[18px] max-[450px]:text-[14px]">
            Jasur G’afforov Alisher o’g’li
          </p>
          <p className="text-[#18181B] text-[16px] font-[500]  opacity-70 max-[1000px]:text-[14px] max-[450px]:text-[12px]">
            Tashkent
          </p>
        </div>
      </div>

      <div className="flex gap-[20px] items-center">
        <p className="text-[#18181B] text-[16px] font-[400]  opacity-60 max-[1000px]:text-[14px] max-[450px]:text-[12px]">
          Tug’ilgan yilingiz:
        </p>
        <p className="text-[#18181B] text-[16px] font-[400]  max-[1000px]:text-[14px] max-[450px]:text-[12px]">
          12/12/2023
        </p>
      </div>

      <div className="flex gap-[20px] items-center">
        <p className="text-[#18181B] text-[16px] font-[400]  opacity-60 max-[1000px]:text-[14px] max-[450px]:text-[12px]">
          Jins:
        </p>
        <p className="text-[#18181B] text-[16px] font-[400]  max-[1000px]:text-[14px] max-[450px]:text-[12px]">
          Erkak
        </p>
      </div>

      <div className="flex gap-[20px] items-center">
        <p className="text-[#18181B] text-[16px] font-[400]  opacity-60 max-[1000px]:text-[14px] max-[450px]:text-[12px]">
          Viloyat:
        </p>
        <p className="text-[#18181B] text-[16px] font-[400]  max-[1000px]:text-[14px] max-[450px]:text-[12px]">
          Toshkent viloyati
        </p>
      </div>

      <div className="flex gap-[20px] items-center">
        <p className="text-[#18181B] text-[16px] font-[400]  opacity-60 max-[1000px]:text-[14px] max-[450px]:text-[12px]">
          Tuman:
        </p>
        <p className="text-[#18181B] text-[16px] font-[400]  max-[1000px]:text-[14px] max-[450px]:text-[12px]">
          Parkent tumani
        </p>
      </div>

      <div className="flex gap-[20px] items-center">
        <p className="text-[#18181B] text-[16px] font-[400]  opacity-60 max-[1000px]:text-[14px] max-[450px]:text-[12px]">
          Mahalla:
        </p>
        <p className="text-[#18181B] text-[16px] font-[400]  max-[1000px]:text-[14px] max-[450px]:text-[12px]">
          Gulbog’ mahallasi
        </p>
      </div>

      <div className="flex gap-[20px] items-center">
        <p className="text-[#18181B] text-[16px] font-[400]  opacity-60 max-[1000px]:text-[14px] max-[450px]:text-[12px]">
          Ko’cha:
        </p>
        <p className="text-[#18181B] text-[16px] font-[400]  max-[1000px]:text-[14px] max-[450px]:text-[12px]">
          O’qituvchilar ko’chasi
        </p>
      </div>

      <div className="flex gap-[20px] items-center">
        <p className="text-[#18181B] text-[16px] font-[400]  opacity-60 max-[1000px]:text-[14px] max-[450px]:text-[12px]">
          Uy:
        </p>
        <p className="text-[#18181B] text-[16px] font-[400]  max-[1000px]:text-[14px] max-[450px]:text-[12px]">
          58
        </p>
      </div>
    </div>
  );
};

export default Profil;
