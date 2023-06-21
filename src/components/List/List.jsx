/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./List.module.css";

const List = ({ tasks }) => {
  const list = tasks.map((value, index) => <li key={index}>{value}</li>);
  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>{list}</ul>
    </div>
  );
};

export default List;
