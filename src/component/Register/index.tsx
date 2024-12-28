import React, { useState, Suspense } from "react";
import Arrow from "../../assets/icons/arrow-right-white.svg";
import User from "../../assets/icons/user-black.svg";
import Location from "../../assets/icons/location-black.svg";
import Security from "../../assets/icons/security-safe-black.svg";
import Google from "../../assets/icons/flat-color-icons_google.svg";
import OneId from "../../assets/icons/One_ID 1.svg";
import ArrowBlack from "../../assets/icons/arrow-right.svg";
import { Button, CustomInput, CustomDatePicker, Select } from "../Customs";
import { useNavigate } from "react-router-dom";
import VerificationInput from "react-verification-input";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const Spline = React.lazy(() => import("@splinetool/react-spline"));
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
          className="w-full max-w-[685px] h-[691px] rounded-[24px] flex flex-col items-center
        py-[30px] gap-[24px] border border-solid z-10 border-1 border-[#E3E3E7] mb-[20px] max-[750px]:border-none"
        >
          <p className="text-[#18181B]  text-[24px] font-[600]">
            Ro’yxatdan o’tish
          </p>
          <div className="w-full max-w-[625px] flex flex-col gap-[25px] ">
            <CustomInput placeholder="Ismingiz*" />
            <CustomInput placeholder="Familiyangiz*" />
            <CustomInput placeholder="Otangizning ismi*" />
            <CustomDatePicker placeholder="Tug’ilgan yilingiz*" />
            <Select placeholder="Jinsingiz*" />
            <p className="text-[#161616]  text-[14px] font-[400] opacity-50">
              “*” Majburiy to’ldirilishi kerak bo’lgan ma’lumotlar
            </p>
            <Button
              width={"full"}
              height={50}
              onClick={() => setCurrent((v) => v + 1)}
            >
              <div className="flex gap-[10px]">
                <p className="text-[#fff]  text-[14px] font-[500] ">
                  Keyingisi
                </p>
                <img src={Arrow} alt="" width={20} height={20} />
              </div>
            </Button>

            <div className="flex gap-[10px] items-center">
              <div className="w-full h-[1px] bg-[#161616] opacity-40"></div>
              <p className="w-[110px] text-nowrap text-[#161616]  text-[12px] font-[600] opacity-40">
                Profilingiz bormi?
              </p>
              <div className="w-full h-[1px] bg-[#161616] opacity-40"></div>
            </div>

            <div
              className="w-full h-[50px] flex items-center rounded-[12px] justify-center cursor-pointer"
              style={{ border: "1px solid rgba(22, 22, 22, 0.15)" }}
              onClick={() => navigate("/login")}
            >
              <p className="text-[#161616]  text-[14px] font-[600] ">
                Profilga kirish
              </p>
            </div>
          </div>

          <div className="w-full  flex gap-[8px] mt-[20px] items-center justify-between max-[750px]:mt-[0px]">
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
        <div
          className="w-full max-w-[685px] h-[691px] rounded-[24px] flex flex-col items-center
        py-[30px] gap-[24px] border border-solid z-10 border-1 border-[#E3E3E7] mb-[20px] max-[750px]:border-none"
        >
          <p className="text-[#18181B]  text-[24px] font-[600] ">
            Ro’yxatdan o’tish
          </p>
          <div className="w-full max-w-[625px] flex flex-col gap-[25px]">
            <Select placeholder="Viloyat*" />
            <Select placeholder="Tuman*" />
            <Select placeholder="Mahalla*" />
            <CustomInput placeholder="Ko’cha*" />
            <CustomInput placeholder="Uy*" />
            <p className="text-[#161616]  text-[14px] font-[400] opacity-50">
              “*” Majburiy to’ldirilishi kerak bo’lgan ma’lumotlar
            </p>
            <div className="flex gap-[10px] w-full">
              <div
                className="w-full h-[50px] flex items-center gap-[10px] rounded-[12px] justify-center cursor-pointer max-[750px]:w-[174px] "
                style={{ border: "1px solid rgba(22, 22, 22, 0.15)" }}
                onClick={() => setCurrent((v) => v - 1)}
              >
                <img
                  src={ArrowBlack}
                  width={20}
                  height={20}
                  className="rotate-180"
                />
                <p className="text-[#161616]  text-[14px] font-[600] ">
                  Oldingisi
                </p>
              </div>
              <Button
                height={50}
                onClick={() => setCurrent((v) => v + 1)}
                className={"w-full max-[750px]:w-[174px]"}
              >
                <div className="flex gap-[10px]">
                  <p className="text-[#fff]  text-[14px] font-[500] ">
                    Keyingisi
                  </p>
                  <img src={Arrow} alt="" width={20} height={20} />
                </div>
              </Button>
            </div>

            <div className="flex gap-[10px] items-center">
              <div className="w-full h-[1px] bg-[#161616] opacity-40"></div>
              <p className="w-[110px] text-nowrap text-[#161616]  text-[12px] font-[600] opacity-40">
                Profilingiz bormi?
              </p>
              <div className="w-full h-[1px] bg-[#161616] opacity-40"></div>
            </div>

            <div
              className="w-full h-[50px] flex items-center rounded-[12px] justify-center cursor-pointer"
              style={{ border: "1px solid rgba(22, 22, 22, 0.15)" }}
              onClick={() => navigate("/login")}
            >
              <p className="text-[#161616]  text-[14px] font-[600] ">
                Profilga kirish
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
      title: "Last",
      content: (
        <div
          className="w-full max-w-[685px] h-[535px] rounded-[24px] flex flex-col items-center
        py-[30px] gap-[24px]  border border-solid z-10 border-1 border-[#E3E3E7] max-[750px]:border-none"
        >
          <p className="text-[#18181B]  text-[24px] font-[600] max-[1000px]:text-[18px] max-[450px]:text-[14px]">
            Ro’yxatdan o’tish
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
            <p className="text-[#161616]  text-[14px] font-[400] opacity-50">
              “*” Majburiy to’ldirilishi kerak bo’lgan ma’lumotlar
            </p>
            <div className="flex gap-[10px] w-full">
              <div
                className="w-full h-[50px] flex items-center gap-[10px] rounded-[12px] justify-center cursor-pointer max-[750px]:w-[174px]"
                style={{ border: "1px solid rgba(22, 22, 22, 0.15)" }}
                onClick={() => setCurrent((v) => v - 1)}
              >
                <img
                  src={ArrowBlack}
                  width={20}
                  height={20}
                  className="rotate-180"
                />
                <p className="text-[#161616]  text-[14px] font-[600] ">
                  Oldingisi
                </p>
              </div>
              <Button
                height={50}
                onClick={() => setCurrent((v) => v + 1)}
                className={"w-full max-[750px]:w-[174px]"}
              >
                <div className="flex gap-[10px]">
                  <p className="text-[#fff]  text-[14px] font-[500] ">
                    Keyingisi
                  </p>
                  <img src={Arrow} alt="" width={20} height={20} />
                </div>
              </Button>
            </div>

            <div className="flex gap-[10px] items-center">
              <div className="w-full h-[1px] bg-[#161616] opacity-40"></div>
              <p className="w-[110px] text-nowrap text-[#161616]  text-[12px] font-[600] opacity-40">
                Profilingiz bormi?
              </p>
              <div className="w-full h-[1px] bg-[#161616] opacity-40"></div>
            </div>

            <div
              className="w-full h-[50px] flex items-center rounded-[12px] justify-center cursor-pointer"
              style={{ border: "1px solid rgba(22, 22, 22, 0.15)" }}
              onClick={() => navigate("/login")}
            >
              <p className="text-[#161616]  text-[14px] font-[600] ">
                Profilga kirish
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
      title: "Last +1 ",
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
              Profilni tasdiqlash
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
      <div className="h-full w-fit flex flex-col py-[30px] justify-start items-center ">
        {current !== 3 && (
          <div className="w-fit flex items-center mb-[30px] max-[750px]:mb-[0px]">
            <div
              className={`w-[220px] h-[56px] flex justify-center items-center gap-[10px] max-[750px]:w-[64px]
             rounded-[12px] border border-solid  border-1  bg-[#F5F5F5] 
            ${current > 0 ? "border-[#73D411]" : "border-[#F58634]"}
            ${current > 0 ? "bg-[#73D411] bg-opacity-10" : "bg-[#F5F5F5]"}
             
             `}
            >
              <img src={User} alt="" className="w-[24px] h-[24px] " />
              <p className="text-[#161616] text-[14px] font-[600] max-[750px]:hidden">
                Shaxsiy ma’lumotlar
              </p>
            </div>

            <div className="w-[40px] h-[1px] bg-[#F58634]"></div>

            <div
              className={`w-[220px] h-[56px] flex justify-center items-center gap-[10px]  max-[750px]:w-[64px]
             rounded-[12px] 
               border-1  ${
                 current == 1 && "border border-solid border-[#F58634]"
               } bg-[#F5F5F5]
            ${current > 1 && "border border-solid border-[#73D411]"}
            ${current > 1 && "bg-[#73D411] bg-opacity-10"}

               `}
            >
              <img
                src={Location}
                alt=""
                className={`w-[24px] h-[24px]  ${
                  current >= 1 ? "opacity-100" : "opacity-40"
                }`}
              />
              <p
                className={`text-[#161616] text-[14px] font-[600] max-[750px]:hidden  ${
                  current >= 1 ? "opacity-100" : "opacity-40"
                }`}
              >
                Yashash manzil
              </p>
            </div>

            <div className="w-[40px] h-[1px] bg-[#F58634]"></div>

            <div
              className={`w-[220px] h-[56px] flex justify-center items-center gap-[10px] max-[750px]:w-[64px]
             rounded-[12px]   border-1 ${
               current > 1 && "border border-solid border-[#F58634]"
             } bg-[#F5F5F5] `}
            >
              <img
                src={Security}
                alt=""
                className={`w-[24px] h-[24px]  ${
                  current >= 1 ? "opacity-100" : "opacity-40"
                }`}
              />
              <p
                className={`text-[#161616] text-[14px] font-[600] max-[750px]:hidden ${
                  current >= 1 ? "opacity-100" : "opacity-40"
                }`}
              >
                Login va parol
              </p>
            </div>
          </div>
        )}

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

export default Register;
