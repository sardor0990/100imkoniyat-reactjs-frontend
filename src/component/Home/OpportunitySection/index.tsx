import React, { Suspense, useState, ChangeEvent, useEffect, FormEvent } from "react";
import Vektor from "../../../assets/icons/vector.svg";
import Vektor2 from "../../../assets/icons/Vector2.svg";
import Next from "../../../assets/icons/arrow-right.svg";
import { Button } from "../../Customs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslation } from "react-i18next";
import request from "../../../services/api/index.d";
import {  Form, Input, message, Select } from "antd";
import NogironligiBorlar from "../../../assets/imgs/nogironligi.png";
import XotinQizlar from "../../../assets/imgs/xotin-qizlar.png";
import TalimUchun from "../../../assets/imgs/talimuchun.png";
import TadbirkorlikUchun from "../../../assets/imgs/25.png";
import NumberOne from "../../../assets/imgs/1.png";
import NumberTwo from "../../../assets/imgs/2.png";
import NumberThree from "../../../assets/imgs/3.png";
import NumberFour from "../../../assets/imgs/4.png";
import NumberFive from "../../../assets/imgs/5.png";
import { useNavigate } from "react-router-dom";
import NewsBlog from "../../Customs/NewsBlog";
import { values } from "lodash";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
const { Option } = Select;



const OpportunitySection = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [news, setNews] = useState<Card[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const { t } = useTranslation();
  const [messageApi, contextHolder] = message.useMessage();
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    const fetchCards = async () => {
      try {
          const response = await request.get('base/events');
          setCards(response.data.data);
      } catch (error) {
          console.error('Error fetching events:', error);
      }
  };
    fetchCards();
    const fetchNews = async () => {
      setNewsLoading(true);
      try {
          const response = await request.get('base/news');
          setNews(response.data.data);
      } catch (error) {
          console.error('Error fetching news:', error);
      } finally {
          setNewsLoading(false);
      }
  };
    fetchNews();
  }, []);

  const onFinish = async (values: { userName: string; phoneNumber: string; title: string; comment: string }) => {
    console.log('Form values:', values); // Debug log to see form values

    try {
      await request.post('/base/call-request', {
        data: {
          userName: values.userName,
          phoneNumber: values.phoneNumber,
          title: values.title,
          comment: values.comment,
        }
      });

      messageApi.success('Your message was sent successfully');
      form.resetFields();
    } catch (error) {
      console.error('Error submitting form:', error);
      messageApi.error('There was an error submitting your request');
    }
  };

  const splineStyles = {
    width: "100%",
    height: "470px",
  };

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    form.setFieldsValue({ title: value }); // Update form field value
  };

  const options = [
    { value: "xotin-qizlar", label: "Xotin-qizlar uchun" },
    { value: "nogironlar", label: "Nogironligi bor yoshlar uchun" },
    { value: "yoshlar", label: "Yoshlar uchun" },
    { value: "ta'lim", label: "Ta'lim uchun" },
    { value: "tadbirkorlik", label: "Tadbirkorlik uchun" },
    // Add more options dynamically
  ];
  

  return (
    <div className="w-full flex flex-col items-center my-[100px]">
      <div className="w-full max-w-[1280px] flex flex-col gap-[30px] max-[1350px]:px-[30px]">
        <div className="w-full flex mb-[10px] justify-between">
          <div className="relative">
            <img
              src={Vektor}
              alt="Vektor"
              className="absolute top-[36px]
               right-[-10px] w-[180px]
                h-[12px] max-[450px]:w-[80px] max-[450px]:h-[6px] 
                max-[450px]:top-[25px] max-[450px]:right-[0px]"
            />
            <p className="text-[#161616] text-[32px] font-[600] max-[450px]:text-[20px]">
              {t("w9")}
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-[100px] px-[10px]">
          <div className="w-full max-w-[1280px] h-[370px] flex max-[1000px]:hidden cursor-pointer" onClick={() => navigate('/nogironligi-borlar-uchun')}>
            <img
              src={NogironligiBorlar}
              alt="Nogironligi borlar"
              className="w-[625px] h-[370px] rounded-tl-[18px] rounded-bl-[18px] object-cover"
            />

            <div className="bg-[#F6F6F6] w-full max-w-[625px] h-[370px] rounded-tr-[18px] rounded-br-[18px] relative">
              <h2 className="text-[32px] font-[600] pt-[50px] pr-[100px] pb-[15px] pl-[30px]">
                {t("w11")}
              </h2>
              <p className="text-[18px] font-[400] leading-[30px] opacity-[0.6] pl-[30px]">
              {t("w30")}
              </p>
              <img
                src={NumberOne}
                alt="1"
                className="absolute end-[30px] bottom-[20px]"
              />
            </div>
          </div>
          <div className="min-[1000px]:hidden flex max-w-[450px] w-full h-[500px] rounded-[26px] bg-[#fff] flex-col" onClick={() => navigate('/nogironligi-borlar-uchun')}>
            <img
              src={NogironligiBorlar}
              alt="Nogironligi borlar"
              className="w-[full] h-[280px]  object-cover rounded-tl-[16px] rounded-tr-[16px]"
            />

            <div className="bg-[#F6F6F6] w-full max-w-[625px] min-h-[226px] relative p-[15px] rounded-bl-[16px] rounded-br-[16px]">
              <h2 className="text-[16px] font-[600] mb-[10px]">
              {t("w11")}
              </h2>
              <p className="text-[14px] font-[500] leading-[20px] opacity-[0.8] ">
              {t("w30")}
              </p>
              <div className="flex w-full justify-end">
                <img
                  src={NumberOne}
                  alt="1"
                  className=" absolute bottom-[20px] right-[20px] t-[20px]"
                />
              </div>
            </div>
          </div>

          <div className="max-[1000px]:hidden w-full max-w-[1280px] h-[370px] flex cursor-pointer" onClick={() => navigate('/xotin-qizlar-uchun')}>
            <div className="bg-[#F6F6F6] w-[625px] h-[370px] rounded-tl-[18px] rounded-bl-[18px] relative">
              <h2 className="text-[32px] font-[600] pt-[50px] pr-[100px] pb-[15px] pl-[30px]">
                {t("w12")}
              </h2>
              <p className="text-[18px] font-[400] leading-[30px] opacity-[0.6] pl-[30px]">
              {t("w33")}
              </p>
              <img
                src={NumberTwo}
                alt="2"
                className="absolute start-[30px] bottom-[20px]"
              />
            </div>

            <img
              src={XotinQizlar}
              alt="Nogironligi borlar"
              className="w-[625px] h-[370px]  rounded-tr-[18px] rounded-br-[18px] object-cover"
            />
          </div>
          <div className="min-[1000px]:hidden flex max-w-[450px] w-full h-[500px] rounded-[26px] bg-[#fff] flex-col cursor-pointer" onClick={() => navigate('/xotin-qizlar-uchun')}>
            <img
              src={XotinQizlar}
              alt="Nogironligi borlar"
              className="w-[full] h-[280px]  object-cover rounded-tl-[16px] rounded-tr-[16px]"
            />

            <div className="bg-[#F6F6F6] w-full max-w-[625px] relative min-h-[226px] p-[15px] rounded-bl-[16px] rounded-br-[16px]">
              <h2 className="text-[16px] font-[600] mb-[10px]">
                {t("w12")}
              </h2>
              <p className="text-[14px] font-[500] leading-[20px] opacity-[0.8] ">
              {t("w33")}
              </p>
              <div className="flex w-full justify-end">
                <img
                  src={NumberTwo}
                  alt="1"
                  className="absolute bottom-[20px] right-[20px] t-[20px]"
                />
              </div>
            </div>
          </div>

          <div className="max-[1000px]:hidden w-full max-w-[1280px] h-[370px] flex cursor-pointer" onClick={() => navigate('/talim-uchun')}>
            <div className="bg-[#F6F6F6] w-[625px] h-[370px] rounded-tl-[18px] rounded-bl-[18px] relative">
              <h2 className="text-[32px] font-[600] pt-[50px] pr-[100px] pb-[15px] pl-[30px]">
              {t("w14")}

              </h2>
              <p className="text-[18px] font-[400] leading-[30px] opacity-[0.6] pl-[30px]">
              {t("w35")}
               
              </p>
              <img
                src={NumberThree}
                alt="4"
                className="absolute start-[30px] bottom-[20px]"
              />
            </div>

            <img
              src={TalimUchun}
              alt="Nogironligi borlar"
              className="w-[625px] h-[370px]  rounded-tr-[18px] rounded-br-[18px] object-cover"
            />
          </div>
          <div className="min-[1000px]:hidden flex max-w-[450px] w-full h-[500px] rounded-[26px] bg-[#fff] flex-col cursor-pointer" onClick={() => navigate('/talim-uchun')}>
            <img
              src={TalimUchun}
              alt="Nogironligi borlar"
              className="w-[full] h-[280px]  object-cover rounded-tl-[16px] rounded-tr-[16px]"
            />

            <div className="bg-[#F6F6F6] w-full max-w-[625px] relative min-h-[226px] p-[15px] rounded-bl-[16px] rounded-br-[16px]">
              <h2 className="text-[16px] font-[600] mb-[10px]">{t("w14")}</h2>
              <p className="text-[14px] font-[500] leading-[20px] opacity-[0.8] ">
              {t("w35")}

              </p>
              <div className="flex w-full justify-end">
                <img
                  src={NumberThree}
                  alt="1"
                  className="absolute bottom-[20px] right-[20px] t-[20px]"
                />
              </div>
            </div>
          </div>

          <div className="max-[1000px]:hidden w-full max-w-[1280px] h-[370px] flex cursor-pointer" onClick={() => navigate('/tadbirkorlik-uchun')}>
            <img
              src={TadbirkorlikUchun}
              alt="Nogironligi borlar"
              className="w-[625px] h-[370px] rounded-tl-[18px] rounded-bl-[18px] object-cover"
            />

            <div className="bg-[#F6F6F6] w-full max-w-[625px] h-[370px] rounded-tr-[18px] rounded-br-[18px] relative">
              <h2 className="text-[32px] font-[600] pt-[50px] pr-[100px] pb-[15px] pl-[30px]">
              {t("w15")}
              </h2>
              <p className="text-[18px] font-[400] leading-[30px] opacity-[0.6] pl-[30px]">
              {t("w36")}

              </p>
              <img
                src={NumberFour}
                alt="3"
                className="absolute end-[30px] bottom-[20px]"
              />
            </div>
          </div>
          <div className="min-[1000px]:hidden flex max-w-[450px] w-full h-[500px] rounded-[26px] bg-[#fff] flex-col cursor-pointer" onClick={() => navigate('/tadbirkorlik-uchun')}>
            <img
              src={TadbirkorlikUchun}
              alt="Nogironligi borlar"
              className="w-[full] h-[280px]  object-cover rounded-tl-[16px] rounded-tr-[16px]"
            />

            <div className="bg-[#F6F6F6] w-full max-w-[625px] relative min-h-[226px] p-[15px] rounded-bl-[16px] rounded-br-[16px]">
              <h2 className="text-[16px] font-[600] mb-[10px]">
              {t("w15")}
              </h2>
              <p className="text-[14px] font-[500] leading-[20px] opacity-[0.8] ">
              {t("w36")}

              </p>
              <div className="flex w-full justify-end">
                <img
                  src={NumberFour}
                  alt="1"
                  className="absolute bottom-[20px] right-[20px] t-[20px]"
                />
              </div>
            </div>
          </div>

        </div>
        
        <div className="w-full mt-[100px] flex mb-[10px] justify-between">
          <div className="relative">
            <img
              src={Vektor}
              width={180}
              height={12}
              alt="Vektor"
              className="absolute top-[36px] right-[-10px] max-[450px]:w-[80px] max-[450px]:h-[6px] 
              max-[450px]:top-[25px] max-[450px]:right-[0px]"
            />
            <p className="text-[#161616] text-[32px] font-[600] max-[450px]:text-[20px]">
              {t("w7")}
            </p>
          </div>

          <div className="flex gap-[10px] items-center cursor-pointer" onClick={() => navigate('/yangiliklar')}>
            <p className="text-[#161616] text-[14px] font-[500] ">{t("w19")}</p>
            <img src={Next} width={16} height={16} alt="Vektor" />
          </div>
        </div>

        <div className="max-[1350px]:hidden">
          <div className="w-full flex gap-[30px] flex-wrap mb-[30px] justify-between ">
            {newsLoading ? (
              Array(4).fill(null).map((_, index) => (
                <NewsBlog row item={{} as any} index={index} key={index} loading={true} />
              ))
            ) : (
              news?.slice(0, 4).map((item, index) => (
                <NewsBlog row item={item} index={index} key={index} loading={false} />
              ))
            )}
          </div>
        </div>
        <div className="w-full flex gap-[30px] items-center justify-center min-[1350px]:hidden">
          <Swiper
            // spaceBetween={20}
            slidesPerView={1}
          >
            <div className="w-full flex gap-[30px] items-center justify-center ">
              {newsLoading ? (
                Array(4).fill(null).map((_, index) => (
                  <SwiperSlide key={index}>
                    <NewsBlog item={{} as any} index={index} loading={true} />
                  </SwiperSlide>
                ))
              ) : (
                news?.slice(0, 4).map((item, index) => (
                  <SwiperSlide key={index}>
                    <NewsBlog item={item} index={index} loading={false} />
                  </SwiperSlide>
                ))
              )}
            </div>
          </Swiper>
        </div>



        <div className="w-full mt-[100px] flex mb-[10px] justify-center">
          <div className="relative">
            <img
              src={Vektor2}
              width={250}
              height={12}
              alt="Vektor"
              className="absolute top-[39px] right-[-10px] max-[450px]:w-[80px] max-[450px]:h-[6px] 
              max-[450px]:top-[25px] max-[450px]:right-[0px]"
            />
            <p className="text-[#161616] text-[32px] font-[600] max-[450px]:text-[20px]">
              {t("w21")}
            </p>
          </div>
        </div>
        
        <div className="w-full flex mb-[10px] gap-[30px] justify-center max-[1350px]:items-center  max-[1350px]:flex-col">
        {contextHolder}
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        className="w-full max-w-[625px] flex flex-col gap-[25px]"
        >
          <Form.Item
            name="userName"
            label={t("w22")}
            rules={[{ required: true, message: t("w81") }]}
          >
            <Input className="w-full h-[50px] flex items-center justify-center rounded-[12px]
                    px-[18px] py-[14px] border-[1px] border-black-border-rgba
                    placeholder-[#161616] outline-none text-[#161616] text-[14px] 
                    font-[400] text-opacity-60 bg-[#F9F9F9]" />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label={t("w60")}
            rules={[
              { required: true, message: t("w82") },
            ]}
          >
            <Input className="w-full h-[50px] flex items-center justify-center rounded-[12px]
                    px-[18px] py-[14px] border-[1px] border-black-border-rgba
                    placeholder-[#161616] outline-none text-[#161616] text-[14px] 
                    font-[400] text-opacity-60 bg-[#F9F9F9]" />
          </Form.Item>

          <Form.Item
  name="title"
  label={t("w24")}
  rules={[{ required: true, message: t("w77") }]}
>
<Select

  // placeholder={t("w77")}
  value={selectedValue}
  onChange={handleSelectChange}
  className="w-full h-[50px] flex items-center justify-center rounded-[12px]
             px-[18px] py-[14px] border-[1px] border-black-border-rgba
              focus:outline-none outline-none text-[#161616] 
             text-[14px] font-[400] text-opacity-100 bg-[#F9F9F9]"
  popupClassName="!outline-none !border-none"
  dropdownStyle={{ color: '#161616' }}

>
  {options.map((option) => (
    <Select.Option 
      key={option.value} 
      value={option.value}
      className="text-black hover:text-black active:text-black selected:text-black"
    >
      {t(option.label)}
    </Select.Option>
  ))}
</Select>
</Form.Item>

          <Form.Item
            name="comment"
            label={t("w25")}
            rules={[{ required: true, message: t("w83") }]}
          >
            <Input.TextArea rows={4} className="w-full max-w-[625px] h-[150px] flex items-center justify-center rounded-[12px]
              px-[18px] py-[14px]  border-1  border-solid border-black-border-rgba
             placeholder-[#161616] outline-none 
             text-[#161616] text-[14px] font-[400] text-opacity-60 bg-[#F9F9F9]"
 />
          </Form.Item>


            <Button type="primary" htmlType="submit" className="w-full">
              {t("w26")}
            </Button>
        </Form>
         
        </div>
        
      </div>
    </div>
  );
};

export default OpportunitySection;
