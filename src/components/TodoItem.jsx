import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../redux/actions";
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-4 bg-white shadow-md rounded-lg px-4 mb-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500 font-medium">{index + 1}.</span>
        <span
          className={`mr-4 text-lg ${
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="space-x-3">
        <button
          className="text-sm bg-blue-500 text-white sm:px-4 px-2 py-2 rounded-full hover:bg-blue-600 transition duration-200"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          className="text-sm bg-red-500 text-white sm:px-4 px-2 py-2 rounded-full hover:bg-red-600 transition duration-200"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed ? (
          <button
            className="text-sm bg-green-500 text-white sm:px-4 px-2 py-2 rounded-full hover:bg-green-600 transition duration-200"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        ) : (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-4 px-2 py-2 rounded-full hover:bg-yellow-600 transition duration-200"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
