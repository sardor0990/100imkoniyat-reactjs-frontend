import React, { useState } from "react";
import { Breadcrumb, Button, Popover, Upload, message } from "antd";
import Uploadimage from "../../../../../assets/icons/upload.svg";
import { useDispatch,useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { v4 as uuid } from 'uuid'; // Generate unique IDs
import { addImkoniyatDetail } from "../../../../../redux/actions/imkoniyatDetailSlice";
import { AppDispatch, RootState } from "../../../../../redux/store/store";
import Korsatma from '../../../../../assets/icons/korsatmalar.svg'
import KorsatmaIcon from '../../../../../assets/icons/korsatmaicon.svg'

const DetailAdd: React.FC = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const location = useLocation()
  const { id,title } = location.state || {}; // Get the ID from location state
  console.log(id)
  const items = useSelector((state: RootState) => state.imkoniyatlar.items);
      
      
  
  interface Imkoniyat {
    id?: string;
    image: string | null;
    titleUz: string;
    descriptionUz: string;
    titleRu: string;
    descriptionRu: string;
    titleEn: string;
    descriptionEn: string;
  }

  const dispatch = useDispatch<AppDispatch>();
  const [data, setData] = useState<Imkoniyat>({
    id: uuid(),
    image: null,
    titleUz: '',
    descriptionUz: '',
    titleRu: '',
    descriptionRu: '',
    titleEn: '',
    descriptionEn: '',
  });
  const [detailsList, setDetailsList] = useState<Imkoniyat[]>([]);
  const [fileList, setFileList] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleUpload = (file: any) => {
    setData({ ...data, image: URL.createObjectURL(file) });
    setFileList([file]);
    return false; 
  };

  const handleSubmit = () => {
    if (
      data.image &&
      data.titleUz &&
      data.descriptionUz &&
      data.titleRu &&
      data.descriptionRu &&
      data.titleEn &&
      data.descriptionEn
    ) {
      const newDetail = { ...data, id: uuid() }; // Generate a unique ID
      const selectedItem = items.filter(v=>v.id == id);

   

      dispatch(addImkoniyatDetail(newDetail));
      setDetailsList((prevList) => [...prevList, newDetail]); // Add the new detail to the list

      messageApi.open({
        type: 'success',
        content: "Qo'shildi",
      });
      navigate(`/admin/imkoniyatlar/:detail`, { state: { title } });
      setData({
        image: null,
        titleUz: '',
        descriptionUz: '',
        titleRu: '',
        descriptionRu: '',
        titleEn: '',
        descriptionEn: '',
      });
      setFileList([]);
    } else {
      messageApi.open({
        type: 'warning',
        content: 'Please fill all fields',
      });
    }
  };

  const handleCancel = () => {
    navigate('/admin/imkoniyatlar/:detail');
    setData({
      image: null,
      titleUz: '',
      descriptionUz: '',
      titleRu: '',
      descriptionRu: '',
      titleEn: '',
      descriptionEn: '',
    });
    setFileList([]);
  };

  const handleRemove = (file) => {
    setFileList((prevFileList) => prevFileList.filter((item) => item.uid !== file.uid));
    return true;
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ],
  };

  const content = (
    <div className="w-full h-full" style={{ color: 'white', padding: '10px', borderRadius: '4px' }}>
    <p className="w-[209px] text-center px-[0px]" style={{color:'black',}}>Har qanday yo`nalish uchun ko`rsatmalar qo`shish mumkin, bu ko`rsatmalar tanlanglar yo`nalish ichida ko`rinadi</p>
  </div>
  );
  return (
    <div className="w-full">
      <div className="w-full flex pt-[10px] pl-[30px] items-center justify-between pr-[30px] pb-[10px]" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E9EB' }}>
        <div className="box-border border-b border-gray-300 bg-white">
          <span className="static w-[106px] h-[32px] flex flex-row justify-start items-center p-0 text-[24px] font-inter" style={{ fontFamily: 'Inter', fontWeight: 700 }}>Qoshish</span>
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
                  title: title,
                  onClick: () => navigate('/admin/imkoniyatlar/:detail', { state: { title } } ),
                },
                {
                  title: 'Qoshish',
                },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="w-full h-full">
        <div className="pl-[30px] pt-[30px] pr-[30px]">
          <div className="w-full flex">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600 }}>Rasm</span>
            <div className="flex flex-col justify-start items-center pt-[16px] pl-[24px] pr-[24px] pb-[16px] w-[900px] h-[126px] rounded-xl" style={{ border: '1px solid rgb(229, 233, 235)' }}>
              <Upload maxCount={1} beforeUpload={(e) => handleUpload(e)} fileList={fileList} customRequest={({ file }) => uploadFile(file)} onRemove={handleRemove}>
                <Button className="w-[40px] h-[40px] flex items-center justify-center">
                  <img className="w-[17px] h-[17px]" src={Uploadimage} alt="upload" />
                </Button>
              </Upload>
              <div className="pt-[12px]">
                <p className="flex justify-center text-[14px]" style={{ color: 'rgb(71, 84, 103)', fontFamily: 'Inter', fontWeight: 400 }}>
                  <span className="pr-[4px]" style={{ color: 'rgb(245, 134, 52)', fontWeight: 600 }}>Click to upload</span> or drag and drop
                </p>
                <h5 className="flex justify-center text-[14px] pt-[4px]" style={{ color: 'rgb(71, 84, 103)', fontFamily: 'Inter', fontWeight: 400 }}>PNG or JPG (max. 800x400px)</h5>
              </div>
            </div>
          </div>
          <div className="w-full flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600 }}>Sarlavha(ozbekcha)</span>
            <input value={data.titleUz} onChange={handleChange} name="titleUz" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{ border: '1px solid rgb(229, 233, 235)' }} />
          </div>
          <div className="flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600 }}>Tavsif(ozbekcha)</span>
            <div className="w-[900px] h-[300px]">
              <ReactQuill theme="snow" value={data.descriptionUz} onChange={(value) => setData({ ...data, descriptionUz: value })} className="custom-quill" modules={modules} style={{ height: "200px" }} />
            </div>
          </div>
          <div className="w-full flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600 }}>Название(русский)</span>
            <input value={data.titleRu} onChange={handleChange} name="titleRu" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{ border: '1px solid rgb(229, 233, 235)' }} />
          </div>
          <div className="flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600 }}>Описание (русский)</span>
            <div className="w-[900px] h-[300px]">
              <ReactQuill theme="snow" value={data.descriptionRu} onChange={(value) => setData({ ...data, descriptionRu: value })} className="custom-quill" modules={modules} style={{ height: "200px" }} />
            </div>
          </div>
          <div className="w-full flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600 }}>Title (En)</span>
            <input value={data.titleEn} onChange={handleChange} name="titleEn" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{ border: '1px solid rgb(229, 233, 235)' }} />
          </div>
          <div className="flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600 }}>Description (En)</span>
            <div className="w-[900px] h-[300px]">
              <ReactQuill theme="snow" value={data.descriptionEn} onChange={(value) => setData({ ...data, descriptionEn: value })} className="custom-quill" modules={modules} style={{ height: "200px" }} />
            </div>
          </div>
        </div>
        <div className="pl-[30px] mb-[30px] pr-[574px] flex items-center justify-between" style={{borderTop: '1px solid rgb(229, 233, 235)'}}>
          <div>
          <div className="flex items-center mt-[24px]">
            <h5 style={{color:'rgb(72, 83, 91)',fontFamily:'Inter',fontSize:'16px',fontWeight:'600'}} className="mr-[5px]">Ko`rsatmalar</h5>
            <Popover content={content} style={{backgroundColor:'rgb(16, 24, 40);'}}>
            <img className="cursor-pointer" src={Korsatma}/>
          </Popover>
          </div>
            <span style={{color:'rgb(110, 124, 135)',fontFamily:'Inter',fontSize:'14px',fontWeight:'400'}}>{title}</span>
            </div>
          <div className="flex items-center  mt-[24px] ">
            <img className="w-[16px] h-[16px]" src={KorsatmaIcon}/>
            <span className="w-[134px] ml-[11px]" style={{color:'rgb(245, 134, 52)',fontFamily:'Inter',fontSize:'14px',fontWeight:'500'}}>Ko`rsatma qo`shish</span>
          </div>
        </div>
        <div className="flex pt-[10px] pb-[10px] pr-[16px] w-full h-[64px] flex justify-end items-center p-[10px 16px 10px 16px]" style={{boxShadow: "inset 0px 1px 0px 0px rgb(229, 233, 235)"}}>
          {contextHolder}
          <button className="mr-[16px] w-[160px] h-[44px] outline-none border-none rounded-md text-[14px]" style={{cursor:'pointer',color: 'rgb(245, 134, 52)',background: 'rgb(255, 255, 255)',border: '1px solid rgb(229, 233, 235)',fontFamily: 'Inter',fontWeight: 500,}} onClick={handleCancel}>Bekor qilish</button>
          <button className="w-[139px] h-[44px] border-none rounded-md text-[16px] " style={{cursor:'pointer',color: 'rgb(255, 255, 255)',background: 'rgb(245, 134, 52)',fontFamily: 'Inter',fontWeight: 500,}} onClick={handleSubmit}>Saqlash</button>
        </div>
      </div>
    </div>
  );
};

export default DetailAdd;
