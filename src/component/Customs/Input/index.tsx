import React, { ChangeEvent, useState } from "react";
import { EyeFilled } from "@ant-design/icons";
import { EyeInvisibleFilled } from "@ant-design/icons";

interface InputProps {
  value?: string | number;
  placeholder?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  password?: boolean;
  name?: string;
}

const CustomInput: React.FC<InputProps> = (prop) => {
  const [val, setVal] = useState(prop.value);
  const [type, setType] = useState("password");
  const onChangeFunction: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    prop.onChange && prop.onChange(e);
    setVal(e?.target?.value);
  };
  return (
    <div className="w-full relative">
      <input
        className={`w-full h-[50px] flex items-center justify-center  rounded-[12px]
              px-[18px] py-[14px]  border-[1px] ${
                prop.error
                  ? "border-red-border-rgba"
                  : "border-black-border-rgba"
              }
              placeholder-[#161616] outline-none  ${
                prop.error ? "bg-red-bg-rgba" : "bg-[#F9F9F9]"
              }
              text-[#161616] text-[14px] font-[400] `}
        type={prop.password ? type : prop.type || "text"}
        placeholder={prop.placeholder || "Ismingiz"}
        onChange={onChangeFunction}
        value={prop.value}
        name={prop.name}
      />
      {prop.password &&
        (type === "password" ? (
          <EyeInvisibleFilled
            onClick={() => setType("text")}
            className="absolute top-[18px] right-[18px] cursor-pointer opacity-50"
          />
        ) : (
          <EyeFilled
            onClick={() => setType("password")}
            className="absolute top-[18px] right-[18px] cursor-pointer opacity-50"
          />
        ))}
      {prop.error && (
        <p className="text-[#FF4D4D]  text-[12px] font-[500] absolute bottom-[-18px]">
          {prop.error}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
