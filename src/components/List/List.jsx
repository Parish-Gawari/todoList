/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./List.module.css";
import {
  MdDeleteForever,
  MdArrowCircleDown,
  MdArrowCircleUp,
  MdEditSquare,
  MdDoneAll,
  MdSaveAs,
} from "react-icons/md";

import { GiCancel } from "react-icons/gi";

// eslint-disable-next-line react/prop-types
const List = ({
  tasks,
  swapListItemHandler,
  isDoneHandler,
  deleteHandler,
  isEditingHandler,
  cancelHandler,
  itemListChangeHandler,
  itemSaveHandler,
  isSearching,
}) => {
  // eslint-disable-next-line react/prop-types

  const listItems = tasks.map((task, index) => (
    <li
      key={index}
      className={task.isDone ? styles.itemDoneStyle : styles.listItems}
      style={task.isSearch ? { display: "flex" } : { display: "none" }}
    >
      {!task.isEditing && (
        <>
          {task.item}

          <Button
            btnLabel={<MdEditSquare />}
            className={task.isDone ? styles.itemBtnDone : styles.itemBtn}
            btnClickHandler={() => isEditingHandler(index)}
            isDisabled={task.isDone}
          />
        </>
      )}
      {task.isEditing && (
        <>
          <Input
            inputValue={task.isDone ? styles.itemBtnDone : styles.itemBtn}
            inputChangeHandler={(value) => itemListChangeHandler(index, value)}
          />
          <Button
            btnLabel={<MdSaveAs />}
            className={task.isDone ? styles.itemBtnDone : styles.itemBtn}
            btnClickHandler={() => itemSaveHandler(index)}
            isDisabled={task.editingItem.trim().length === 0}
          />
          <Button
            btnLabel={<GiCancel />}
            className={task.isDone ? styles.itemBtnDone : styles.itemBtn}
            btnClickHandler={() => cancelHandler(index)}
          />
        </>
      )}

      <Button
        btnLabel={<MdArrowCircleUp />}
        className={task.isDone ? styles.itemBtnDone : styles.itemBtn}
        btnClickHandler={() => swapListItemHandler(index, index - 1)}
        isDisabled={index === 0 || isSearching}
      />
      <Button
        btnLabel={<MdArrowCircleDown />}
        className={task.isDone ? styles.itemBtnDone : styles.itemBtn}
        btnClickHandler={() => swapListItemHandler(index, index + 1)}
        isDisabled={index === tasks.length - 1 || isSearching}
      />

      {task.isDone && (
        <Button
          btnLabel={<MdDeleteForever />}
          className={task.isDone ? styles.itemBtnDone : styles.itemBtn}
          btnClickHandler={() => deleteHandler(index)}
        />
      )}

      {!task.isDone && (
        <Button
          btnLabel={<MdDoneAll />}
          className={task.isDone ? styles.itemBtnDone : styles.itemBtn}
          btnClickHandler={() => isDoneHandler(index)}
          isDisabled={task.isEditing}
        />
      )}
    </li>
  ));

  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>{listItems}</ul>
    </div>
  );
};

export default List;
