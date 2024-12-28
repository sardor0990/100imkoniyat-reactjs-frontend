import React from "react";
import Navbar from "../NavbarWhite";
import Footer from "../Footer";
import Loc from "../../assets/icons/location-orange.svg";
import Telegram from "../../assets/icons/telegram-orange.svg";
import Mail from "../../assets/icons/sms-orange.svg";
import Linkedin from "../../assets/icons/linkedin-orange.svg";
import Instagram from "../../assets/icons/instagram-orange.svg";
import Facebook from "../../assets/icons/facebook-orange.svg";
import Call from "../../assets/icons/call-orange.svg";
import { useTranslation } from "react-i18next";
import Map from "./map";
const ForGirls: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full flex flex-col items-center gap-[100px] max-[1400px]:gap-[30px]">
      <div className="relative w-full flex flex-col  bg-gradient-to-t from-opacity-60 via-transparent to-transparent backdrop-blur-10 ">
        <Navbar />
      </div>
      <div
        className="w-full max-w-[1366px] h-[743px] flex border border-solid z-10 border-1 border-[#E3E3E7]  mt-[10px] mb-[20px] 
			max-[1400px]:w-[90%] max-[1400px]:flex-col max-[1400px]:h-[843px] "
      >
        <div
          className="w-[50%] h-full justify-center flex flex-col gap-[40px] p-[80px] max-[1400px]:w-[100%] max-[1400px]:h-fit
				 max-[1400px]:px-[24px] max-[1400px]:py-[44px] max-[1400px]:gap-[24px]"
        >
          <div className="flex gap-[16px] items-center">
            <>
            <a
                href="https://maps.app.goo.gl/NdGpx8A53wzSDxES6"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img
                src={Loc}
                alt="location"
                width={32}
                height={32}
                className="max-[1400px]:w-[24px]"
              />
              </a>
              <p className="text-[#18181B]  text-[20px] font-[600] max-[1400px]:text-[18px] max-[450px]:text-[14px]">
              {t("w69")}
              </p>
            </>
          </div>
          <div className="flex gap-[16px] items-center">
            <>
            <a
                href="tel:+998712899999"
                className="cursor-pointer"
              >
              <img
                src={Call}
                alt="location"
                width={32}
                height={32}
                className="max-[1400px]:w-[24px]"
              />
              </a>
              <p className="text-[#18181B]  text-[20px] font-[600] max-[1400px]:text-[18px] max-[450px]:text-[14px]">
                +998712899999
              </p>
            </>
          </div>
          <div className="flex gap-[16px] items-center">
            <img
              src={Mail}
              alt="location"
              width={32}
              height={32}
              className="max-[1400px]:w-[24px]"
            />

            <a
              href={`mailto:100imkoniyat@email.com`}
              target="_blank"
              className="text-[#18181B]  no-underline text-[20px] font-[600] max-[1400px]:text-[18px] max-[450px]:text-[14px]"
            >
              info@inha.uz
            </a>
          </div>
          {/* <div className="flex gap-[16px] items-center">
            <img
              src={Linkedin}
              alt="location"
              width={32}
              height={32}
              className="max-[1400px]:w-[24px]"
            />
            <a
              href={"https://www.linkedin.com/"}
              target="_blank"
              className="text-[#18181B] no-underline text-[20px] font-[600] max-[1400px]:text-[18px] max-[450px]:text-[14px]"
            >
              Linkedin
            </a>
          </div>
          <div className="flex gap-[16px] items-center">
            <img
              src={Telegram}
              alt="location"
              width={32}
              height={32}
              className="max-[1400px]:w-[24px]"
            />
            <a
              href={"https://t.me/mitcuz"}
              target="_blank"
              className="text-[#18181B] no-underline text-[20px] font-[600] max-[1400px]:text-[18px] max-[450px]:text-[14px]"
            >
              Telegram
            </a>
          </div>
          <div className="flex gap-[16px] items-center">
            <img
              src={Instagram}
              alt="location"
              width={32}
              height={32}
              className="max-[1400px]:w-[24px]"
            />
            <a
              href={"https://www.instagram.com/"}
              target="_blank"
              className="text-[#18181B] no-underline text-[20px] font-[600] max-[1400px]:text-[18px] max-[450px]:text-[14px]"
            >
              Instagram
            </a>
          </div>
          <div className="flex gap-[16px] items-center">
            <img
              src={Facebook}
              alt="location"
              width={32}
              height={32}
              className="max-[1400px]:w-[24px]"
            />
            <a
              href={"https://www.facebook.com/"}
              target="_blank"
              className="text-[#18181B] no-underline text-[20px] font-[600] max-[1400px]:text-[18px] max-[450px]:text-[14px]"
            >
              Facebook
            </a>
          </div> */}
        </div>
        <div className="w-[50%] h-full max-[1400px]:w-[100%] max-[1400px]:h-[50%] ">
          <Map />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ForGirls;
