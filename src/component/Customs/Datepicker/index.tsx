import React, { useEffect, useState } from "react";
import Calendar from "../../../assets/icons/calendar.svg";
import { AntDatePicker } from "./style";
import moment from "moment";
interface inputProps {
  value?: string | number;
  onChange?: any;
  placeholder: string;
}
const CustomDatePicker: React.FC<inputProps> = ({
  onChange,
  value,
  placeholder,
}) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [valueDate, setValueDate] = useState(value);
  const onChangeFunction = (date: any, dateString: any) => {
    onChange && onChange(date, dateString);
    setValueDate(dateString);
  };
  const disabledDate = (current: any) => {
    return current && current > moment().startOf("day");
  };
useEffect(()=>{
  setValueDate(value)
},[value])

useEffect(()=>{
  setOpenCalendar(false)
},[valueDate])
  return (
    <div
      className="w-full bg-[#F9F9F9] h-[52px] flex  justify-between items-center gap-[10px] 
						p-[16px] border border-solid border-1 border-[#E3E3E7] rounded-[12px] relative cursor-pointer"
      onClick={() => !openCalendar && setOpenCalendar(true)}
      onBlur={()=>setOpenCalendar(false)}
      tabIndex={0}
    >
      <p className="text-[#71717A] text-[16px] font-[400] ">
        {moment(valueDate).format('DD-MM-YYYY') || placeholder}
      </p>
      <AntDatePicker
        open={openCalendar}
        onChange={onChangeFunction}
        disabledDate={disabledDate}
        showToday={false}
        renderExtraFooter={() => (
          <div className="w-full flex justify-center">
            <p
              onClick={() => setOpenCalendar(false)}
              className="text-[#F58634] w-fit cursor-pointer text-[15px] font-[600] hover:underline"
            >
              Yopish
            </p>
          </div>
        )}
      />
      <img
        src={Calendar}
        alt="download"
        width={20}
        height={20}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default CustomDatePicker;
