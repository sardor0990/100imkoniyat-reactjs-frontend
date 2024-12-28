import React, { ChangeEvent, FormEvent, Suspense, useEffect } from "react";
import Navbar from "../NavbarWhite";
import Footer from "../Footer";
import Arrow from "../../assets/icons/arrow-right.svg";
import vektorStep from "../../assets/icons/vektorStep.svg";
import { CardStep } from "../Customs";
import { Button } from "../Customs";
import Galary from "../../assets/icons/gallery.svg";
import Vektor2 from "../../assets/icons/Vector2.svg";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import data from "../../Tadbirkorlar.json";
import { useState } from "react";
import Item from "antd/es/list/Item";
import { CardStep as CardStepComponent, CardContainer, CardWrapper } from "./style";
import request from "../../services/api/index.d";
import {  message } from "antd";
import { useTranslation } from "react-i18next";
import styled, {keyframes} from "styled-components";
import NogironligiBorlar from "../../NogironligiBorlar.json";
import XotinQizlar from "../../Xotin-qizlar.json";
import Tadbirkorlar from "../../Tadbirkorlar2.json";
import Talim from "../../Talim2.json";


const beatShadow = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 rgba(245, 134, 52, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(245, 134, 52, 0.8);
  }
`;

// Styled button component
const HeartbeatButton = styled.button`
  background-color: #f58634;
  border: none;
  border-radius: 12px;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  animation: ${beatShadow} 3s infinite; // Apply beating shadow animation
`;

type CardStepProps = {
  item: {
    title: string;
    description: string[];
    linkToService?: string | undefined; // Allow undefined
  };
  step: number;
  totalSteps: number;
};

const dataMap: Record<string, any> = {
  nogironligiborlar: NogironligiBorlar,
  xotinqizlar: XotinQizlar,
  tadbirkorlik: Tadbirkorlar,
  talim: Talim,
};

const OpportunityById: React.FC<CardStepProps> = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const [opportunityData, setOpportunityData] = useState<any | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState<string[]>([]);
  const [linkToService, setLinkToService] = useState('');

  // Form state
  const [data, setFormData] = useState({
    userName: '',
    title: '',
    photoUrl: null,
    comment: '',
    userEmail: '',
  });

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (!category || !id) {
      console.error('Invalid category or ID');
      navigate('/not-found');
      return;
    }

    const selectedData = dataMap[category];
    if (!selectedData) {
      console.error('Invalid category');
      navigate('/not-found');
      return;
    }

    const opportunityId = parseInt(id, 10) - 1; // Adjust for zero-based index
    const foundOpportunity = selectedData.data[opportunityId];
    if (foundOpportunity) {
      setOpportunityData(foundOpportunity);

      // Set title and description based on language preference
      const language = localStorage.getItem('language') || 'uz';
      setTitle(language === 'uz' ? foundOpportunity.titleUz : language === 'ru' ? foundOpportunity.titleRu : foundOpportunity.titleEn);
      setDescription(language === 'uz' ? foundOpportunity.descriptionUz : language === 'ru' ? foundOpportunity.descriptionRu : foundOpportunity.descriptionEn);
      setLinkToService(foundOpportunity.linkToService);
    } else {
      console.error('Opportunity not found');
      navigate('/not-found');
    }
  }, [category, id, navigate]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (e.target.files[0].size > 10485760) {
        alert('File size exceeds 10MB. Please choose a smaller file.');
        e.target.value = '';
        return;
      }
      handleUploadPhoto(e.target.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value } = e.target;
    const target = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? (target.files ? target.files[0] : null) : value,
    }));
  };

  const handleUploadPhoto = async (file: any) => {
    try {
      const res = await request.post('/base/file/upload', { file }, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { fileUrl } = res?.data?.data;
      setFormData((prev) => ({
        ...prev,
        photoUrl: fileUrl,
      }));
    } catch (e) {
      console.error('Error uploading photo', e);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.userEmail)) {
      messageApi.open({
        type: 'error',
        content: 'Please enter a valid email',
      });
      return;
    }

    try {
      const res = await request.post('/base/call-request', { data });
      messageApi.open({
        type: 'success',
        content: 'Your message was sent successfully',
      });

      // Clear the form after submission
      setFormData({
        userName: '',
        title: '',
        photoUrl: null,
        comment: '',
        userEmail: '',
      });
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  if (!opportunityData) {
    return <div>Loading...</div>; // Show a loading state or an appropriate message
  }

  return (
    <div className="w-full flex flex-col items-center gap-[100px]">
      <div className="relative w-full flex flex-col bg-gradient-to-t from-opacity-60 via-transparent to-transparent backdrop-blur-10">
        <Navbar />
      </div>

      <div className="w-full max-w-[1280px] h-fit flex flex-col gap-[30px]">
        <div className="w-full flex flex-col items-start px-[10px]">
          <div className="flex gap-[10px] items-center cursor-pointer" onClick={handleGoBack}>
            <img
              src={Arrow}
              alt=""
              width={24}
              height={24}
              style={{ transform: 'rotate(-180deg)' }}
            />
            <p className="text-[#161616] text-[18px] font-[400]">{t('w56')}</p>
          </div>
          <p className="w-full max-w-[900px] text-[#161616] text-[52px] font-[800] leading-[64px] my-[40px]">
            {title}
          </p>
        </div>

        <CardContainer>
          {description.map((desc: string, index: number) => (
            <CardWrapper key={index}>
              <CardStepComponent>
                <CardStep
                  item={{
                    title,
                    description: [desc]
                  }}
                  step={index}
                  totalSteps={description.length}
                />
              </CardStepComponent>
            </CardWrapper>
          ))}

          {/* Display additional information card */}
          {linkToService && (
            <CardWrapper>
              <CardStepComponent>
                <CardStep
                  item={{
                    title: 'Additional Information',
                    description: [t('w61')],
                    linkToService, // Always show the link here
                  }}
                  step={description.length} // Use the length of description for the step number
                  totalSteps={description.length + 1}
                  isExternalLink={true}
                  />
              </CardStepComponent>
            </CardWrapper>
          )}
        </CardContainer>
      </div>
      <Footer />
    </div>
  );
};

export default OpportunityById;