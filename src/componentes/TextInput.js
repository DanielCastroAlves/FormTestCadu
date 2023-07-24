import React from 'react';

function TextInput({ label, name, value, onChange, required, className }) {
  return (
    <div className={className}>
      <label>
        {label}:
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default TextInput;
