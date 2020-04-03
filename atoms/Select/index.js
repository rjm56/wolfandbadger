import StyledSelect from "./styles";

const Select = ({ options, fieldId, value, onChange }) => (
  <StyledSelect id={fieldId} value={value} onChange={onChange}>
    <option disabled value="">
      Select...
    </option>
    {options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </StyledSelect>
);

export default Select;
