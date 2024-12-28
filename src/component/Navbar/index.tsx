import React, { useEffect, useState } from "react";
import Logo from "../../assets/imgs/Logo.png";
import Setting from "../../assets/icons/setting-4.svg";
import SettingBlack from "../../assets/icons/setting-4-black.svg";
import Search from "../../assets/icons/search-normal.svg";
import Global from "../../assets/icons/global.svg";
import Call from "../../assets/icons/call.svg";
import Arrow from "../../assets/icons/arrow-down.svg";
import ArrowUp from "../../assets/icons/arrow-up-orange.svg";
import Close from "../../assets/icons/close-circle.svg";

import SearchBlack from "../../assets/icons/search-normal-black.svg";
import GlobalBlack from "../../assets/icons/global-black.svg";
import CallBlack from "../../assets/icons/call-black.svg";
import ArrowBlack from "../../assets/icons/arrow-down-black.svg";
import Menu from "../../assets/icons/menu-line-horizontal 01.svg";

import { Button } from "../Customs";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import Tadbir from "./tadbir";
import Imkoniyat from "./imkoniyat";
import { AntdDrawer } from "./style";
import { useTranslation } from "react-i18next";
const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    window.location.reload();
  };
  const itemsLanguage = [
    {
      label: <p className="text-[#18181B] text-[16px] font-[500] " onClick={() => changeLang("uz")}>O’ZB</p>,
      key: "0",
    },
    {
      label: <p className="text-[#18181B] text-[16px] font-[500] " onClick={() => changeLang("ru")}>RU</p>,
      key: "1",
    },
  ];

  const [navigation, setNavigation] = useState({
    open: false,
    last: false,
    first: false,
  });
  const [open, setOpen] = useState(false);

  const CustomHeader = () => {
    return (
      <div className="full flex gap-[16px] justify-end">
       
        <img
          src={Close}
          alt="Menu"
          height={42}
          width={42}
          style={{ cursor: "pointer" }}
          onClick={() => setOpen(false)}
        />
      </div>
    );
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1300) {
        onClose();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`w-full flex flex-col items-center z-30 relative ${
        navigation.open && "bg-white"
      } `}
      tabIndex={0}
      onBlur={() =>
        setNavigation({
          ...navigation,
          open: false,
          last: false,
          first: false,
        })
      }
    >
      <div className="w-full max-w-[1280px] px-[20px] pb-[20px] border-opacity-10">
        <AntdDrawer
          placement="right"
          onClose={() => setOpen(false)}
          title={<CustomHeader />}
          open={open}
          closeIcon={false}
        >
          {/* Add navigation menu items */}
          <div className="flex flex-col gap-[20px] mb-[30px]">
            <div 
              className="flex items-center gap-[7px] cursor-pointer"
              onClick={() => {
                navigate("/barcha-imkoniyatlar");
                setOpen(false);
              }}
            >
              <p className="text-[16px] font-[500]">{t('w9')}</p>
            </div>

            <div 
              className="flex items-center gap-[7px] cursor-pointer"
              onClick={() => {
                navigate("/yangiliklar");
                setOpen(false);
              }}
            >
              <p className="text-[16px] font-[500]">{t('w7')}</p>
            </div>

            <div 
              className="flex items-center gap-[7px] cursor-pointer"
              onClick={() => {
                navigate("/biz-haqimizda");
                setOpen(false);
              }}
            >
              <p className="text-[16px] font-[500]">{t('w6')}</p>
            </div>

            <div 
              className="flex items-center gap-[7px] cursor-pointer"
              onClick={() => {
                navigate("/aloqa");
                setOpen(false);
              }}
            >
              <p className="text-[16px] font-[500]">{t('w5')}</p>
            </div>
          </div>

          {/* Language selector */}
          <div className="flex items-center gap-[10px] mb-[30px]">
            <img src={GlobalBlack} width={20} height={20} />
            <div className="flex gap-[15px]">
              <p 
                className={`text-[16px] font-[500] cursor-pointer ${localStorage.getItem('language') === 'uz' ? 'text-[#F58634]' : ''}`}
                onClick={() => changeLang("uz")}
              >
                O'ZB
              </p>
              <p 
                className={`text-[16px] font-[500] cursor-pointer ${localStorage.getItem('language') === 'ru' ? 'text-[#F58634]' : ''}`}
                onClick={() => changeLang("ru")}
              >
                RU
              </p>
            </div>
          </div>

          {/* Existing social links */}
          <div className="flex justify-center gap-[16px] mt-[30px]">
            <p className="header" style={{ cursor: "pointer" }}>
              Telegram
            </p>
            <p className="header" style={{ cursor: "pointer" }}>
              Instagram
            </p>
            <p className="header" style={{ cursor: "pointer" }}>
              Facebook
            </p>
            <p className="header" style={{ cursor: "pointer" }}>
              Linkedin
            </p>
          </div>
        </AntdDrawer>

        <div className="w-full max-w-[1280px] py-[20px] flex items-center justify-between">
          <div className="flex gap-[40px] items-center">
            <img
              src={Logo}
              width={112}
              height={60}
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
            
            {navigation.open ? (
              <div
                className="w-[500px] h-[45px] flex items-center  bg-[#F5F5F5]   rounded-[12px]
             border border-solid border-[#161616] border-opacity-10 px-[18px] py-[14px] max-[1000px]:hidden"
              >
                <div className="w-full flex gap-[10px] items-center">
                  <img src={SearchBlack} width={16} height={16} />
                  <input
                    className="w-full h-[45px] flex items-center justify-center bg-inherit  rounded-[12px]
                    px-[8px] py-[14px] placeholder-[#161616] placeholder-opacity-40 outline-none border-none text-[#161616] text-[14px] font-[500]"
                    type="text"
                    placeholder={t('w59')}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        navigate(`/imkoniyatlar?search=${e.target.value}`);
                      }
                    }}
                  />
                </div>
              </div>
            ) : (
              <div
                className="w-[500px] h-[45px] flex items-center  bg-white bg-opacity-15 rounded-[12px]
             border border-solid border-white border-opacity-60 px-[18px] py-[14px] max-[1000px]:hidden"
              >
                <div className="w-full flex gap-[10px] items-center">
                  <img src={Search} width={16} height={16} />
                  <input
                    className="w-full h-[45px] flex items-center justify-center bg-inherit rounded-[12px]
                    px-[8px] py-[14px] placeholder-white outline-none border-none text-[#fff] text-[14px] font-[500]"
                    type="text"
                    placeholder={t('w59')}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        navigate(`/imkoniyatlar?search=${e.target.value}`);
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-[30px] items-center">
            <Dropdown
              menu={{
                items: itemsLanguage,
              }}
              trigger={["click"]}
            >
              {navigation.open ? (
                <div className="flex gap-[7px] cursor-pointer">
                  <img src={GlobalBlack} width={16} height={16} />

                  <p className="text-[#161616] text-[14px] font-[500]">{localStorage.getItem('language') == 'uz' ? "O'ZB" : 'RU'}</p>
                </div>
              ) : (
                <div className="flex gap-[7px] cursor-pointer">
                  <img src={Global} width={16} height={16} />

                  <p className="text-[#fff] text-[14px] font-[500]">{localStorage.getItem('language') == 'uz' ? "O'ZB" : 'RU'}</p>
                </div>
              )}
            </Dropdown>
         

            {/* <Button onClick={() => navigate("/register")}>
            {t('w4')}
            </Button> */}
          </div>
          <div className="flex gap-[30px] items-center min-[1300px]:hidden">
            <img
              src={Search}
              width={24}
              height={24}
              className="min-[1000px]:hidden"
            />
            {/* <img src={Global} width={24} height={24} /> */}

            <div
              style={{
                border: "1px solid rgba(255, 255, 255, 0.25)",
                background: "rgba(22, 22, 22, 0.20)",
              }}
              className="w-[42px] h-[42px] flex items-center justify-center cursor-pointer rounded-[8px]"
            >
              <img
                src={Menu}
                width={32}
                height={32}
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-[40px] items-center mt-[16px] max-[1300px]:hidden">
          <div
            className="flex gap-[7px]  cursor-pointer "
            onClick={() =>
              setNavigation({
                ...navigation,
                first: !navigation.first,
                last: false,
                open: navigation.open && navigation.first ? false : true,
              })
            }
          >
            <p
              className={` ${
                navigation.first && navigation.open
                  ? "text-[#F58634]"
                  : navigation.open
                  ? "text-[#161616]"
                  : "text-[#fff]"
              } text-[14px] font-[500]`}
            >
                       {t('w9')}
            </p>
            {navigation.first && navigation.open ? (
              <img src={ArrowUp} width={16} height={16} />
            ) : navigation.open ? (
              <img src={ArrowBlack} width={16} height={16} />
            ) : (
              <img src={Arrow} width={16} height={16} />
            )}
          </div>

          <p
            onClick={() => navigate("/yangiliklar")}
            className={`${
              navigation.open ? "text-[#161616]" : "text-[#fff]"
            }  text-[14px] font-[500] cursor-pointer`}
          >
             {t('w7')}
          </p>        
          <p
            onClick={() => navigate("/biz-haqimizda")}
            className={`${
              navigation.open ? "text-[#161616]" : "text-[#fff]"
            }  text-[14px] font-[500] cursor-pointer`}
          >
            {t('w6')}
          </p>
       
          <p
            onClick={() => navigate("/aloqa")}
            className={`${
              navigation.open ? "text-[#161616]" : "text-[#fff]"
            }  text-[14px] font-[500] cursor-pointer`}
          >
            {t('w5')}
          </p>
        </div>
      </div>
      {
        <div
          className={`w-full ${navigation.open ? "h-[214px]" : "h-[0px]"} 
          ${navigation.open ? "" : "opacity-0"}             
          transition-all duration-200 bg-white absolute top-[140px] overflow-hidden
         z-30 py-[25px] flex justify-center items-center pt-[30px]`}
        >
          <div className="w-full h-[1px] absolute top-[5px] bg-black opacity-10"></div>
          {navigation.last && <Tadbir />}
          {navigation.first && <Imkoniyat />}
        </div>
      }
    </div>
  );
};

export default Navbar;
