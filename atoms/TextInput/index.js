const TextInput = ({ value, fieldId, onChange }) => (
  <input type="text" id={fieldId} value={value} onChange={onChange} />
);

export default TextInput;
