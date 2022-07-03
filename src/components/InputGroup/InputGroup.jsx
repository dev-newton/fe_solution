import React from "react";
import "./InputGroup.css";

const InputGroup = ({ id, label, type, size, placeholder }) => {
  return (
    <div className="form_group">
      <input
        id={id}
        className={`input ${size}`}
        type={type}
        placeholder={placeholder}
      />
      <label className="label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default InputGroup;
