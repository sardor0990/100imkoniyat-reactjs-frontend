import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const NogironligiBorlarUchun: React.FC = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/admin">Admin</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/admin/imkoniyatlar">Imkoniyatlar</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Nogironligi borlar uchun</Breadcrumb.Item>
      </Breadcrumb>
      <div>Nogironligi borlar uchun content</div>
    </div>
  );
};

export default NogironligiBorlarUchun;