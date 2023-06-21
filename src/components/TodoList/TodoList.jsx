/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import List from "../List/List";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const inputChangeHandler = (str) => setText(str);
  const btnClickHandler = () => {
    const trimText = text.trim();
    if (trimText) {
      setList([...list, trimText]);
      setText("");
    }
  };

  const keyHandler = (e) => {
    if (e.key == "Enter") {
      btnClickHandler();
    }
  };
  return (
    <div className={styles.todoContainer}>
      <Input
        input={inputChangeHandler}
        inputValue={text}
        keyhandler={keyHandler}
      />
      <Button
        btnClick={btnClickHandler}
        btnLable="Add to List"
        btnDisabled={text.trim().length === 0}
      />
      <List tasks={list} />
    </div>
  );
};

export default TodoList;
