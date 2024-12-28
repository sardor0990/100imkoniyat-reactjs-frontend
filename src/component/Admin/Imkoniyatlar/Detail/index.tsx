import Add from '../../../../assets/icons/adminadd.svg';
import { RootState } from '../../../../redux/store/store';
import Dots from '../../../../assets/icons/dotsincol.svg';
import Edit from '../../../../assets/icons/editwhite.svg';
import Trash from '../../../../assets/icons/trash.svg';
import Close from '../../../../assets/icons/closeModalIcon.svg';
import Redtrash from '../../../../assets/icons/redtrash.svg';
import { deleteImkoniyatDetail } from '../../../../redux/actions/imkoniyatDetailSlice';
import { Breadcrumb, Dropdown, Menu, Modal, Space, Table } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Imkoniyatdetail: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { id, title } = location.state || {}; // Get the ID and title from location state
  const { list } = useSelector((state: RootState) => state.imkoniyatDetail);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null); // State to track the item to delete
  const [dropdownVisible, setDropdownVisible] = useState<string | null>(null); // State to control dropdown visibility

  const AddDetail = () => {
    navigate('/admin/imkoniyatlar/:detail/qoshish', { state: { id, title } });
  };

  const dataSource = list.map((detail, key) => ({
    key: key + 1,
    id: detail.id,
    image: detail.image,
    title: detail.titleUz,
    description: detail.descriptionUz,
    // Add more fields as needed
  }));

  const handleEdit = (id: string) => {
    navigate(`/admin/imkoniyatlar/:detail/tahrirlash/${id}`,{ state: { id, title } });
  };

  const handleDelete = (id: string) => {
    setItemToDelete(id); // Set the item to delete
    setIsModalOpen(true); // Open the modal
    setDropdownVisible(null); // Close the dropdown menu
  };

  const confirmDelete = () => {
    if (itemToDelete !== null) {
      dispatch(deleteImkoniyatDetail(itemToDelete));
      setIsModalOpen(false);
      setItemToDelete(null);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  const menu = (id: string) => (
    <Menu>
      <div
        style={{ cursor: 'pointer' }}
        className="flex items-center w-[210px] h-[30px] pl-[10px]"
        onClick={(e) => { e.stopPropagation(); handleEdit(id); }}
      >
        <img className="pr-9px" src={Edit} alt="Edit" />
        <p
          className="w-[65px] h-[20px] flex pl-[10px] justify-start items-center mx-[4px] font-normal leading-[20px] text-[rgb(20,21,26)]"
          style={{ fontFamily: 'Inter', fontWeight: 400 }}
        >
          Tahrirlash
        </p>
      </div>
      <div
        style={{ cursor: 'pointer' }}
        className="flex items-center w-[210px] h-[30px] pl-[10px]"
        onClick={(e) => {e.stopPropagation(); handleDelete(id)}}
      >
        <img src={Trash} alt="Delete" />
        <p
          className="w-[65px] h-[20px] pl-[10px] flex justify-start items-center mx-[4px] font-normal leading-[20px] text-[rgb(20,21,26)]"
          style={{ fontFamily: 'Inter', fontWeight: 400 }}
        >
          O'chirish
        </p>
      </div>
    </Menu>
  );

  const columns = [
    {
      title: '',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Rasm',
      dataIndex: 'image',
      key: 'image',
      render: (text: string) => (
        <img src={text} alt="Rasm" style={{ width: '96px', height: '50px' }}/>
      ), 
    },
    {
      title: 'Sarlavha',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Tavsif',
      dataIndex: 'description',
      key: 'description',
      render: (text: string) => (
        <div dangerouslySetInnerHTML={{ __html: text }} />
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space style={{ cursor: 'pointer' }}>
          <Dropdown
            overlay={menu(record.id)}
            trigger={['click']}
            placement="bottomRight"
            arrow={{ pointAtCenter: true }}
            onVisibleChange={(visible) => {
              if (visible) {
                setDropdownVisible(record.id);
              } else {
                setDropdownVisible(null);
              }
            }}
            visible={dropdownVisible === record.id}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-center w-[36px] h-[36px] justify-center"
            >
              <img src={Dots} alt="Dots" />
            </div>
          </Dropdown>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div
        className="w-full flex pt-[10px] pl-[30px] items-center justify-between pr-[30px] pb-[10px]"
        style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E9EB' }}
      >
        <div className="box-border border-b border-gray-300 bg-white">
          <span
            className="static h-[32px] flex flex-row justify-start items-center p-0 text-[24px] font-inter"
            style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 700 }}
          >
            {title || title}
          </span>
          <div className="flex items-center">
            <Breadcrumb
              style={{ cursor: 'pointer' }}
              separator=">"
              items={[
                {
                  title: 'Imkoniyatlar',
                  onClick: () => navigate('/admin/imkoniyatlar'),
                },
                {
                  title: title || title,
                },
              ]}
            />
          </div>
        </div>
        <div className="items-center">
          <button
            onClick={AddDetail}
            style={{ cursor: 'pointer' }}
            className="static w-[139px] h-[44px] flex justify-center items-center rounded-[6px] bg-orange-400 border-none"
          >
            <img src={Add} className="mr-[8px] w-[17px] h-[17px] left-[6px] top-[6px]" />
            <span
              className="static w-[71px] h-[24px] flex justify-center items-center px-[4px] py-[2px] text-[16px] text-white"
              style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 500 }}
            >
              Qoshish
            </span>
          </button>
        </div>
      </div>
      <Table className="mt-[30px] pl-[16px] pr-[16px]" dataSource={dataSource} columns={columns} pagination={false} />
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel} closeIcon={null} width={560}>
        <div className="flex">
          <img src={Redtrash} alt="Warning" />
          <div className="pt-[24px] pr-[24px] ml-[20px]">
            <div className="flex items-center ">
              <h4 className="w-[432px] items-center text-[20px] font-inter" style={{ color: 'rgb(26, 32, 36)', fontWeight: 700 }}>Loyihani ochirish</h4>
              <img onClick={handleCancel} src={Close} className="w-[15px] h-[15px] cursor-pointer" alt="Close" />
            </div>
            <p className="w-[432px] h-[40px]" style={{ color: 'rgb(48, 57, 64)', fontWeight: 400 }}>Haqiqatan ham ushbu loyihani oʻchirib tashlamoqchimisiz? Bu amalni ortga qaytarib bo‘lmaydi.</p>
          </div>
        </div>
        <div className="pt-[24px] flex justify-end">
          <button onClick={handleCancel} className=" cursor-pointer pt-[10px] pr-[18px] pl-[18px] pb-[10px] text-[16px] rounded-lg mr-[12px]" style={{ color: 'rgb(26, 32, 36)', fontWeight: 600, border: '1px solid rgb(229, 233, 235)', background: 'rgb(255, 255, 255)' }}>Bekor qilish</button>
          <button onClick={confirmDelete} className="cursor-pointer pt-[10px] pr-[18px] pl-[18px] pb-[10px] text-[16px] rounded-lg" style={{ color: 'rgb(255, 255, 255)', border: '1px solid rgb(217, 45, 32)', background: 'rgb(217, 45, 32)' }}>Ochirish</button>
        </div>
      </Modal>
    </div>
  );
};

export default Imkoniyatdetail;