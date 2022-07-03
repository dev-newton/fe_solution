import React from "react";
import "./Button.css";

const Button = ({ label, color, size }) => {
  return <button className={`btn ${color} ${size}`}>{label}</button>;
};

export default Button;
