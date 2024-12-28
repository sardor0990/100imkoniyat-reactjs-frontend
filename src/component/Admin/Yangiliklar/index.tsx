import React, { useEffect, useState } from "react";
import Add from '../../../assets/icons/adminadd.svg';
import { Breadcrumb, Button, Dropdown, Image, Modal, Space, Spin, Table } from "antd";
import Edit from '../../../assets/icons/editwhite.svg';
import Close from '../../../assets/icons/closeModalIcon.svg';
import Redtrash from '../../../assets/icons/redtrash.svg'
import Trash from '../../../assets/icons/trash.svg';
import Dots from '../../../assets/icons/dotsincol.svg';
import request from "../../../services/api/index.d";
import { useNavigate } from "react-router-dom";
import { deleteCard } from "../../../redux/actions/cardSlice";
import {  message } from 'antd';
import { LoadingComponent } from "../../Loading";
import { DeleteFilled, DeleteOutlined, EditOutlined, LoadingOutlined } from "@ant-design/icons";
import type { ColumnsType } from 'antd/es/table';

interface News {
  id: string;
  titleUz: string;
  contentUz: string;
  titleRu: string;
  contentRu: string;
  titleEn: string;
  contentEn: string;
  photoUrl: string;
}

const Yangiliklar: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await request.get('admin/news');
        setNews(response.data.data);
      } catch (error) {
        messageApi.error('Failed to fetch news');
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchNews();
  }, []);

  const compEdit = async (newsItem: News) => {
    try {
      navigate(`/admin/yangiliklar/qo'shish`, { state: newsItem });
    } catch (error) {
      messageApi.error('Failed to fetch event');
    }
  };
  const showModal = (newsId: string) => {
    setSelectedNewsId(newsId);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (selectedNewsId !== null) {
      // delete event by id
      await request.delete(`/admin/news/${selectedNewsId}`);
      setNews(news.filter(newItem => newItem.id !== selectedNewsId));
    }
    setIsModalOpen(false);
    setSelectedNewsId(null);
    messageApi.open({
      type: 'success',
      content: "O'chirildi",
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedNewsId(null);
  };

  const Qoshish = () => {
    navigate("/admin/yangiliklar/qo'shish");
  };

  const stripHtml = (html: string | undefined) => {
    return html ? html.replace(/<\/?[^>]+(>|$)/g, "") : "";
  }

  const columns: ColumnsType<News> = [
    {
      title: 'Rasm',
      dataIndex: 'photoUrl',
      key: 'photoUrl',
      render: (photoUrl: string) => (
        <Image src={photoUrl} alt="News" style={{ width: '100px', height: '60px', objectFit: 'cover' }} />
      ),
    },
    {
      title: 'Sarlavha',
      dataIndex: 'titleUz',
      key: 'titleUz',
    },
    {
      title: 'Matn',
      dataIndex: 'contentUz',
      key: 'contentUz',
      render: (text: string) => stripHtml(text).substring(0, 100) + '...',
    },
    {
      title: 'Amallar',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button
          icon={<EditOutlined />}
            onClick={() => compEdit(record)}
            className="flex items-center justify-center"
            style={{ 
              backgroundColor: '#F48221',
              color: 'white',
              border: 'none',
              width: '36px',
              height: '36px'
            }}
          >
            
          </Button>
          <Button
          icon={<DeleteOutlined />}
            onClick={() => showModal(record.id)}
            className="flex items-center justify-center"
            style={{ 
              background: '#D92D20',
              color: 'white',
              border: 'none',
              width: '36px',
              height: '36px'
            }}
          >
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full flex pt-[10px] pl-[30px] items-center justify-between pr-[30px] pb-[10px]" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E9EB' }}>
        <div className="box-border border-b border-gray-300 bg-white">
          <span className="static w-[106px] h-[32px] flex flex-row justify-start items-center p-0 text-[24px] font-inter" style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 700, }}>Yangiliklar</span>
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
                  title: 'Yangiliklar',
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
      <div className="p-[30px]">
       
    
          <Table 
          loading={loading}
            columns={columns}
            dataSource={news}
            rowKey="id"
            pagination={{
              pageSize: 10,
              position: ['bottomCenter']
            }}
          />
       
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

export default Yangiliklar;
