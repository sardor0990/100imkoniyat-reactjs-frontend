import styled from "styled-components";
import { Collapse } from "antd";

const AntCollapse = styled(Collapse)`
  width: 900px !important;
  margin-bottom: 16px;
  background-color: #fff;
  .ant-collapse-header {
    border-radius: 20px !important;
  }
  @media (max-width: 950px) {
    width: 100% !important;
  }
`;

export default AntCollapse;
