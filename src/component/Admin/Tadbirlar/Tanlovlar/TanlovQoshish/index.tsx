import React, { useState, useEffect } from "react";
import { Breadcrumb, Button, Upload, message } from "antd";
import Uploadimage from "../../../../../assets/icons/upload.svg";
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import { useDispatch } from "react-redux";
import { addCard, updateCard } from "../../../../redux/actions/cardSlice";
import { AppDispatch } from "../../../../redux/store/store";
import { RootState } from "../../../../redux/store/store";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import request from "../../../../../services/api/index.d";

const TanlovQoshish: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [messageApi, contextHolder] = message.useMessage();

  interface Card {
    id?: string;
    type: string;
    photoUrl: string | null;
    titleUz: string;
    contentUz: string;
    titleRu: string;
    contentRu: string;
    titleEn: string;
    contentEn: string;
  }

  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState<Card>({
    photoUrl: null,
    titleUz: '',
    contentUz: '',
    titleRu: '',
    contentRu: '',
    titleEn: '',
    contentEn: '',
    type: 'CONTESTS'
  });

  const [fileList, setFileList] = useState<any[]>([]);

  const cards = useSelector((state: RootState) => state.cards.cards); // Moved useSelector here

  useEffect(() => {
    if (location.state) {
      setForm(location.state as Card);
      setFileList([{ uid: '-1', name: location.state.photoUrl?.split('/').pop(), status: 'done', url: location.state.photoUrl }]);
    }
  }, [location.state, cards]); // Added cards to the dependency array
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleUpload = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);

      
    const response = await request.post("/base/file/upload", formData, {
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total) {
          messageApi.open({
            type: 'loading',
            content: `Загрузка: ${Math.round((progressEvent.loaded / progressEvent.total) * 100)}%`,
            duration: 0,
          });
        }
      },
    });
    setForm({ ...form, photoUrl: response.data.data.fileUrl });
    setFileList([file]);
    return false; 
  };

  const uploadFile = async (file: any) => {
    try {
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

  const handleSubmit = async () => {

    if (
      form.titleUz &&
      form.contentUz &&
      form.titleRu &&
      form.contentRu &&
      form.contentEn
    ) {
      if (fileList[0]) { // Check if fileList[0] is not null
        const response = uploadFile(fileList[0]);
      }
      if (location.state && location.state.id) {
        await request.put(`/admin/events`, {
          data: form
        });
      } else {
        await request.post("/admin/events", {
          data: form
        });
        // dispatch(addCard(form));
      }
      messageApi.open({
        type: 'success',
        content: "Qo'shildi",
      });
      navigate("/admin/tadbirlar/tanlovlar");
      setForm({
        photoUrl: null,
        titleUz: '',
        contentUz: '',
        titleRu: '',
        contentRu: '',
        titleEn: '',
        contentEn: '',
        type: 'CONTESTS'
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
    navigate('/admin/tadbirlar/tanlovlar/');
    setForm({
      photoUrl: null,
      titleUz: '',
      contentUz: '',
      titleRu: '',
      contentRu: '',
      titleEn: '',
      contentEn: '',
      type: 'CONTESTS'
    });
    setFileList([]);
  };

  const handleRemove = (file) => {
    if (file && file.uid) { // Check if file is not null and has uid
      setFileList((prevFileList) => prevFileList.filter((item) => item.uid !== file.uid));
    }
    return true; // Required to actually remove the file from the list
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

  return (
    <div className="w-full">
      <div className="w-full flex pt-[10px] pl-[30px] items-center justify-between pr-[30px] pb-[10px]" style={{background: '#FFFFFF',borderBottom: '1px solid #E5E9EB'}}>
        <div className="box-border border-b border-gray-300 bg-white">
          <span className="static w-[106px] h-[32px] flex flex-row justify-start items-center p-0 text-[24px] font-inter" style={{fontFamily: 'Inter',fontWeight: 700,}}>Qo`shish</span>
          <div className="flex items-center">
            <Breadcrumb
              style={{cursor:'pointer'}}
              separator=">"
              items={[
                {
                  title: 'Tadbirlar',
                  onClick:()=>navigate('/admin/tadbirlar'),
                },
                {
                  title: 'Tanlovlar',
                  onClick:()=>navigate('/admin/tadbirlar/tanlovlar'),
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
              <Upload maxCount={1} beforeUpload={(e)=>handleUpload(e)} fileList={fileList} customRequest={({file}) => uploadFile(file)} onRemove={handleRemove}>
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
          <div className="w-full flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Sarlavha(o`zbekcha)</span>
            <input value={form.titleUz} onChange={handleChange} name="titleUz" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{border: '1px solid rgb(229, 233, 235)'}}/>
          </div>
          <div className=" flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Tavsif(o`zbekcha)</span>
            <div className="w-[900px] h-[300px]">
            <ReactQuill theme="snow" value={form.contentUz} onChange={(value) => setForm({ ...form, contentUz: value })} className="custom-quill" modules={modules}  style={{ height: "200px" }}  />
              {/* <FroalaEditor model={form.descriptionUz} onModelChange={(model) => setForm({ ...form, descriptionUz: model })} config={{placeholderText: '',attribution: false, height: '200px'}}/> */}
            </div>
          </div>
        </div>
        <div className="pl-[30px] pr-[30px]">
          <div className="w-full flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Название(русский)</span>
            <input value={form.titleRu} onChange={handleChange} name="titleRu" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{border: '1px solid rgb(229, 233, 235)'}}/>
          </div>
          <div className=" flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Описание (русский)</span>
            <div className="w-[900px] h-[300px]">
            <ReactQuill theme="snow" value={form.contentRu} className="custom-quill"  style={{ height: "200px" }} onChange={(value) => setForm({ ...form, contentRu: value })} modules={modules} />
            </div>
          </div>
        </div>
        <div className="pl-[30px] pr-[30px]">
          <div className="w-full flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Title(english)</span>
            <input value={form.titleEn} onChange={handleChange} name="titleEn" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{border: '1px solid rgb(229, 233, 235)'}}/>
          </div>
          <div className=" flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Description(english)</span>
            <div className="w-[900px] h-[300px]">
            <ReactQuill className="custom-quill"  style={{ height: "200px" }} theme="snow" value={form.contentEn} onChange={(value) => setForm({ ...form, contentEn: value })} modules={modules} />
            </div>
          </div>
        </div>
        <div className="flex pt-[10px] pb-[10px] pr-[16px] w-full h-[64px] flex justify-end items-center p-[10px 16px 10px 16px]" style={{boxShadow: "inset 0px 1px 0px 0px rgb(229, 233, 235)"}}>
          {contextHolder}
          <button className="mr-[16px] w-[160px] h-[44px] outline-none border-none rounded-md text-[14px]" style={{cursor:'pointer',color: 'rgb(245, 134, 52)',background: 'rgb(255, 255, 255)',border: '1px solid rgb(229, 233, 235)',fontFamily: 'Inter',fontWeight: 500,}} onClick={handleCancel}>Bekor qilish</button>
          <button className="w-[139px] h-[44px] border-none rounded-md text-[16px]" style={{cursor:'pointer',color: 'rgb(255, 255, 255)',background: 'rgb(245, 134, 52)',fontFamily: 'Inter',fontWeight: 500,}} onClick={handleSubmit}>Saqlash</button>
        </div>
      </div>
    </div>
  );
};

export default TanlovQoshish;
