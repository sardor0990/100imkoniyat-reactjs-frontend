import { useEffect, useState } from "react";
import { AdminData } from "../../../utils/admin";
import Logo from "../../../assets/icons/Logo.svg";
import Notification from "../../../assets/icons/notification.svg";
import User from "../../../assets/imgs/user-test.png";
import { Wrapper } from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { message, Modal } from "antd";
import { useTranslation } from "react-i18next";

const View = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
const {t}=useTranslation()
  // State to keep track of the active path
  const [activePath, setActivePath] = useState(pathname);

  const handleNavigation = (path:string) => {
    setActivePath(path);
    navigate(path);
  };

  useEffect(() => {
    setActivePath(pathname);

    if(pathname === '/admin'){
      navigate('/admin/tadbirlar');
    }
    
  }, [pathname, navigate]);
  const handleLogout = () => {
    Modal.confirm({
      title: t('w71'),
      content: t('w72'),
      okText:t('w76'),
      cancelText:t('w75'),
      onOk: () => {
        localStorage.removeItem('token');
        message.success(t('w73'));
        navigate('/admin-login');
      },
      onCancel: () => {
        message.info(t('w74'));
      }
    });
  };

  return (
    <div className="w-full h-full flex min-h-screen">
      <div className="max-w-[320px] w-full min-h-screen " 
          style={{ borderRight: "1px solid #E5E9EB" }}
      
      >
        <div
          className="w-full h-[64px] flex items-center justify-between px-[16px]"
          style={{ borderRight: "1px solid #E5E9EB", borderBottom: "1px solid #E5E9EB" }}
        >
          <img src={Logo} alt="Logo" className="w-[64px] h-[32px] cursor-pointer" onClick={() => navigate('/')} />
          <div
            className="flex items-center justify-center w-[30px] h-[30px] rounded-[4px]"
            style={{ background: "rgba(10, 15, 41, 0.04)" }}
          >
            <img src={Notification} alt="Notification" className="w-[22px] h-[22px] cursor-pointer" />
          </div>
        </div>

        <div
          className="w-full min-h-screen flex flex-col gap-[15px] p-[16px]"
        >
          
          {AdminData?.filter(v => !v.hidden).map(v => (
            <Wrapper
              key={v.path}
              onClick={() => handleNavigation(v.path)}
              active={pathname.startsWith(v.path)}
            >
              <img src={v.icon} alt="icon" className="w-[20px] h-[20px] mr-[10px] ml-[10px]" style={{ filter: pathname.startsWith(v.path) ? 'invert(100%) brightness(100%)' : 'none' }} />
              {v.title}
            </Wrapper>
          ))}
          <Wrapper
           onClick={handleLogout} // Use the handleLogout function here
           active={false}
          >
            <img src={Logo} alt="Logout Icon" className="w-[20px] h-[20px] mr-[10px] ml-[10px]" />
            Chiqish
          </Wrapper>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="w-full h-[64px] flex items-center justify-end px-[36px]" style={{ borderBottom: "1px solid #E5E9EB" }}>
          <img src={User} alt="User" className="w-[32px] h-[32px] rounded-[50%] cursor-pointer"  />
        </div>

        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default View;
