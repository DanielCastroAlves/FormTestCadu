import React from 'react';

function DropdownInput({ label, name, value, options, onChange, className }) {
  return (
    <div className={className}>
      <label>
        {label}:
      </label>
      <select name={name} value={value} onChange={onChange}>
        <option value="">Selecione...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownInput;
