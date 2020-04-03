import styled from "styled-components";
import colors from "../../constants/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 56px;
`;

const margin = 8;

export const Card = styled.div`
  background: ${colors.white};
  margin: 0 ${margin}px 16px;
  border-radius: 4px;
  padding: 16px;
  border-top: 3px solid;
  border-color: transparent;
  cursor: pointer;
  transition-duration: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(33.3333% - ${margin * 2}px);

  &:hover {
    border-color: ${colors.brandGreen};
  }

  @media (min-width: 768px) {
    width: calc(25% - ${margin * 2}px);
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 600;
`;

export const Action = styled.button`
  color: ${({ isPrimary }) => (isPrimary ? colors.primary : colors.secondary)};
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`;
