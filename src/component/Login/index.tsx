import React, { useState, Suspense } from "react";
import Arrow from "../../assets/icons/arrow-right-white.svg";
import Google from "../../assets/icons/flat-color-icons_google.svg";
import OneId from "../../assets/icons/One_ID 1.svg";
import ArrowBlack from "../../assets/icons/arrow-right.svg";
import { useNavigate } from "react-router-dom";
import VerificationInput from "react-verification-input";

import { Button, CustomInput, Select } from "../Customs";
const Login: React.FC = () => {
  const Spline = React.lazy(() => import("@splinetool/react-spline"));
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const splineStyles = {
    width: "100%",
    height: "100%",
  };

  const steps = [
    {
      title: "First",
      content: (
        <div
          className="w-full max-w-[685px] h-[535px] rounded-[24px] flex flex-col items-center
        py-[30px] gap-[24px]  border border-solid z-10 border-1 border-[#E3E3E7] max-[750px]:border-none"
        >
          <p className="text-[#18181B]  text-[24px] font-[600]">Kirish</p>
          <div className="w-full max-w-[625px] flex flex-col gap-[25px]">
            <div className="flex items-center gap-[5px]">
              <div className="max-[750px]:hidden">
                <Select
                  options={[
                    { value: "Telefon raqam", label: "Telefon raqam" },
                    { value: "Email", label: "Email" },
                  ]}
                  width="210px"
                  placeholder="Telefon raqam"
                />
              </div>
              <div className="min-[750px]:hidden">
                <Select
                  options={[
                    { value: "Telefon raqam", label: "Telefon raqam" },
                    { value: "Email", label: "Email" },
                  ]}
                  width="150px"
                  placeholder="Telefon raqam"
                />
              </div>
              <div className="w-full">
                <CustomInput placeholder="+998" />
              </div>
            </div>

            <CustomInput placeholder="Parol*" password />
            <CustomInput placeholder="Parolni qayta kiriting*" password />
            <p
              onClick={() => setCurrent((v) => v + 1)}
              className="text-[#161616]  text-end cursor-pointer text-[14px] font-[400] opacity-50"
            >
              Parolni unutdingizmi?
            </p>
            <div className="flex gap-[10px] w-full">
              <Button
                style={{ width: "100%" }}
                height={50}
                // onClick={() => setCurrent((v) => v + 1)}
              >
                <div className="flex gap-[10px]">
                  <p className="text-[#fff]  text-[14px] font-[500] ">
                    Profilga kirish
                  </p>
                  <img src={Arrow} alt="" width={20} height={20} />
                </div>
              </Button>
            </div>

            <div className="flex gap-[10px] items-center">
              <div className="w-full h-[1px] bg-[#161616] opacity-40"></div>
              <p className="w-[110px] text-nowrap text-[#161616]  text-[12px] font-[600] opacity-40">
                Profilingiz yo’qmi?
              </p>
              <div className="w-full h-[1px] bg-[#161616] opacity-40"></div>
            </div>

            <div
              className="w-full h-[50px] flex items-center rounded-[12px] justify-center cursor-pointer"
              style={{ border: "1px solid rgba(22, 22, 22, 0.15)" }}
              onClick={() => navigate("/register")}
            >
              <p className="text-[#161616]  text-[14px] font-[600] ">
                Ro’yxatdan o’tish
              </p>
            </div>
          </div>

          <div className="w-full  flex gap-[8px] mt-[20px] max-[750px]:mt-[0px] items-center justify-between">
            <div
              className="w-[340px] h-[50px] rounded-[12px] flex items-center justify-center max-[750px]:w-[174px]
            border border-solid  border-1 border-[#E3E3E7] cursor-pointer gap-[10px]"
            >
              <img src={Google} alt="" className="w-[24px] h-[24px]" />
              <p className="text-[#161616]  text-[13px] font-[600] ">Google</p>
            </div>

            <div
              className="w-[340px] h-[50px] rounded-[12px] flex items-center justify-center max-[750px]:w-[174px]
             bg-[#4825C2] cursor-pointer"
            >
              <img src={OneId} alt="" className="w-[64px] h-[20px]" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Second",
      content: (
        <div className="flex flex-col gap-[20px] mt-[100px] max-[400px]:mt-[0px]">
          <div
            className="flex gap-[10px] cursor-pointer px-[10px]"
            onClick={() => setCurrent((v) => v - 1)}
          >
            <img
              src={ArrowBlack}
              width={20}
              height={20}
              className="rotate-180"
            />
            <p className="text-[#161616]  text-[14px] font-[600] ">
              Ortga qaytish
            </p>
          </div>

          <div
            className="w-full max-w-[685px] h-[300px] px-[30px]  rounded-[24px] flex flex-col items-center  max-[400px]:mt-[100px]
        py-[30px] gap-[24px]  border border-solid z-10 border-1 border-[#E3E3E7] max-[750px]:border-none"
          >
            <p className="text-[#18181B] text-[24px] font-[600] ">
              Parolni qayta o’rnatish
            </p>
            <p className="text-[#161616]  text-start text-[14px] font-[400] opacity-50">
              Parolni qayta o’rnatish bo’yicha ko’rsatmalarni jo’natishimiz
              uchun Telefon raqamingiz yoki E-mailingizni kiriting
            </p>
            <div className="w-full max-w-[625px] flex flex-col gap-[25px]">
              <div className="flex items-center gap-[5px]">
                <div className="max-[750px]:hidden">
                  <Select
                    options={[
                      { value: "Telefon raqam", label: "Telefon raqam" },
                      { value: "Email", label: "Email" },
                    ]}
                    width="210px"
                    placeholder="Telefon raqam"
                  />
                </div>
                <div className="min-[750px]:hidden">
                  <Select
                    options={[
                      { value: "Telefon raqam", label: "Telefon raqam" },
                      { value: "Email", label: "Email" },
                    ]}
                    width="120px"
                    placeholder="Telefon raqam"
                  />
                </div>
                <div className="w-full">
                  <CustomInput placeholder="+998" />
                </div>
              </div>

              <div className="flex gap-[10px] w-full">
                <Button
                  style={{ width: "100%" }}
                  height={50}
                  onClick={() => setCurrent((v) => v + 1)}
                >
                  <div className="flex gap-[10px]">
                    <p className="text-[#fff]  text-[14px] font-[500] ">
                      Ro’yxatdan o’tish
                    </p>
                    <img src={Arrow} alt="" width={20} height={20} />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Last",
      content: (
        <div className="flex flex-col gap-[20px] mt-[200px] max-[400px]:mt-[0px]">
          <div
            className="flex gap-[10px] cursor-pointer"
            onClick={() => setCurrent((v) => v - 1)}
          >
            <img
              src={ArrowBlack}
              width={20}
              height={20}
              className="rotate-180"
            />
            <p className="text-[#161616]  text-[14px] font-[600] ">
              Ortga qaytish
            </p>
          </div>

          <div
            className="w-[685px] h-[237px] rounded-[24px]  flex flex-col items-center max-[700px]:w-full max-[400px]:mt-[100px]
        py-[30px] gap-[24px]  border border-solid z-10 border-1 border-[#E3E3E7] max-[700px]:border-none"
          >
            <p className="text-[#18181B]  text-[24px] font-[600] ">
              Parolni qayta o’rnatish
            </p>
            <p className="text-[#161616]  text-[14px] font-[400] opacity-50">
              **1216 raqamingizga yuborilgan kodni kiriting
            </p>
            <div className="w-full max-w-[310px]">
              <VerificationInput
                length={5}
                classNames={{
                  container: "container",
                  character: "character",
                  characterInactive: "character--inactive",
                  characterSelected: "character--selected",
                  characterFilled: "character--filled",
                }}
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full mb-[40px] flex  justify-center items-start gap-[100px]">
      <div className="h-full w-fit flex flex-col py-[30px] justify-start items-center">
        <div className="w-full flex justify-center">
          {steps[current].content}
        </div>
      </div>
      <div className="w-[368px] h-[830px] max-[1250px]:hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline
            scene="https://prod.spline.design/6QcEyo9gFJRmfC7M/scene.splinecode"
            style={splineStyles}
            onLoad={(splineApp) => splineApp.setZoom(0.8)}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Login;
