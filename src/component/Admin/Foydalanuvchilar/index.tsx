import React from "react";
import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
import Trash from '../../../assets/icons/trash.svg';
import {Border} from './style'
import {useState} from "react";
import { Modal } from 'antd';
import Close from '../../../assets/icons/closeModalIcon.svg';
import Redtrash from '../../../assets/icons/redtrash.svg';
import {  useNavigate } from "react-router-dom";


interface DataType {
  key: string;
  image: string;
  name: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
}

const Foydalanuvchilar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedUser, setSelectedUser] = useState<DataType | null>(null);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedCardId(null);
  };

  const navigate = useNavigate();

  const handleDelete = async () => {
    // if (selectedCardId) {
    //   try {
    //     await dispatch(removeImkoniyat(selectedCardId));
    //     messageApi.open({
    //       type: 'success',
    //       content: "O'chirildi",
    //     });
    //   } catch (error) {
    //     messageApi.open({
    //       type: 'error',
    //       content: "O'chirishda xato.",
    //     });
    //   }
    // } else {
    //   console.error('No item ID selected for deletion'); // Debugging line
    // }
  }
  

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'No',
    dataIndex: 'key',
    key: 'key',
    render: (key, record) => <span onClick={() => navigate(`/admin/foydalanuvchilar/${record.key}/detail`, { state: { user: record } })} style={{cursor: 'pointer'}}>{key}</span>,
  },
  {
    title: 'Rasm',
    dataIndex: 'image',
    key: 'image',
    render: (image, record) => <img src={image} width={'39px'} height={'39px'} style={{borderRadius: '25px'}} onClick={() => navigate(`/admin/foydalanuvchilar/${record.key}/detail`, { state: { user: record } })}/>,
  },
  {
    title: 'FIO',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <p onClick={() => navigate(`/admin/foydalanuvchilar/${record.key}/detail`, { state: { user: record } })}>{text}</p>,
  },
  {
    title: 'Telefon raqam',
    dataIndex: 'phone',
    key: 'phone',
    render: (phone, record) => (
        <span onClick={() => navigate(`/admin/foydalanuvchilar/${record.key}/detail`, { state: { user: record } })}>{phone}</span>
    ),
  },
  {
    title: 'Jinsi',
    dataIndex: 'gender',
    key: 'gender',
    render: (gender, record) => (
          <span onClick={() => navigate(`/admin/foydalanuvchilar/${record.key}/detail`, { state: { user: record } })}>{gender}</span>
    ),
  },
  {
    title: "Tug'ilgan yili",
    dataIndex: 'dateOfBirth',
    key: 'dateOfBirth',
    render: (dateOfBirth, record) => (
      <span onClick={() => navigate(`/admin/foydalanuvchilar/${record.key}/detail`, { state: { user: record } })}>{dateOfBirth}</span>
    ),
  },
  {
    title: '',
    key: 'action',
    render: (_, record: DataType) => (
      <Space size="middle" className="flex justify-center">
        <img src={Trash} alt="Delete" onClick={() => { setIsModalOpen(true); /*setSelectedUser(record);*/ }}/>
      </Space>
    ),
    },
];

const data: DataType[] = [
  {
    key: '1',
    image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    name: 'John Brown',
    phone: '(93) 989-78-78',
    gender: 'Erkak',
    dateOfBirth: '05/19/2000',
  },
  {
    key: '2',
    image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    name: 'Jim Green',
    phone: '(93) 989-78-78 ',
    gender: 'Erkak',
    dateOfBirth: '05/19/2000',
  },
  {
    key: '3',
    image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    name: 'Joe Black',
    phone: '(93) 989-78-78 ',
    gender: 'Erkak',
    dateOfBirth: '05/19/2000',
  },
];

return (
  <div className="">
    <h2 className="mb-[24px]">Foydalanuvchilar</h2>
    <Border className="w-full mb-[24px]"></Border>
      
    <Table columns={columns} dataSource={data} bordered className="px-5"/>      
    <Modal open={isModalOpen} footer={null} onCancel={handleCancel} closeIcon={null} width={560}>
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



export default Foydalanuvchilar;
