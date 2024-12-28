import React from "react";
import { ReactSelect } from "./style";
interface Option {
  value: string;
  label: string;
}
interface Props {
  value?: string;
  options?: Option[];
  styles?: any;
  placeholder?: string;
  width?: string;
}

const CustomSelect: React.FC<Props> = (props) => {
  const customStyles = {
    control: (baseStyles: any, state: any) => ({
      ...baseStyles,
      height: "52px",
      width: props.width || "100%",
      cursor: "pointer",
      borderColor: "rgba(22, 22, 22, 0.10)",
      borderRadius: "12px",
      padding: "0 16px",
      background: "#F9F9F9",
      boxShadow: state.isHover ? "none" : "none",
      "&:hover": {
        borderColor: "none", // Change border color on hover
      },
    }),
  };
  return (
    <ReactSelect
      value={props.value}
      styles={customStyles}
      placeholder={props.placeholder}
      options={
        props.options || [
          { value: "Erkak", label: "Erkak" },
          { value: "Ayol", label: "Ayol" },
        ]
      }
    />
  );
};

export default CustomSelect;
