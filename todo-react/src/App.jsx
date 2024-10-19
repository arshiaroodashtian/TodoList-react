import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TaskInput from "./components/TaskInput";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("todoList");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (data.length === 0 && parsedData.length > 0) {
        setData(parsedData);
      } else if (JSON.stringify(data) !== storedData) {
        updateLocalStorage(data);
      }
    }
  }, [data]);

  const updateLocalStorage = (newData) => {
    localStorage.setItem("todoList", JSON.stringify(newData));
  };

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    const updatedData = [...data, newTask];
    setData(updatedData);
    // updateLocalStorage(updatedData);
  };

  const deleteTask = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    // updateLocalStorage(updatedData);
  };

  const toggleTaskCompletion = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setData(updatedData);
    // updateLocalStorage(updatedData);
  };

  const editTask = (id, newTitle) => {
    if (!newTitle.trim()) return;
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, title: newTitle } : item
    );
    setData(updatedData);
    // updateLocalStorage(updatedData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
        <TaskInput addTask={addTask} />
        <TodoList
          data={data}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;
