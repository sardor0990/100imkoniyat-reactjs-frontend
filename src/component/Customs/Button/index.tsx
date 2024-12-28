import React, { ReactNode } from "react";
import { LoadingOutlined } from "@ant-design/icons";
interface BtnProps {
  children?: ReactNode | string;
  width?: string;
  height?: number;
  bg?: string;
  color?: string;
  onClick?: any;
  loading?: boolean;
  style?: any;
  className?: string;
  type?: "primary" | "secondary";
  htmlType?: "button" | "submit" | "reset"; 
}
const Button: React.FC<BtnProps> = ({
  width,
  height,
  children,
  onClick,
  loading,
  style,
  className,
  htmlType="button",
}) => {
  return (
    <button // Change from div to button
      type={htmlType}
      onClick={onClick}
      className={`w-${width ? `[${width}]` : "fit"} h-${
        height ? `[${height}px]` : "[45px]"
      }  p-[14px] flex items-center justify-center rounded-[12px] bg-[#F58634]
      text-[#fff] border-none text-[14px] font-[500] ${
        loading ? "cursor-wait" : "cursor-pointer"
      } active:scale-[1.001] ${className && className}`}
      style={style}
    >
      {loading ? (
        <LoadingOutlined
          style={{
            fontSize: 27,
          }}
          size={30} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
