/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

function TodoList({ data, deleteTask, toggleTaskCompletion, editTask }) {
  return (
    <div>
      {data.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
