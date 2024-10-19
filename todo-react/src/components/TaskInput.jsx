import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue('');
    } else {
      alert('Please enter a task.');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="border p-2 mr-2 flex-grow"
        placeholder="Enter a new task"
      />
      <button
        onClick={handleAddTask}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;

