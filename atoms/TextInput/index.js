import StyledTextInput from "./styles";

const TextInput = ({ value, fieldId, onChange }) => (
  <StyledTextInput type="text" id={fieldId} value={value} onChange={onChange} />
);

export default TextInput;
