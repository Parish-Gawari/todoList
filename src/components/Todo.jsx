import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/actions";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg">
      <h2 className="mt-3 mb-6 text-3xl font-extrabold text-center text-purple-600 uppercase tracking-wider">
        Personal TODO APP
      </h2>

      <div className="flex items-center mb-6">
        <input
          id="addTodoInput"
          className="flex-grow p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className="ml-4 p-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 focus:outline-none shadow-md transition duration-300 transform hover:scale-105"
          onClick={handleAddTodoClick}
        >
          <BsPlus size={24} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <FilterButtons />
        <div className="flex items-center">
          <input
            className="flex-grow p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 focus:outline-none shadow-md transition duration-300 transform hover:scale-105">
            <BsSearch size={24} />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
