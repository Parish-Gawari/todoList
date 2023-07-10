/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import List from "../List/List";
import styles from "./TodoList.module.css";

const LS_TODO_LIST = "TodoList";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const listItems = JSON.parse(localStorage.getItem(LS_TODO_LIST)) || [];
    setList(listItems);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_TODO_LIST, JSON.stringify(list));
  }, [list]);

  const inputChangeHandler = (str) => setText(str);
  const btnClickHandler = () => {
    const trimText = text.trim();
    if (trimText) {
      setList([
        ...list,
        {
          item: trimText,
          editingItem: trimText,
          isDone: false,
          isEditing: false,
        },
      ]);
      setText("");
    }
  };

  const keyHandler = (e) => {
    if (e.key == "Enter") {
      btnClickHandler();
    }
  };

  const swapListItemHandler = (initIndex, finIndex) => {
    const items = [...list];
    [items[initIndex], items[finIndex]] = [items[finIndex], items[initIndex]];
    setList(items);
  };

  const isDoneHandler = (index) => {
    const items = [...list];
    items[index].isDone = true;
    setList(items);
  };

  const deleteHandler = (index) => {
    const items = [...list];
    items.splice(index, 1);
    setList(items);
  };

  const clearAllHandler = () => {
    setList([]);
  };
  const isEditingHandler = (index) => {
    const items = [...list];
    items[index].isEditing = true;
    setList(items);
  };

  const cancelHandler = (index) => {
    const items = [...list];
    items[index].isEditing = false;
    items[index].editingItem = items[index].item;
    setList(items);
  };

  const itemListChangeHandler = (index, value) => {
    const items = [...list];
    items[index].editingItem = value;
    setList(items);
  };
  const itemSaveHandler = (index) => {
    const items = [...list];
    items[index].isEditing = false;
    const item = items[index].editingItem.trim();
    if (item) {
      items[index].item = item;
      items[index].editingItem = item;
    }
    items[index].item = items[index].editingItem;
    setList(items);
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
      <Button
        btnClick={clearAllHandler}
        btnLable="Clear All"
        btnDisabled={list.length === 0}
      />
      <List
        tasks={list}
        swapListItemHandler={swapListItemHandler}
        isDoneHandler={isDoneHandler}
        deleteHandler={deleteHandler}
        isEditingHandler={isEditingHandler}
        cancelHandler={cancelHandler}
        itemListChangeHandler={itemListChangeHandler}
        itemSaveHandler={itemSaveHandler}
      />
    </div>
  );
};

export default TodoList;
