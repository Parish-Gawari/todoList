/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Button = ({ btnClick, btnLable, btnDisabled, className }) => {
  const onClick = () => btnClick();
  return (
    <button onClick={onClick} disabled={btnDisabled} className={className}>
      {btnLable}
    </button>
  );
};

export default Button;
