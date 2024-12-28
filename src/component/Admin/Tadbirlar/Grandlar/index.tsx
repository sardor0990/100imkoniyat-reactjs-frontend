import React, { useEffect, useState } from "react";
import Add from '../../../../assets/icons/adminadd.svg';
import { Breadcrumb, Button, Dropdown, Modal, Space } from "antd";
import Edit from '../../../../assets/icons/editwhite.svg';
import Close from '../../../../assets/icons/closeModalIcon.svg';
import Redtrash from '../../../../assets/icons/redtrash.svg'
import Trash from '../../../../assets/icons/trash.svg';
import request from "../../../../services/api/index.d";
import { useNavigate } from "react-router-dom";
import { deleteCard } from "../../../../redux/actions/cardSlice";
import Dots from '../../../../assets/icons/dotsincol.svg';
import {  message } from 'antd';
import { DownSquareTwoTone } from "@ant-design/icons";



interface Card {
  id: string;
  image: string;
  titleUz: string;
  contentUz: string;
  titleRu: string;
  contentRu: string;
  titleEn: string;
  contentEn: string;
  photoUrl: string;
  type: string;
}

const Grandlar: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  
  useEffect(() => {
    const fetchCards = async () => {
      const response = await request.get('admin/events/all');
      const grands = (response.data.data as Card[])?.filter(event => event.type === 'GRANDS');
      setCards(grands);
    };
    fetchCards();
  }, []);

  const compEdit = async (card: Card) => {
    try {
      navigate(`/admin/tadbirlar/Grandlar/qo'shish`, { state: card });
    } catch (error) {
      messageApi.error('Failed to fetch event');
    }
  };
  const showModal = (cardId: string) => {
    setSelectedCardId(cardId);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (selectedCardId !== null) {
      // delete event by id
      await request.delete(`/admin/events/${selectedCardId}`);
      setCards(cards.filter(card => card.id !== selectedCardId));
    }
    setIsModalOpen(false);
    setSelectedCardId(null);
    messageApi.open({
      type: 'success',
      content: "O'chirildi",
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedCardId(null);
  };

  const Qoshish = () => {
    navigate("/admin/tadbirlar/Grandlar/qo'shish");
  };

  const items = (cardId: string) => [
    {
      key: 'edit',
      label: (
        <div onClick={()=>compEdit(cards.find(card => card.id === cardId))}  className="flex items-center w-[210px] h-[30px]">
          <img className="pr-9px" src={Edit} />
          <p className="w-[65px] h-[20px] flex pl-[4px] justify-start items-center mx-[4px] font-normal leading-[20px] text-[rgb(20,21,26)]" style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400 }}>Tahrirlash</p>
        </div>
      ),
    },
    {
      key: 'delete',
      label: (
        <div onClick={() => showModal(cardId)} className="flex items-center w-[210px] h-[30px]">
          <img src={Trash} />
          <p className="w-[65px] h-[20px] pl-[4px] flex justify-start items-center mx-[4px] font-normal leading-[20px] text-[rgb(20,21,26)]" style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 400 }}>O`chirish</p>
        </div>
      ),
    },
  ];

  const stripHtml = (html: string | undefined) => {
    return html ? html.replace(/<\/?[^>]+(>|$)/g, "") : "";
  }

  return (
    <div className="w-full">
      <div className="w-full flex pt-[10px] pl-[30px] items-center justify-between pr-[30px] pb-[10px]" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E9EB' }}>
        <div className="box-border border-b border-gray-300 bg-white">
          <span className="static w-[106px] h-[32px] flex flex-row justify-start items-center p-0 text-[24px] font-inter" style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 700, }}>Grandlar</span>
          <div className="flex items-center">
            <Breadcrumb
              style={{ cursor: 'pointer' }}
              separator=">"
              items={[
                {
                  title: 'Tadbirlar',
                  onClick: () => navigate('/admin/tadbirlar'),
                },
                {
                  title: 'Grandlar',
                },
              ]}
            />
          </div>
        </div>
        <div className="items-center">
          <button style={{ cursor: 'pointer' }} onClick={Qoshish} className="static w-[139px] h-[44px] flex justify-center items-center rounded-[6px] bg-orange-400 border-none">
            <img src={Add} className="mr-[8px] w-[17px] h-[17px] left-[6px] top-[6px]" />
            <span className="static w-[71px] h-[24px] flex justify-center items-center px-[4px] py-[2px] text-[16px] text-white" style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500, }}>Qo`shish</span>
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="w-[] flex ml-[30px] mt-[30px] mb-[30px]">
          <div className="flex col-sm-4 flex-wrap">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative mr-[30px] flex items-center w-[363px] h-[337px] flex flex-col justify-start items-start rounded-[10px]"
                style={{ border: '1px solid rgb(229, 233, 235)', background: 'rgb(255, 255, 255)' }}
              >
                <Space className="absolute top-[20px] left-[300px]" direction="vertical">
                  <Space wrap>
                    <Dropdown
                      menu={{ items: items(card.id) }}
                      placement="bottomRight"
                      arrow={{ pointAtCenter: true }}
                    >
                      <Button className="flex items-center w-[36px] h-[36px] justify-center text-center">
                        <img src={Dots} alt="Dots" style={{ width: '36px', height: '36px' }}/>
                      </Button>
                    </Dropdown>
                  </Space>
                </Space>
                <img className="select-none w-[331px] h-[177px] flex-none order-0 self-stretch flex-grow-0 my-4 ml-[14px] " src={card.photoUrl} alt="Card Image" />
                <h3 className="w-[331px] h-[24px] mr-[14px] ml-[14px] flex-none order-1 flex-grow-0 font-inter text-[20px] line-clamp-1" style={{ color: 'rgb(20, 21, 26)', fontFamily: 'Inter', fontWeight: 700 }}>
                  {card.titleUz} 
                </h3>
                <div className="w-[335px] ml-[14px] mr-[14px] line-clamp-4 overflow-hidden text-ellipsis order-[2]" style={{ fontFamily:"Inter", whiteSpace: 'normal', wordBreak: 'break-word' }} dangerouslySetInnerHTML={{__html:card.descriptionUz}}/>
                <p className="w-[335px] ml-[14px] mr-[14px] mt-4 text-sm text-gray-600 font-inter line-clamp-3" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                  {stripHtml(card.contentUz)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel} closeIcon={null}  width={560}>
      {contextHolder}
    <div className="flex">
    <img src={Redtrash}/>
        <div className="pt-[24px] pr-[24px] ml-[20px]">
          <div className="flex items-center "><h4 className="w-[432px] items-center text-[20px] font-inter" style={{color:'rgb(26, 32, 36)',fontFamily: 'Inter', fontWeight: 700}}>Loyihani ochirish</h4>
         <img onClick={handleCancel}  src={Close} className="w-[15px] h-[15px]"/>
         </div>
          <p className="w-[432px] h-[40px]"style={{color: 'rgb(48, 57, 64)',fontFamily: 'Inter', fontWeight: 400}}>Haqiqatan ham ushubu loyihani oʻchirib tashlamoqchimisiz? Bu amalni ortga qaytarib bo‘lmaydi.</p>
        </div>
        </div>
        <div className="pt-[24px] flex justify-end">
          <button  onClick={handleCancel} className="pt-[10px] pr-[18px] pl-[18px] pb-[10px] text-[16px] rounded-lg mr-[12px]" style={{color: 'rgb(26, 32, 36)',fontFamily: 'Inter',fontWeight: 600,border: '1px solid rgb(229, 233, 235)',boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',background: 'rgb(255, 255, 255)'}}>Bekor qilish</button>
          <button onClick={()=>(handleOk())} className="pt-[10px] pr-[18px] pl-[18px] pb-[10px] text-[16px] rounded-lg"style={{color: 'rgb(255, 255, 255)',border: '1px solid rgb(217, 45, 32)',boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',background: 'rgb(217, 45, 32)'}}>Ochirish</button>
        </div>
      </Modal>
    </div>
  );
};

export default Grandlar;
