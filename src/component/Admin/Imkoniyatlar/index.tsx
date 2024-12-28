import { Button, Dropdown, message, Modal, Space } from 'antd';
import Add from '../../../assets/icons/adminadd.svg';
import Dots from '../../../assets/icons/Loyihalarinfo.svg';
import { useNavigate } from 'react-router-dom';
import Edit from '../../../assets/icons/editwhite.svg';
import Trash from '../../../assets/icons/trash.svg';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import { useState } from 'react';
import { removeImkoniyat } from '../../../redux/actions/ImkoniyatlarSlice';
import Close from '../../../assets/icons/closeModalIcon.svg';
import Redtrash from '../../../assets/icons/redtrash.svg';

const Imkoniyatlar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.imkoniyatlar.items);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [messageApi, contextHolder] = message.useMessage();
console.log(items,'items');
  const editImkoniyat = (id: string) => {
    navigate(`/admin/imkoniyatlar/tahrirlash/${id}`); // Use the item ID
  };

  const showModal = (cardId: string) => {
    console.log("Selected card ID for deletion:", cardId); // Debugging line
    setSelectedCardId(cardId);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    if (selectedCardId) {
      try {
        await dispatch(removeImkoniyat(selectedCardId));
        messageApi.open({
          type: 'success',
          content: "O'chirildi",
        });
      } catch (error) {
        messageApi.open({
          type: 'error',
          content: "O'chirishda xato.",
        });
      }
    } else {
      console.error('No item ID selected for deletion'); // Debugging line
    }
    setIsModalOpen(false);
    setSelectedCardId(null); // Reset only after action
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedCardId(null);
  };

  const handleCardClick = (id, title) => {
    navigate(`/admin/imkoniyatlar/:detail`, { state: { id, title } });
  };

  const list = (cardId: string) => [
    {
      key: 'edit',
      label: (
        <div className="flex items-center w-[210px] h-[30px]" onClick={(e) => { e.stopPropagation(); editImkoniyat(cardId); }}>
          <img className="pr-9px" src={Edit} alt="Edit" />
          <p className="w-[65px] h-[20px] flex pl-[4px] justify-start items-center mx-[4px] font-normal leading-[20px] text-[rgb(20,21,26)]" style={{ fontFamily: 'Inter', fontWeight: 400 }}>Tahrirlash</p>
        </div>
      ),
    },
    {
      key: 'delete',
      label: (
        <div className="flex items-center w-[210px] h-[30px]" onClick={(e) => { e.stopPropagation(); showModal(cardId); }}>
          <img src={Trash} alt="Delete" />
          <p className="w-[65px] h-[20px] pl-[4px] flex justify-start items-center mx-[4px] font-normal leading-[20px] text-[rgb(20,21,26)]" style={{ fontFamily: 'Inter', fontWeight: 400 }}>O'chirish</p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full flex pt-[10px] pl-[30px] items-center justify-between pr-[30px] pb-[10px] h-[80px]" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E9EB' }}>
        <div className="box-border border-b border-gray-300 bg-white">
          <span className="static w-[106px] h-[32px] flex flex-row justify-start items-center p-0 text-[24px] font-inter" style={{ fontFamily: 'Inter', fontWeight: 700 }}>Imkoniyatlar</span>
        </div>
        <div className="items-center">
          <button onClick={() => navigate("/admin/imkoniyatlar/qo'shish")} className=" cursor-pointer static w-[139px] h-[44px] flex justify-center items-center rounded-[6px] bg-orange-400 border-none">
            <img src={Add} className="mr-[8px] w-[17px] h-[17px]" alt="Add" />
            <span className="text-white text-[16px]" style={{ fontFamily: 'Inter', fontWeight: 500 }}>Qoshish</span>
          </button>
        </div>
      </div>
      <div className="flex col-sm-4 flex-wrap ml-[30px] mt-[30px] mb-[30px]">
        {items.map((item) => (
          <div key={item.id}  onClick={() => handleCardClick(item.id, item.titleUz)} className="relative mr-[30px] flex flex-col justify-start items-start rounded-[10px] mb-[30px]" style={{ border: '1px solid rgb(229, 233, 235)', background: 'rgb(255, 255, 255)', width: '363px', height: '337px', cursor: 'pointer' }}>
            <div>
              <Space className="absolute top-[20px] left-[300px]">
                <Dropdown menu={{ items: list(item.id) }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                  <Button onClick={(e)=>{e.stopPropagation()}} className="flex items-center w-[36px] h-[36px] justify-center">
                    <img src={Dots} alt="Dots" />
                  </Button>
                </Dropdown>
              </Space>
            </div>
            <img style={{ borderRadius: '8px' }} className="w-[331px] h-[177px] my-4 ml-[14px]" src={item.image} alt="Card Image" />
            <h3 className="w-[331px] h-[24px] ml-[14px] font-inter text-[16px] line-clamp-1" style={{ color: 'rgb(20, 21, 26)', fontWeight: 700 }}>{item.titleUz}</h3>
            <p className="w-[335px] ml-[14px] line-clamp-4 overflow-hidden text-ellipsis" style={{ fontFamily: "Inter", whiteSpace: 'normal', wordBreak: 'break-word' }} dangerouslySetInnerHTML={{ __html: item.descriptionUz }} />
          </div>
        ))}
      </div>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel} closeIcon={null} width={560}>
        {contextHolder}
        <div className="flex">
          <img src={Redtrash} alt="Warning" />
          <div className="pt-[24px] pr-[24px] ml-[20px]">
            <div className="flex items-center ">
              <h4 className="w-[432px] items-center text-[20px] font-inter" style={{ color: 'rgb(26, 32, 36)', fontWeight: 700 }}>Loyihani ochirish</h4>
              <img onClick={handleCancel} src={Close} className="cursor-pointer w-[15px] h-[15px]" alt="Close" />
            </div>
            <p className="w-[432px] h-[40px]" style={{ color: 'rgb(48, 57, 64)', fontWeight: 400 }}>Haqiqatan ham ushbu loyihani oʻchirib tashlamoqchimisiz? Bu amalni ortga qaytarib bo‘lmaydi.</p>
          </div>
        </div>
        <div className="pt-[24px] flex justify-end">
          <button onClick={handleCancel} className=" cursor-pointer pt-[10px] pr-[18px] pl-[18px] pb-[10px] text-[16px] rounded-lg mr-[12px]" style={{ color: 'rgb(26, 32, 36)', fontWeight: 600, border: '1px solid rgb(229, 233, 235)', background: 'rgb(255, 255, 255)' }}>Bekor qilish</button>
          <button onClick={handleDelete} className=" cursor-pointer pt-[10px] pr-[18px] pl-[18px] pb-[10px] text-[16px] rounded-lg" style={{ color: 'rgb(255, 255, 255)', border: '1px solid rgb(217, 45, 32)', background: 'rgb(217, 45, 32)' }}>Ochirish</button>
        </div>
      </Modal>
    </div>
  );
};

export default Imkoniyatlar;
