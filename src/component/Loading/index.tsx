import React from "react";
import { Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";
const LoadingComponent: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Spin
        indicator={
          <Loading3QuartersOutlined
            style={{
              fontSize: 82,
              color: "#db9cb0",
            }}
            spin
          />
        }
      />
    </div>
  );
};
export { LoadingComponent };
