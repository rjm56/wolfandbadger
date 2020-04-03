import styled from "styled-components";
import colors from "../../constants/colors";

export const Wrapper = styled.div`
  // display: flex;
  // flex-direction: column;
`;

export const Row = styled.div`
  margin-bottom: 24px;
  font-size: 12px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Label = styled.p`
  color: ${colors.secondary};
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const Heading = styled.h2`
  font-size: 40px;
  margin-top: 0;
  letter-spacing: -2px;
  font-weight: 600;
  margin-bottom: 24px;
  text-transform: capitalize;
`;
