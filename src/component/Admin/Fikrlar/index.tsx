import React, { useState } from "react";
import Add from '../../../assets/icons/adminadd.svg';
import { Button, Dropdown, Modal, Space } from "antd";
import Trash from '../../../assets/icons/trash.svg';
import Dots from '../../../assets/icons/Loyihalarinfo.svg';
import Edit from '../../../assets/icons/editwhite.svg';
import { useNavigate,  } from "react-router-dom";
import ReactStars from 'react-rating-stars-component';
import Redtrash from '../../../assets/icons/redtrash.svg'
import Close from '../../../assets/icons/closeModalIcon.svg';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFikrlar } from "../../../redux/actions/fikrlarSlice";
import { RootState } from "../../../redux/store/store";

const Fikrlar: React.FC = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  
  const ratingChanged = (newRating: number) => {
    setRating(newRating);
  };

  const editFikr = (fikrlarid: string) => {    
    navigate(`/admin/fikrlar/tahrirlash/${fikrlarid}` );
  };

  const showModal = (index: number) => {
    setDeleteIndex(index);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDeleteIndex(null);
  };

  const handleDelete = () => {
    if (deleteIndex !== null) {
      dispatch(deleteFikrlar(deleteIndex));
    }
    setIsModalOpen(false);
    setDeleteIndex(null);
  };

  const AddFikrlar = () => {
    navigate("/admin/fikrlar/qo'shish")
  };

  const fikrlarcards = useSelector((state: RootState) => state.fikrlar.fikrlarCards);
  console.log( fikrlarcards,'')

  return (
    <div className="w-full">
      <div className="w-full flex pt-[10px] pl-[30px] items-center justify-between pr-[30px] pb-[10px] h-[80px]" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E9EB' }}>
        <div className="box-border border-b border-gray-300 bg-white">
          <span className="static w-[106px] h-[32px] flex flex-row justify-start items-center p-0 text-[24px] font-inter" style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 700 }}>Fikrlar</span>
        </div>
        <div className="items-center">
          <button onClick={AddFikrlar} style={{ cursor: 'pointer' }} className="static w-[139px] h-[44px] flex justify-center items-center rounded-[6px] bg-orange-400 border-none">
            <img src={Add} className="mr-[8px] w-[17px] h-[17px] left-[6px] top-[6px]" />
            <span className="static w-[71px] h-[24px] flex justify-center items-center px-[4px] py-[2px] text-[16px] text-white" style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500 }}>Qoshish</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ml-[30px] mr-[30px]">
        {fikrlarcards.map((card, index) => {
          const items = [
            {
              key: 'edit',
              label: (
                <div onClick={(index)=>editFikr(card.id)} className="flex items-center w-[210px] h-[30px]">
                  <img className="pr-9px" src={Edit} />
                  <p className="w-[65px] h-[20px] flex pl-[4px] justify-start items-center mx-[4px] font-normal leading-[20px] text-[rgb(20,21,26)]" style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400 }}>Tahrirlash</p>
                </div>
              ),
            },
            {
              key: 'delete',
              label: (
                <div onClick={() => showModal(index)} className="flex items-center w-[210px] h-[30px]">
                  <img src={Trash} />
                  <p className="w-[65px] h-[20px] pl-[4px] flex justify-start items-center mx-[4px] font-normal leading-[20px] text-[rgb(20,21,26)]" style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400 }}>Ochirish</p>
                </div>
              ),
            },
          ];

          return (
            <div key={index} className="mt-[30px] mr-[30px] w-[755px] p-[24px] rounded-xl box-border h-[224px]" style={{ border: '1px solid rgb(229, 233, 235)', background: 'rgb(255, 255, 255)' }}>
              <div className="flex relative">
                <img className="rounded-full text-center w-[52px] h-[52px] object-cover" src={card.image} alt="Director" />
                <div className="flex flex-col ml-[15px]">
                  <h4 className="text-[20px] mb-[5px] text-xl" style={{ fontFamily: 'Inter', fontWeight: '700', color: 'rgb(26, 32, 36)',whiteSpace: 'normal', wordBreak: 'break-word'  }}>{card.titleUz}</h4>
                  <p className="text-[14px] line-clamp-4 overflow-hidden text-ellipsis order-[2] " style={{ color: 'rgba(48, 57, 64, 0.8)', fontWeight: '500', fontFamily: 'Inter' }}>{card.jobUz}</p>
                </div>
                <div className="absolute right-20">
                  <ReactStars
                    count={5}
                    value={card.rating}
                    size={24}
                    activeColor="#F58634"
                  /></div>
                <Space className="absolute right-[0px]" direction="vertical">
                  <Space wrap>
                    <Dropdown
                      menu={{ items }}
                      placement="bottomRight"
                      arrow={{ pointAtCenter: true }}
                    >
                      <Button className="flex items-center w-[36px] h-[36px] justify-center text-center">
                        <img src={Dots} alt="Dots" />
                      </Button>
                    </Dropdown>
                  </Space>
                </Space>
              </div>
              <div  className="w-[707px] mt-[20px] line-clamp-4 leading-[26px]  opacity-80 line-clamp-4 overflow-hidden text-ellipsis order-[2]" style={{ whiteSpace: 'normal', wordBreak: 'break-word',fontFamily:"Inter" }} dangerouslySetInnerHTML={{__html:card.descriptionUz}}/>
            </div>
          );
        })}
      </div>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel} closeIcon={null} width={560}>
        <div className="flex">
          <img src={Redtrash} alt="Red Trash Icon"/>
          <div className="pt-[24px] pr-[24px] ml-[20px]">
            <div className="flex items-center">
              <h4 className="w-[432px] items-center text-[20px] font-inter" style={{ color:'rgb(26, 32, 36)', fontFamily: 'Inter', fontWeight: 700 }}>Loyihani ochirish</h4>
              <img onClick={handleCancel} src={Close} className="w-[15px] h-[15px]" alt="Close Icon"/>
            </div>
            <p className="w-[432px] h-[40px]" style={{ color: 'rgb(48, 57, 64)', fontFamily: 'Inter', fontWeight: 400 }}>
              Haqiqatan ham ushubu loyihani oʻchirib tashlamoqchimisiz? Bu amalni ortga qaytarib bo‘lmaydi.
            </p>
          </div>
        </div>
        <div className="pt-[24px] flex justify-end">
          <button onClick={handleCancel} className="pt-[10px] pr-[18px] pl-[18px] pb-[10px] text-[16px] rounded-lg mr-[12px]" style={{ color: 'rgb(26, 32, 36)', fontFamily: 'Inter', fontWeight: 600, border: '1px solid rgb(229, 233, 235)', boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)', background: 'rgb(255, 255, 255)' }}>
            Bekor qilish
          </button>
          <button onClick={handleDelete} className="pt-[10px] pr-[18px] pl-[18px] pb-[10px] text-[16px] rounded-lg" style={{ color: 'rgb(255, 255, 255)', border: '1px solid rgb(217, 45, 32)', boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)', background: 'rgb(217, 45, 32)' }}>
            Ochirish
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Fikrlar;
