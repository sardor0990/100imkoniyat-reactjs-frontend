import styled from "styled-components";

import { DatePicker } from "antd";

export const AntDatePicker = styled(DatePicker)`
  border: 1px solid black;
  &.ant-picker {
    visibility: hidden;
    width: 1px;
    position: absolute;
    right: 270px;
  }
`;
