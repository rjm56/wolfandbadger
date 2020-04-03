import { StyledLabel } from "./styles";

const Label = ({ htmlFor, text }) => (
  <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>
);

export default Label;
