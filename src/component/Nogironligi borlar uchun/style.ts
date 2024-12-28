import styled from "styled-components";
import { Collapse } from "antd";

export const AntCollapse = styled(Collapse)`
  width: 900px !important;
  margin-bottom: 16px;
  background-color: #fff;
  .ant-collapse-header {
    border-radius: 20px !important;
  }
  @media (max-width: 910px) {
    width: 90% !important;
  }
`;


export const Card = styled.div<{ backgroundImage: string }>`
  width: 300px; 
  height: 200px; 
  border-radius: 8px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover; 
  background-position: center; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  color: white; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
`;
