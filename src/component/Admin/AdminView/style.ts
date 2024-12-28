import styled from "styled-components";

interface WrapperProps {
  active: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: 44px;
  : var(--spacing-2, 2px) var(--spacing-8, 16px);
  align-items: center;
  gap: var(--spacing-0, 0px);
  align-self: stretch;
  border-radius: var(--radius-lg, 10px);
  background: ${({ active }) => (active ? "#f58634" : "#fff")};
  color: ${({ active }) => (!active ? "#14151A" : "#fff")};
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.07px;
  cursor: pointer;
  :hover {
    img {
      path {
        fill: red;
      }
      path {
        stroke: #fff;
      }
    }
    svg {
    }
  }
`;
