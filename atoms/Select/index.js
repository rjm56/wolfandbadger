const Select = ({ options, fieldId, value, onChange }) => (
  <select id={fieldId} value={value} onChange={onChange}>
    <option disabled value="">
      Select...
    </option>
    {options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Select;
