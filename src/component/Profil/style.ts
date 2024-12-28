import styled from "styled-components";
import { Select } from "antd";

export const AntSelect = styled(Select)`
  .ant-select-selector {
    border-radius: 12px;
    border: 1px solid rgba(22, 22, 22, 0.1);
    background: #f9f9f9 !important;
  }
  .ant-select-selection-placeholder {
    color: #161616; /* Change placeholder color here */
  }
`;
