import { Breadcrumb, Button, Upload, UploadFile, message } from "antd";
import FroalaEditor from "react-froala-wysiwyg";
import Uploadimage from "../../../../assets/icons/upload.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { RootState } from "../../../../redux/store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateFikrlarCard } from "../../../../redux/actions/fikrlarSlice";
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import ReactStars from 'react-rating-stars-component';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
const FikrlarTahrirlash: React.FC = () => {
   const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const { fikrlarid } = useParams<{ fikrlarid: string }>();
  const dispatch = useDispatch();
  const fikrlarcard = useSelector((state: RootState) =>
    state.fikrlar.fikrlarCards.find((card) => card.id === fikrlarid)
  
  );
  const ratingChanged = (newRating: number) => {
    setList(({ ...list, rating: newRating }));
    
    console.log(newRating);
  };

  const [list, setList] = useState({
    image: fikrlarcard?.image || null,
    rating: fikrlarcard?.rating || 0,
    titleUz: fikrlarcard?.titleUz || '',
    jobUz: fikrlarcard?.jobUz || '',
    descriptionUz: fikrlarcard?.descriptionUz || '',
    titleRu: fikrlarcard?.titleRu || '',
    jobRu: fikrlarcard?.jobRu || '',
    descriptionRu: fikrlarcard?.descriptionRu || '',
    titleEn: fikrlarcard?.titleEn || '',
    jobEn: fikrlarcard?.jobEn || '',
    descriptionEn: fikrlarcard?.descriptionEn || '',
  });

  useEffect(() => {
    if (fikrlarcard) {
      setList({
        image: fikrlarcard.image || null,
        rating: fikrlarcard.rating,
        titleUz: fikrlarcard.titleUz || '',
        jobUz: fikrlarcard.jobUz || '',
        descriptionUz: fikrlarcard.descriptionUz || '',
        titleRu: fikrlarcard.titleRu || '',
        jobRu: fikrlarcard.jobRu || '',
        descriptionRu: fikrlarcard.descriptionRu || '',
        titleEn: fikrlarcard.titleEn || '',
        jobEn: fikrlarcard.jobEn || '',
        descriptionEn: fikrlarcard.descriptionEn || '',
      });
      setFileList([
        {
          uid: '-1',
          name: fikrlarcard.image ? fikrlarcard.image.split('/').pop() : '',
          status: 'done',
          url: fikrlarcard.image,
        },
      ]);
    }
  }, [fikrlarcard]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setList({ ...list, [name]: value });
  };



  const handleSave = () => {
  
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
      dispatch(updateFikrlarCard({ id:fikrlarid, ...list }));
     
      messageApi.open({
        type: 'success',
        content: "Qo'shildi",
      });
      navigate('/admin/fikrlar')
      setFileList([])
      
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
  const handleuploadFile = async (options: any) => {
    const {file} = options;
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

      const response = await axiosInstance.post("/public/upload", formData);

      setList({ ...list, image: response.data.data.fileUrl });
      setFileList([
        {
          uid: '-1',
          name: file.name,
          status: 'done',
          url: response.data.url,
        },
      ]);

    
    } catch (error) {
      console.error(error);
    }
  };

  
  
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: fikrlarcard?.image ? fikrlarcard.image.split('/').pop() : '',
      status: 'done',
      url: fikrlarcard?.image,
    },
  ]);


  const handleRemove = () => {
    setList({ ...list, image: null });
    setFileList([]);
  };



    return(<div className="w-full">
        <div className="w-full flex pt-[10px] pl-[30px] items-center justify-between pr-[30px] pb-[10px]" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E9EB' }}>
          <div className="box-border border-b border-gray-300 bg-white">
            <span className="static w-[106px] h-[32px] flex flex-row justify-start items-center p-0 text-[24px] font-inter" style={{ fontFamily: 'Inter', fontWeight: 700, }}>Tahrirlash</span>
            <div className="flex items-center">
              <Breadcrumb
                style={{ cursor: 'pointer' }}
                separator=">"
                items={[
                  {
                    title: 'Fikrlar',
                    onClick: () => navigate('/admin/fikrlar'),
                  },                
                  {
                    title: 'Tahrirlash',
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="pl-[30px] pt-[30px] pr-[30px]">
            <div className="w-full flex">
              <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600, }}>Rasm</span>
              <div className="flex flex-col justify-start items-center pt-[16px] pl-[24px] pr-[24px] pb-[16px] w-[900px] h-[126px] rounded-xl" style={{ border: '1px solid rgb(229, 233, 235)' }}>
              <Upload 
                  customRequest={handleuploadFile}
                  onRemove={handleRemove}
                  fileList={fileList}
                  maxCount={1}
                >
                
                    <Button className="w-[40px] h-[40px] flex items-center justify-center">
                      <img className="w-[17px] h-[17px]" src={Uploadimage} alt="Upload" />
                    </Button>
                 
                </Upload>
                <div className="pt-[12px]">
                  <p className="flex justify-center text-[14px]" style={{ color: 'rgb(71, 84, 103)', fontFamily: 'Inter', fontWeight: 400, }}><span className="pr-[4px]" style={{ color: 'rgb(245, 134, 52)', fontWeight: 600, }}>Click to upload</span>or drag and drop</p>
                  <h5 className="flex justify-center text-[14px] pt-[4px]" style={{ color: 'rgb(71, 84, 103)', fontFamily: 'Inter', fontWeight: 400, }}>PNG or JPG (max. 800x400px)</h5>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center pt-[24px]">
              <span  className="w-[200px] h-[40px] text-[16px] items-center flex" style={{color: 'rgb(72, 83, 91)', fontFamily: 'Inter',fontWeight: 600,}}>Reyting</span>
              <ReactStars value={list.rating} count={5} onChange={ratingChanged} size={40} activeColor="#F58634" />
              </div>
            <div className="w-full flex pt-[24px]">
              <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600, }}>Sarlavha (o'zbekcha)</span>
              <input value={list.titleUz} onChange={handleInputChange} name="titleUz" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{ border: '1px solid rgb(229, 233, 235)' }} />
            </div>
            <div className="flex pt-[24px]">
              <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600, }}>Tavsif (o'zbekcha)</span>
              <div className="w-[900px] h-[300px]">
              <ReactQuill className="custom-quill"  style={{ height: "200px" }} theme="snow" value={list.descriptionUz} onChange={(value) => setList({ ...list, descriptionUz: value })} modules={modules} />
              </div>
            </div>
          </div>
          <div className="pl-[30px] pr-[30px]">
            <div className="w-full flex pt-[24px]">
              <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600, }}>Название (русский)</span>
              <input value={list.titleRu} onChange={handleInputChange} name="titleRu" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{ border: '1px solid rgb(229, 233, 235)' }} />
            </div>
            <div className="flex pt-[24px]">
              <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600, }}>Описание (русский)</span>
              <div className="w-[900px] h-[300px]">
              <ReactQuill className="custom-quill"  style={{ height: "200px" }} theme="snow" value={list.descriptionRu} onChange={(value) => setList({ ...list, descriptionRu: value })} modules={modules} />
              </div>
            </div>
          </div>
          <div className="pl-[30px] pr-[30px]">
            <div className="w-full flex pt-[24px]">
              <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600, }}>Title (english)</span>
              <input value={list.titleEn} onChange={handleInputChange} name="titleEn" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{ border: '1px solid rgb(229, 233, 235)' }} />
            </div>
            <div className="flex pt-[24px]">
              <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600, }}>Description (english)</span>
              <div className="w-[900px] h-[300px]">
              <ReactQuill className="custom-quill"  style={{ height: "200px" }} theme="snow" value={list.descriptionEn} onChange={(value) => setList({ ...list, descriptionEn: value })} modules={modules} />
              </div>
            </div>
          </div>
          <div className="flex pt-[10px] pb-[10px] pr-[16px] w-full h-[64px] flex justify-end items-center p-[10px 16px 10px 16px]" style={{ boxShadow: "inset 0px 1px 0px 0px rgb(229, 233, 235)" }}>
          {contextHolder}
            <button onClick={() => navigate('/admin/tadbirlar/loyihalar')} className="mr-[16px] w-[160px] h-[44px] outline-none border-none rounded-md text-[14px]" style={{ cursor: 'pointer', color: 'rgb(245, 134, 52)', background: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 233, 235)', fontFamily: 'Inter', fontWeight: 500, }}>Bekor qilish</button>
            <button onClick={handleSave} className="w-[139px] h-[44px] border-none rounded-md text-[16px]" style={{ cursor: 'pointer', color: 'rgb(255, 255, 255)', background: 'rgb(245, 134, 52)', fontFamily: 'Inter', fontWeight: 500, }}>Tahrirlash</button>
          </div>
        </div>
      </div>)
}

export default FikrlarTahrirlash;
