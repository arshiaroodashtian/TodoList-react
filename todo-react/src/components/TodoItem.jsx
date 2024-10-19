/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaRegTrashAlt, FaEdit, FaCheck } from "react-icons/fa";

function TodoItem({ todo, deleteTask, toggleTaskCompletion, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = () => {
    editTask(todo.id, newTitle);
    setIsEditing(false);
  };

  useEffect(() => {
    if (isEditing) {
      document.querySelector(`#edit-${todo.id}`).focus();
      setNewTitle(todo.title);
    }
  }, [isEditing, todo.id, todo.title]);

  return (
    <div
      className={`flex items-center justify-between p-2 my-2 rounded ${
        todo.completed ? "bg-gray-300" : "bg-gray-100"
      }`}
      onClick={() => toggleTaskCompletion(todo.id)}
    >
      {isEditing ? (
        <>
          <input
            id={`edit-${todo.id}`}
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleEditSubmit}
            className="border p-2 flex-grow mr-2"
            onKeyDown={(e) => e.key === "Enter" && handleEditSubmit()}
          />
          <button
            onClick={handleEditSubmit}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            <FaCheck />
          </button>
        </>
      ) : (
        <>
          <span className={`flex-grow ${todo.completed ? "line-through" : ""}`}>
            {todo.title}
          </span>
          <div className="flex">
            <button
              onClick={handleEdit}
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            >
              <FaEdit />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(todo.id);
              }}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              <FaRegTrashAlt />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
