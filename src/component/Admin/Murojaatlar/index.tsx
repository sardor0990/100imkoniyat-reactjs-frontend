import { Input, Skeleton, Table } from "antd";
import React, { FormEvent, useEffect, useState } from "react";
import Search from '../../../assets/icons/search.svg';
import { useNavigate, useLocation } from "react-router-dom";
import request from "../../../services/api/index.d";
import { ColumnsType } from "antd/es/table";
import type { TablePaginationConfig } from 'antd/es/table';
import debounce from 'lodash/debounce';

interface RequestData {
  id: string;
  userName: string;
  title: string;
  phoneNumber: string;
  comment: string;
  userEmail: string;
  callRequestStatus: string;
  createdAt: string;
  status: string;
}

const Murojaatlar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedDirection, setSelectedDirection] = useState('');
  const [data, setRequestData] = useState<RequestData[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
    total: 0,
    showSizeChanger: true,
    pageSizeOptions: [10, 20, 50, 100],
  });

  const columns: ColumnsType<RequestData> = [
    {
      title: '№',
      key: 'index',
      width: 60,
      render: (_, __, index) => {
        return ((pagination.current ?? 1) - 1) * (pagination.pageSize ?? 10) + index + 1;
      },
      align: 'center'
    },
    {
      title: 'Sana',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => formatDate(date),
      sorter: (a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      },
      defaultSortOrder: 'descend', //sorter
      showSorterTooltip: {
        title: 'Saralash' // Custom tooltip text in Uzbek
      },
      sortDirections: ['descend', 'ascend'] // Available sort directions
    },
    {
      title: 'Mavzu',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Ism',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Login',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Telefon',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Status',
      dataIndex: 'callRequestStatus',
      key: 'callRequestStatus',
      render: (status) => (
        <span className={`py-2 px-3 rounded-md ${getStatusClasses(status)}`}>
          {status}
        </span>
      )
    }
  ];

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setPagination(pagination);
    fetchData(pagination.current, pagination.pageSize);
  };

  const fetchData = async (
    page = pagination.current || 1,
    pageSize = pagination.pageSize || 10,
    status = selectedStatus
  ) => {
    try {
      const adjustedPage = page - 1;
      let url = `admin/call-request/all?page=${adjustedPage}&size=${pageSize}`;
      
      if (status && status !== 'ALL') url += `&status=${status}`;
      
      const response = await request.get(url);
      
      setRequestData(response.data.data);
      setPagination(prev => ({
        ...prev,
        current: page,
        pageSize: pageSize,
        total: response.data.pagination?.totalElements || 0
      }));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    params.set('page', (pagination.current || 1).toString());
    params.set('size', (pagination.pageSize || 10).toString());
    
    if (selectedStatus && selectedStatus !== 'ALL') {
      params.set('status', selectedStatus);
    } else {
      params.delete('status');
    }

    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    fetchData(pagination.current, pagination.pageSize, selectedStatus);
  }, [pagination.current, pagination.pageSize, selectedStatus]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get('page') || '1');
    const size = parseInt(params.get('size') || '10');
    const status = params.get('status') || '';
    const direction = params.get('direction') || '';
    const search = params.get('search') || '';

    setPagination(prev => ({ ...prev, current: page, pageSize: size }));
    setSelectedStatus(status);
    setSelectedDirection(direction);
    setSearchTerm(search);

    fetchData(page, size, status);
  }, []);

  const handleSearch = debounce((value: string) => {
    setSearchTerm(value);
  }, 200);

  const filteredItems = Array.isArray(data) ? data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedStatus === 'ALL' || selectedStatus === '' || item.callRequestStatus === selectedStatus) &&
    (selectedDirection === 'ALL' || selectedDirection === '' || item.title === selectedDirection)
  ) : [];
  const GotoInfo=(murojatlarid:string)=>{
    navigate(`/admin/murojaatlar/info/${murojatlarid}` , {state: {data : data}})
  }
  const getStatusClasses = (callRequestStatus: string) => {
    switch (callRequestStatus) {
      case 'NEW':
        return 'bg-blue-500 text-white';
      case 'REPLIED':
        return 'bg-green-500 text-white';
      case 'CLOSED':
        return 'bg-red-500 text-white';
      default:
        return '';
    }
  };
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  return (
    <div className="w-full">
      <div
        className="w-full box-border flex flex-row items-center flex-none order-1 flex-grow-0 h-[80px] pl-[30px] pt-[8px] pb-[8px] bg-white border-b border-gray-300 solid border"
        style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E9EB' }}
      >
        <span
          className="static flex flex-row justify-start items-center text-[24px]"
          style={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 700 }}
        >
          Murojatlar
        </span>
      </div>
      <div className="flex ml-[30px] mt-[8px] mb-[8px] items-center">
        <div className="w-[287px] mr-[12px] relative">
          <img
            src={Search}
            className="absolute left-90 bottom-50 transform -translate-y-1/2 w-4 h-4 z-20 mt-[26px] ml-[15px]"
            alt="Search icon"
          />
          <Input
            placeholder="Qidirish"
            className="text-[14px] outline-none w-full rounded-xl pl-[40px] h-[52px]"
            style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              border: '1px solid rgb(229, 233, 235)',
            }}
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <select
          className="outline-none"
          style={{
            width: '287px',
            height: '52px',
            borderRadius: '12px',
            padding: '0.5rem',
            border: '1px solid rgb(229, 233, 235)',
            fontFamily: 'Inter',
            fontSize: '14px'
          }}
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="" disabled>Status bo`yicha</option>
          <option value='ALL'>Xammasi</option>
          <option value="NEW">Yangi</option>
          <option value="REPLIED">Javob berildi</option>
          <option value="CLOSED">Yopildi</option>
        </select>
        <select
          className="outline-none ml-[12px]"
          style={{
            width: '287px',
            height: '52px',
            borderRadius: '12px',
            padding: '0.5rem',
            border: '1px solid rgb(229, 233, 235)',
            fontFamily: 'Inter',
            fontSize: '14px'
          }}
          value={selectedDirection}
          onChange={(e) => setSelectedDirection(e.target.value)}
        >
          <option value="" disabled>Yo`nalishlar bo`yicha</option>
          <option value='ALL'>Xammasi</option>
          <option value="nogironlar">Nogironligi bor yoshlar uchun</option>
          <option value="xotin-qizlar">Xotin-qizlar uchun</option>
          <option value="yoshlar">Yoshlar uchun</option>
          <option value="ta'lim">Ta'lim uchun</option>
          <option value="tadbirkorlik">Tadbirkorlik uchun</option>
        </select>
      </div>
         
      <Table 
        columns={columns}
        dataSource={filteredItems}
        loading={loading}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => GotoInfo(record.id)
        })}
        className="mx-[30px] mt-[24px]"
        pagination={{
          ...pagination,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        }}
        onChange={(newPagination) => {
          setPagination(newPagination);
        }}
      />
    </div>
  );
};

export default Murojaatlar;
