import { Breadcrumb } from 'antd';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { TitleStyle } from './style';
import { Border } from '../style';
import ShaxsiyMalumotlar from './ShaxsiyMalumotlar';
import TakliflarFoydalanuvchilar from './TakliflarFoydalanuvchilar';
import MurojaatlarFoydalanuvchilar from './MurojaatlarFoydalanuvchilar';




const FoydalanuvchilarDetail: React.FC = () => {
  const location = useLocation();
  const { user } = location.state || {};
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tab1');
  

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };



  return (
    <div>
      <div className='pl-[30px] pt-[8px] pb-[8px]'>
      <TitleStyle>{user.name}</TitleStyle>

            <Breadcrumb
              style={{ cursor: 'pointer' }}
              separator=">"
              items={[
                {
                  title: 'Foydalanuvchilar',
                  onClick: () => navigate('/admin/foydalanuvchilar'),
                },
                {
                  title: user.name,
                },
              ]}
            />
        </div>

        <Border/>
      <div>

      <div className="flex mt-6 ml-20 mb-6">
        <button
          onClick={() => handleTabChange('tab1')}
          style={{
            padding: '4px 8px',
            marginRight: '16px',
            backgroundColor: activeTab === 'tab1' ? 'rgba(245, 134, 52, 0.15)' : '#fff',
            color: activeTab === 'tab1' ? '#F58634' : '#6E7C87',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Shaxsiy ma'lumotlar
        </button>
        <button
          onClick={() => handleTabChange('tab2')}
          style={{
            padding: '4px 8px',
            marginRight: '16px',
            backgroundColor: activeTab === 'tab2' ? 'rgba(245, 134, 52, 0.15)' : '#fff',
            color: activeTab === 'tab2' ? '#F58634' : '#6E7C87',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Takliflar
        </button>
        <button
          onClick={() => handleTabChange('tab3')}
          style={{
            padding: '4px 8px',
            marginRight: '16px',
            backgroundColor: activeTab === 'tab3' ? 'rgba(245, 134, 52, 0.15)' : '#fff',
            color: activeTab === 'tab3' ? '#F58634' : '#6E7C87',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Murojaatlar
        </button>
      </div>

      <Border/>

      {/* Content */}
      <div>
        {activeTab === 'tab1' && <ShaxsiyMalumotlar user={user}/>}
        {activeTab === 'tab2' && <TakliflarFoydalanuvchilar/>}
        {activeTab === 'tab3' && <MurojaatlarFoydalanuvchilar/>}
      </div>
    </div>        
    </div>
  )
}

export default FoydalanuvchilarDetail
