import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../Navbar";
import { Button } from "../../Customs";
import Head from "../../../assets/videos/head.mp4";
import { useTranslation } from "react-i18next";
import { Modal } from "antd";
import ReactPlayer from 'react-player';
export const HeadSection: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    if(playerRef.current){
      playerRef.current.getInternalPlayer().pauseVideo();
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    if(playerRef.current){
      playerRef.current.getInternalPlayer().pauseVideo();
    }
  };


  return (
    <div className="relative w-full flex flex-col h-[860px] max-[800px]:h-[450px]
    bg-gradient-to-t from-opacity-60 via-transparent to-transparent backdrop-blur-10 ">
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(22, 22, 22, 0.60) 19.66%, rgba(22, 22, 22, 0.00) 100%)",
          backdropFilter: "blur(10px)",
          width: "100%",
          height: "100%",
        }}
        className="absolute top-0 left-0 w-full h-[860px] bg-gradient-to-t from-opacity-60 via-transparent to-transparent   backdrop-blur-10 z-20"
      ></div>

      <video
        className="absolute top-0 left-0 object-cover w-full h-[860px] max-[800px]:h-[450px] -z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={Head} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar />
      <div className="w-full flex justify-center z-20">
        <div className="w-full max-w-[1280px] z-20 max-[1300px]:px-[20px]">
          <div className="w-full max-w-[900px] ">
            <p className="text-[#fff] text-[66px] max-[800px]:mt-[40px] max-[800px]:font-[700] max-[800px]:text-[30px] max-[400px]:text-[20px] max-[800px]:leading-[42px]
             text-wrap break-words font-[800] leading-[90px] mt-[130px]">
                      {t('w1')}
            </p>
          </div>
          <p className="mark mt-[20px] mb-[30px]">
          {t('w2')}
          </p>
          <div className="w-full flex justify-start">
            <Button onClick={showModal}>{t('w4')}</Button>
          </div>
        </div>
        <Modal width={750}  footer={false}  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className="mt-[40px]">
        <ReactPlayer 
        ref={playerRef}
        url="https://youtu.be/H48KkBJy8ro"
        playing={isModalOpen}
        loop={true}
        controls={true}
        volume={0.8}
        muted={false}
        width="100%"
        height="443px"
        
      />
      </div>
      </Modal>
      </div>
    </div>
  );
};
