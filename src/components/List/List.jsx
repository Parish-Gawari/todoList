/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./List.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

const List = ({
  tasks,
  swapListItemHandler,
  isDoneHandler,
  deleteHandler,
  isEditingHandler,
  cancelHandler,
  itemListChangeHandler,
  itemSaveHandler,
}) => {
  const list = tasks.map((value, index) => (
    <li key={index} className={value.isDone ? styles.itemDoneStyle : ""}>
      {!value.isEditing && (
        <>
          {value.item}
          <Button
            btnLable="EDIT"
            className={styles.listItem}
            btnClick={() => {
              isEditingHandler(index);
            }}
            btnDisabled={value.isDone}
          />
        </>
      )}

      {value.isEditing && (
        <>
          <Input
            inputValue={value.editingItem}
            input={(val) => {
              itemListChangeHandler(index, val);
            }}
          />
          <Button
            btnLable="SAVE"
            className={styles.listItem}
            btnClick={() => {
              itemSaveHandler(index);
            }}
            btnDisabled={value.editingItem.trim().length === 0}
          />
          <Button
            btnLable="CANCEL"
            className={styles.listItem}
            btnClick={() => {
              cancelHandler(index);
            }}
            btnDisabled={value.isDone}
          />
        </>
      )}
      <Button
        btnLable="UP"
        className={styles.listItem}
        btnClick={() => {
          swapListItemHandler(index, index - 1);
        }}
        btnDisabled={index === 0}
      />
      <Button
        btnLable="DOWN"
        className={styles.listItem}
        btnClick={() => {
          swapListItemHandler(index, index + 1);
        }}
        btnDisabled={index === tasks.length - 1}
      />

      {value.isDone && (
        <Button
          btnLable="DELETE"
          className={styles.listItem}
          btnClick={() => {
            deleteHandler();
          }}
        />
      )}
      {!value.isDone && (
        <Button
          btnLable="DONE"
          className={styles.listItem}
          btnClick={() => {
            isDoneHandler(index);
          }}
        />
      )}
    </li>
  ));
  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>{list}</ul>
    </div>
  );
};

export default List;
