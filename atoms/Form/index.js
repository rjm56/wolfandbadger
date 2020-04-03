import styled from "styled-components";
import colors from "../../constants/colors";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled.button`
  padding: 12px 24px;
  border-radius: 24px;
  border: none;
  max-width: 300px;
  background: ${colors.brandGreen};
  color: ${colors.white};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 11px;
  outline: none;
  margin: 24px auto 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
