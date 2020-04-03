import styled from "styled-components";
import colors from "../../constants/colors";

export const Background = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 8;
`;

export const ModalPanel = styled.div`
  position: relative;
  max-width: 500px;
  background-color: ${colors.white};
  border-radius: 5px;
  z-index: 9;
  margin-left: 16px;
  margin-right: 16px;
  padding: 40px 56px;
  min-width: 80%;

  @media (min-width: 768px) {
    min-width: 40%;
    padding: 24px;
  }
`;

export const Close = styled.p`
  text-align: center;
  margin-top: 24px 0;
  display: flex;
  justify-content: flex-end;
  color: ${colors.secondary};
  font-size: 14px;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
