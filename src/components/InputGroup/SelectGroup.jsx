import React from "react";
import "./InputGroup.css";

const SelectGroup = ({ label, size, children }) => {
  return (
    <div className="form_group">
      <span className="s_text">{label}</span>
      <select className={`select ${size}`}>{children}</select>
    </div>
  );
};

export default SelectGroup;
