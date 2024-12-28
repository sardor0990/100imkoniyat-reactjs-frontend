import React, { useState } from "react";
import { Breadcrumb, Button, Upload, message } from "antd";
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/font_family.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import { useNavigate } from "react-router-dom";
import Uploadimage from "../../../../assets/icons/upload.svg";
import ReactStars from 'react-rating-stars-component';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store/store";
import { addFikrlarCard } from "../../../../redux/actions/fikrlarSlice";
import axios from "axios";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


const FikrlarQoshish: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();
  const [fileList, setFileList] = useState<any[]>([]);



  const ratingChanged = (newRating: number) => {
    setRating(newRating);
    setList({ ...list, rating: newRating });
  };


  const handleRemove = (file:string) => {
    setFileList((prevFileList) => prevFileList.filter((item) => item.uid !== file.uid));
    return true; // Required to actually remove the file from the list
  };
  



  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setList({ ...list, [name]: value });
  };
  interface FikrlarCard {
    id?: string;
    image: string | null;
    rating:number;
    titleUz: string;
    jobUz: string;
    descriptionUz: string;
    titleRu: string;
    jobRu: string;
    descriptionRu: string;
    titleEn: string;
    jobEn: string;
    descriptionEn: string;
  }
  const fikrlarcards = useSelector((state: RootState) => state.fikrlar.fikrlarCards);
  console.log(fikrlarcards, 'cards');
 
  const dispatch = useDispatch<AppDispatch>();
  const [list, setList] = useState<FikrlarCard>({
    image: null,
    rating:0,
    titleUz: '',
    jobUz: '',
    descriptionUz: '',
    titleRu: '',
    jobRu: '',
    descriptionRu: '',
    titleEn: '',
    jobEn: '',
    descriptionEn: '',
  });


  const handleSubmit = () => {
 
    console.log("List values before validation:", list);
  
    if (
      list.image &&
      list.titleUz &&
      list.rating &&
      list.jobUz &&
      list.descriptionUz &&
      list.titleRu &&
      list.jobRu &&
      list.descriptionRu &&
      list.titleEn &&
      list.jobEn &&
      list.descriptionEn
    ) {
      dispatch(addFikrlarCard(list));
     
      console.log(addFikrlarCard)
      messageApi.open({
        type: 'success',
        content: "Qo'shildi",
      });
      navigate('/admin/fikrlar')
      setFileList([])
      setRating(0)
      
      setList({
        image: null,
        rating: 0,
        jobUz: '',
        titleUz: '',
        descriptionUz: '',
        titleRu: '',
        jobRu: '',
        descriptionRu: '',
        titleEn: '',
        jobEn: "",
        descriptionEn: '',
      });
    } else {
      messageApi.open({
        type: 'warning',
        content: 'Please fill all fields',
      });
    }
  };
  const handleUpload = (file: any) => {
    setList({ ...list, image: URL.createObjectURL(file) });
    setFileList([file]);
    return false; 
  };
  
  const uploadFile = async (file: any) => {
    try {
      const token = localStorage.getItem("token");
      const axiosInstance = axios.create({
        baseURL: "https://api.game.fest.itic.uz/api",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const formData = new FormData();
      formData.append("file", file);

      const response = await axiosInstance.post("/public/upload", formData, {
        onUploadProgress: (progressEvent) => {
          messageApi.open({
            type: 'loading',
            content: `Загрузка: ${Math.round((progressEvent.loaded / progressEvent.total) * 100)}%`,
            duration: 0,
          });
        },
      });

      setList({ ...list, image: response.data.data.fileUrl });

      messageApi.open({
        type: 'success',
        content: "Загрузка завершена",
      });
    } catch (error) {
      console.error(error);
      messageApi.open({
        type: 'error',
        content: "Загрузка не удалась",
      });
    }
  };
  const modules={
    toolbar:[[{header:[1,2,3,4,5,6,false], }],
    [{ font: [] }],
    [{ size: [] }],
   ["bold","italic","underline","strike","blockquote"],
   [
    {list:"ordered"},
    {list:"bullet"},
    {indent:"-1"},
    {indent:"+1"},
   ],
 
  ]
  }

  const navigate = useNavigate();

     return(
        <div className="w-[full]">
          {contextHolder}
         <div className="w-full flex pt-[10px] pl-[30px] items-center justify-between pr-[30px] pb-[10px]" style={{background: '#FFFFFF',borderBottom: '1px solid #E5E9EB'}}>
        <div className="box-border border-b border-gray-300 bg-white">
          <span className="static w-[106px] h-[32px] flex flex-row justify-start items-center p-0 text-[24px] font-inter" style={{fontFamily: 'Inter',fontWeight: 700,}}>Fikrlar</span>
          <div className="flex items-center">
            <Breadcrumb
              style={{cursor:'pointer'}}
              separator=">"
              items={[
                {
                  title: 'Fikrlar',
                  onClick:()=>navigate('/admin/fikrlar'),
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
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Rasm</span>
            <div className="flex flex-col justify-start items-center pt-[16px] pl-[24px] pr-[24px] pb-[16px] w-[900px] h-[126px] rounded-xl" style={{border: '1px solid rgb(229, 233, 235)'}}>
              <Upload maxCount={1} beforeUpload={(e)=>handleUpload(e)} fileList={fileList} customRequest={({file}) => uploadFile(file)}  onRemove={handleRemove} >
                
                <Button className="w-[40px] h-[40px] flex items-center justify-center">
                  <img className="w-[17px] h-[17px]" src={Uploadimage} alt="upload"/>
                </Button>
              </Upload>
              <div className="pt-[12px]">
                <p className="flex justify-center text-[14px]" style={{color: 'rgb(71, 84, 103)',fontFamily: 'Inter',fontWeight: 400,}}>
                  <span className="pr-[4px]" style={{color: 'rgb(245, 134, 52)',fontWeight: 600,}}>Click to upload</span> or drag and drop
                </p>
                <h5 className="flex justify-center text-[14px] pt-[4px]" style={{color: 'rgb(71, 84, 103)',fontFamily: 'Inter',fontWeight: 400,}}>PNG or JPG (max. 800x400px)</h5>
              </div>
            </div>
            
          </div>
             <div className="w-full flex items-center pt-[24px]">
              <span  className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Reyting</span>
              <ReactStars value={rating} count={5} onChange={ratingChanged} size={40} activeColor="#F58634" />
              </div>
          <div className="w-full flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>FIO(o`zbekcha)</span>
            <input onChange={(handleChange)} value={list.titleUz}   name="titleUz" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{border: '1px solid rgb(229, 233, 235)'}}/>
          </div>
          <div className="w-full flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Lavozimi(o`zbekcha)</span>
            <input onChange={(handleChange)} value={list.jobUz}  name="jobUz" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{border: '1px solid rgb(229, 233, 235)'}}/>
          </div>
          <div className=" flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Tavsif(o`zbekcha)</span>
            <div className="w-[900px] h-[300px]">
            <ReactQuill className="custom-quill"  style={{ height: "200px" }} theme="snow" value={list.descriptionUz} onChange={(value) => setList({ ...list, descriptionUz: value })} modules={modules} />
            </div>
          </div>
        </div>
        <div className="pl-[30px] pr-[30px]">
          <div className="w-full flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>ФИО (русский)</span>
            <input onChange={(handleChange)} value={list.titleRu}  name="titleRu" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{border: '1px solid rgb(229, 233, 235)'}}/>
          </div>
          <div className="w-full flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Позиция (русский)</span>
            <input onChange={(handleChange)} value={list.jobRu}  name="jobRu" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{border: '1px solid rgb(229, 233, 235)'}}/>
          </div>
          <div className=" flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Описание (русский)</span>
            <div className="w-[900px] h-[300px]">
            <ReactQuill className="custom-quill"  style={{ height: "200px" }} theme="snow" value={list.descriptionRu} onChange={(value) => setList({ ...list, descriptionRu: value })} modules={modules} />
            </div>
          </div>
        </div>
        <div className="pl-[30px] pr-[30px]">
          <div className="w-full flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Full name(english)</span>
            <input onChange={(handleChange)} value={list.titleEn}  name="titleEn" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{border: '1px solid rgb(229, 233, 235)'}}/>
          </div>
          <div className="w-full flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Position (english)</span>
            <input onChange={(handleChange)} value={list.jobEn}  name="jobEn" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{border: '1px solid rgb(229, 233, 235)'}}/>
          </div>
          <div className=" flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Description(english)</span>
            <div className="w-[900px] h-[300px]">
            <ReactQuill className="custom-quill"  style={{ height: "200px" }} theme="snow" value={list.descriptionEn} onChange={(value) => setList({ ...list, descriptionEn: value })} modules={modules} />
            </div>
          </div>
        </div>
        <div className="flex pt-[10px] pb-[10px] pr-[16px] w-full h-[64px] flex justify-end items-center p-[10px 16px 10px 16px]" style={{boxShadow: "inset 0px 1px 0px 0px rgb(229, 233, 235)"}}>
          <button className="mr-[16px] w-[160px] h-[44px] outline-none border-none rounded-md text-[14px]" style={{cursor:'pointer',color: 'rgb(245, 134, 52)',background: 'rgb(255, 255, 255)',border: '1px solid rgb(229, 233, 235)',fontFamily: 'Inter',fontWeight: 500,}} >Bekor qilish</button>
          <button className="w-[139px] h-[44px] border-none rounded-md text-[16px]" style={{cursor:'pointer',color: 'rgb(255, 255, 255)',background: 'rgb(245, 134, 52)',fontFamily: 'Inter',fontWeight: 500,}} onClick={handleSubmit} >Saqlash</button>
        </div>
      </div>
        </div>
     )
}  
export default FikrlarQoshish;