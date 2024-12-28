import React from 'react'
import { ButtonStyle, SpanStyled } from './style';



interface UserType {
  key: string;
  image: string;
  name: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
}


interface ShaxsiyMalumotlarProps {
  user: UserType;
}

const ShaxsiyMalumotlar: React.FC<ShaxsiyMalumotlarProps> = ({user}) => {

  

  return (
    <div className='flex p-[24px] border-[1px] border-[#E5E9EB] border-solid rounded-[12px] max-w-[1017px] mx-auto mt-[30px] relative'>
      <div><img src={user.image} alt="" className='w-full h-[297px] max-w-[297px] rounded-[220px] object-cover'/></div>        
      <div className='ml-[24px]'>
        <h5 className='text-[#1A2024] text-[28px] font-[700px] leading-[34px]' style={{fontFamily: 'Inter'}}>Akbarali Khasanov Qurbonali o`g`li</h5>
        <div className='flex flex-col pt-[16px] gap-y-[12px]'>
          <div className='flex gap-[24px]'>
            <p style={{opacity: 0.5}}>Tug’ilgan yil:</p> <SpanStyled>{user.dateOfBirth}</SpanStyled>
          </div>
          <div className='flex gap-[24px]'>
            <p style={{opacity: 0.5}}>Jins: </p> <SpanStyled>{user.gender}</SpanStyled>
          </div>
          <div className='flex gap-[24px]'>
            <p style={{opacity: 0.5}}>Telefon raqam: </p> <SpanStyled>{user.phone}</SpanStyled>
          </div>
          <div className='flex gap-[24px]'>
            <p style={{opacity: 0.5}}>E-mail: -</p>
          </div>
          <div className='flex gap-[24px]'>
            <p style={{opacity: 0.5}}>Viloyat: </p>
          </div>
          <div className='flex gap-[24px]'> 
            <p style={{opacity: 0.5}}>Tuman: </p>
          </div>
          <div className='flex gap-[24px]'>
            <p style={{opacity: 0.5}}>Mahalla: </p>
          </div>
          <div className='flex gap-[24px]'>
            <p style={{opacity: 0.5}}>Ko'cha: </p>
          </div>
          <div className='flex gap-[24px]'>
            <p style={{opacity: 0.5}}>Uy: </p>
          </div>
        
        </div>
      </div>
      <div className='ml-[25px]'>
      <ButtonStyle className='absolute bottom-[24px] right-[24px] cursor-pointer'>O'chirish</ButtonStyle>
      </div>
    </div>
  )
}

export default ShaxsiyMalumotlar;
