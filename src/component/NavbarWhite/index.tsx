import React, { useState, useEffect } from "react";
import Logo from "../../assets/imgs/Logo.png";
import Setting from "../../assets/icons/setting-4-black.svg";
import Search from "../../assets/icons/search-normal-2.svg";
import Global from "../../assets/icons/global-2.svg";
import Call from "../../assets/icons/call-black.svg";
import Arrow from "../../assets/icons/arrow-down-black.svg";
import ArrowUp from "../../assets/icons/arrow-up-orange.svg";
import { Button } from "../Customs";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import Tadbir from "../Navbar/tadbir";
import Imkoniyat from "../Navbar/imkoniyat";
import Close from "../../assets/icons/close-circle.svg";
import CallBlack from "../../assets/icons/call-black.svg";
import { AntdDrawer } from "../Navbar/style";
import Menu from "../../assets/icons/menu-line-horizontal 01-2.svg";
import GlobalBlack from "../../assets/icons/global-black.svg";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
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
        })
      }
    >
      <AntdDrawer
        placement="right"
        onClose={() => setOpen(false)}
        title={<CustomHeader />}
        open={open}
        closeIcon={false}
      >
        {/* Add menu items before social links */}
        <div className="flex flex-col gap-[20px] mb-[30px]">
          <p 
            className="text-[#161616] text-[16px] font-[500] cursor-pointer"
            onClick={() => {
              navigate("/imkoniyatlar");
              setOpen(false);
            }}
          >
            {t('w9')}
          </p>
          <p 
            className="text-[#161616] text-[16px] font-[500] cursor-pointer"
            onClick={() => {
              navigate("/yangiliklar");
              setOpen(false);
            }}
          >
            {t('w7')}
          </p>
          <p 
            className="text-[#161616] text-[16px] font-[500] cursor-pointer"
            onClick={() => {
              navigate("/biz-haqimizda");
              setOpen(false);
            }}
          >
            {t('w6')}
          </p>
          <p 
            className="text-[#161616] text-[16px] font-[500] cursor-pointer"
            onClick={() => {
              navigate("/aloqa");
              setOpen(false);
            }}
          >
            {t('w5')}
          </p>
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

      <div
        className="w-full max-w-[1280px]  px-[20px]"
        style={{
          borderBottom: navigation.open
            ? "1px solid rgba(22, 22, 22, 0.1)"
            : undefined,
        }}
      >
        <div className="w-full max-w-[1280px] py-[20px] flex items-center justify-between">
          <div className="flex gap-[10px] items-center">
            <img
              src={Logo}
              width={112}
              height={60}
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />

            <div
              className="w-[500px] h-[45px] flex items-center  bg-[#F5F5F5]   rounded-[12px] 
             border border-solid border-[#161616] border-opacity-10 px-[18px] py-[14px] max-[1000px]:hidden ml-[20px]"
            >
              <div className="w-full flex gap-[10px] items-center">
                <img src={Search} width={16} height={16} />
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
          </div>
          <div className="flex gap-[30px] items-center ml-[20px] max-[1300px]:hidden">
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

                  <p className="text-[#161616] text-[14px] font-[500]">{localStorage.getItem('language') == 'uz' ? "O'ZB" : 'RU'}</p>
                </div>
              )}
            </Dropdown>
            {/* <div className="flex gap-[10px] items-center">
              <img src={Call} width={16} height={16} />
              <p className="text-[#161616] text-[14px] font-[500]">
                +998931234567
              </p>
            </div> */}
            {/* <Button onClick={() => navigate("/register")}>
              Ro’yxatdan o’tish
            </Button> */}
          </div>
          <div className=" flex gap-[30px] items-center min-[1300px]:hidden ">
            <img
              src={Search}
              width={24}
              height={24}
              className="min-[1000px]:hidden"
            />
            <img src={Global} width={24} height={24} />

            <div
              style={{
                border: "1px solid rgba(255, 255, 255, 0.25)",
                background: "#F4F4F4",
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

        {/* section */}
        <div className="flex gap-[40px] items-center mt-[16px] max-[1300px]:hidden">
          <div
            onClick={() =>
              setNavigation({
                ...navigation,
                last: false,
                open: true,
              })
            }
            className="flex gap-[7px]  cursor-pointer"
          >
            <p
              className={` ${
                !navigation.last && navigation.open
                  ? "text-[#F58634]"
                  : "text-[#161616]"
              } text-[14px] font-[500]`}
            >
              {t('w9')}
            </p>
            {!navigation.last && navigation.open ? (
              <img src={ArrowUp} width={16} height={16} />
            ) : (
              <img src={Arrow} width={16} height={16} />
            )}
          </div>

          <p
            onClick={() => navigate("/yangiliklar")}
            className="text-[#161616] text-[14px] font-[500] cursor-pointer"
          >
            {t('w7')}
          </p>
          <p
            onClick={() => navigate("/biz-haqimizda")}
            className="text-[#161616] text-[14px] font-[500] cursor-pointer"
          >
           {t('w6')}
          </p>
          <p
            onClick={() => navigate("/aloqa")}
            className="text-[#161616] text-[14px] font-[500] cursor-pointer"
          >
            {t('w5')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
