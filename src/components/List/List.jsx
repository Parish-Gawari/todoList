/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./List.module.css";
import Button from "../Button/Button";

const List = ({ tasks, swapListItemHandler, isDoneHandler, deleteHandler }) => {
  const list = tasks.map((value, index) => (
    <li key={index} className={value.isDone ? styles.itemDoneStyle : ""}>
      {value.item}
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
            deleteHandler(index);
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
