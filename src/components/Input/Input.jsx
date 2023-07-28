// eslint-disable-next-line react/prop-types
const Input = ({ inputChangeHandler, inputValue, keyHandler }) => {
  // console.log('Input');
  const changeHandler = (e) => {
    inputChangeHandler(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={changeHandler}
      value={inputValue}
      onKeyUp={keyHandler}
    />
  );
};

export default Input;
