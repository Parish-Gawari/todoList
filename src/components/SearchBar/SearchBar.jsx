/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../Button/Button";

const SearchBar = ({
  inputLabel,
  className,
  onSearchChange,
  btnLable,
  btnClick,
  btnDisabled,
  keyHandler,
}) => {
  const onChangehandler = (e) => {
    onSearchChange(e.target.value);
  };
  return (
    <>
      <input
        className={className}
        placeholder={inputLabel}
        onChange={onChangehandler}
        onKeyUp={keyHandler}
      />
      <Button
        btnLable={btnLable}
        btnClick={btnClick}
        btnDisabled={btnDisabled}
      />
    </>
  );
};

export default SearchBar;
