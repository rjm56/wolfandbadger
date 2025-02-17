import styled from "styled-components";
import colors from "../../constants/colors";

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 24px;
  border: none;
  background: ${colors.brandGreen};
  color: ${colors.white};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 11px;
  position: fixed;
  bottom: 32px;
  left: 50%;
  outline: none;
  cursor: pointer;
  transform: translateX(-50%) perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;

  &:hover {
    transform: translateX(-50%) scale(1.1);
  }
`;

export default Button;
