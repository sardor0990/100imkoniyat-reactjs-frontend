import { Breadcrumb, Button, message, Upload, UploadFile } from "antd";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../redux/store/store";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Uploadimage from "../../../../assets/icons/upload.svg";
import 'react-quill/dist/quill.snow.css';
import { updateImkoniyat } from "../../../../redux/actions/ImkoniyatlarSlice";

const Imkoniyatlaredit: React.FC = () => {
  const { imkoniyatid } = useParams<{ imkoniyatid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ]
  };

  const imkoniyatcard = useSelector((state: RootState) =>
    state.imkoniyatlar.items.find((card) => card.id === imkoniyatid)
  );

  const [form, setForm] = useState({
    image: null,
    titleUz: '',
    descriptionUz: '',
    titleRu: '',
    descriptionRu: '',
    titleEn: '',
    descriptionEn: '',
  });

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    if (imkoniyatcard) {
      setForm({
        image: imkoniyatcard.image || null,
        titleUz: imkoniyatcard.titleUz || '',
        descriptionUz: imkoniyatcard.descriptionUz || '',
        titleRu: imkoniyatcard.titleRu || '',
        descriptionRu: imkoniyatcard.descriptionRu || '',
        titleEn: imkoniyatcard.titleEn || '',
        descriptionEn: imkoniyatcard.descriptionEn || '',
      });
      setFileList([
        {
          uid: '-1',
          name: imkoniyatcard.image ? imkoniyatcard.image.split('/').pop() : '',
          status: 'done',
          url: imkoniyatcard.image,
        },
      ]);
    }
  }, [imkoniyatcard]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    if (
      form.image &&
      form.titleUz &&
      form.descriptionUz &&
      form.titleRu &&
      form.descriptionRu &&
      form.titleEn &&
      form.descriptionEn
    ) {
      dispatch(updateImkoniyat({ id: imkoniyatid, ...form }));

      messageApi.open({
        type: 'success',
        content: "Qo'shildi",
      });
      navigate('/admin/imkoniyatlar');
      setFileList([]);
      setForm({
        image: null,
        titleUz: '',
        descriptionUz: '',
        titleRu: '',
        descriptionRu: '',
        titleEn: '',
        descriptionEn: '',
      });
    } else {
      messageApi.open({
        type: 'warning',
        content: 'Please fill all fields',
      });
    }
  };

  const handleuploadFile = async (options: any) => {
    const { file } = options;
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

      setForm({ ...form, image: response.data.data.fileUrl });
      setFileList([{
        uid: '-1',
        name: file.name,
        status: 'done',
        url: response.data.data.fileUrl,
      }]);

    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = () => {
    setForm({ ...form, image: null });
    setFileList([]);
  };

  return (
    <div className="w-full">
      <div className="w-full flex pt-[10px] pl-[30px] items-center justify-between pr-[30px] pb-[10px]" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E9EB' }}>
        <div className="box-border border-b border-gray-300 bg-white">
          <span className="static w-[106px] h-[32px] flex flex-row justify-start items-center p-0 text-[24px] font-inter" style={{ fontFamily: 'Inter', fontWeight: 700, }}>Tahrirlash</span>
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
          <div className="w-full flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600, }}>Sarlavha (o'zbekcha)</span>
            <input value={form.titleUz} onChange={handleInputChange} name="titleUz" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{ border: '1px solid rgb(229, 233, 235)' }} />
          </div>
          <div className="flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600, }}>Tavsif (o'zbekcha)</span>
            <div className="w-[900px] h-[300px]">
              <ReactQuill className="custom-quill" style={{ height: "200px" }} theme="snow" value={form.descriptionUz} onChange={(value) => setForm({ ...form, descriptionUz: value })} modules={modules} />
            </div>
          </div>
        </div>
        <div className="pl-[30px] pr-[30px]">
          <div className="w-full flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600, }}>Название (русский)</span>
            <input value={form.titleRu} onChange={handleInputChange} name="titleRu" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{ border: '1px solid rgb(229, 233, 235)' }} />
          </div>
          <div className="flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600, }}>Описание (русский)</span>
            <div className="w-[900px] h-[300px]">
              <ReactQuill className="custom-quill" style={{ height: "200px" }} theme="snow" value={form.descriptionRu} onChange={(value) => setForm({ ...form, descriptionRu: value })} modules={modules} />
            </div>
          </div>
        </div>
        <div className="pl-[30px] pr-[30px]">
          <div className="w-full flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600, }}>Title (english)</span>
            <input value={form.titleEn} onChange={handleInputChange} name="titleEn" className="w-[900px] h-[52px] pl-[16px] border-none outline-none rounded-xl" style={{ border: '1px solid rgb(229, 233, 235)' }} />
          </div>
          <div className="flex pt-[24px]">
            <span className="w-[200px] h-[40px] text-[16px] items-center flex" style={{ color: 'rgb(72, 83, 91)', fontFamily: 'Inter', fontWeight: 600, }}>Description (english)</span>
            <div className="w-[900px] h-[300px]">
              <ReactQuill className="custom-quill" style={{ height: "200px" }} theme="snow" value={form.descriptionEn} onChange={(value) => setForm({ ...form, descriptionEn: value })} modules={modules} />
            </div>
          </div>
        </div>
        <div className="flex pt-[10px] pb-[10px] pr-[16px] w-full h-[64px] flex justify-end items-center p-[10px 16px 10px 16px]" style={{ boxShadow: "inset 0px 1px 0px 0px rgb(229, 233, 235)" }}>
          {contextHolder}
          <button onClick={() => navigate('/admin/imkoniyatlar')} className="mr-[16px] w-[160px] h-[44px] outline-none border-none rounded-md text-[14px]" style={{ cursor: 'pointer', color: 'rgb(245, 134, 52)', background: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 233, 235)', fontFamily: 'Inter', fontWeight: 500, }}>Bekor qilish</button>
          <button onClick={handleSave} className="w-[139px] h-[44px] border-none rounded-md text-[16px]" style={{ cursor: 'pointer', color: 'rgb(255, 255, 255)', background: 'rgb(245, 134, 52)', fontFamily: 'Inter', fontWeight: 500, }}>Tahrirlash</button>
        </div>
      </div>
    </div>
  );
};

export default Imkoniyatlaredit;