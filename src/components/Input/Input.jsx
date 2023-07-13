/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Input = ({ input, inputValue, keyhandler, inputLabel, className }) => {
  const changeHandler = (e) => {
    input(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={changeHandler}
      value={inputValue}
      onKeyUp={keyhandler}
      placeholder={inputLabel}
      className={className}
    />
  );
};

export default Input;
