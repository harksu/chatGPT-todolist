import React, { useState } from "react";

interface Todo {
  id: number;
  task: string;
}

const TodoInput: React.FC<{ onAddTodo: (todo: Todo) => void }> = ({
  onAddTodo,
}) => {
  const [newTodo, setNewTodo] = useState("");
  const [idCounter, setIdCounter] = useState(1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && newTodo.trim() !== "") {
      const todo: Todo = { id: idCounter, task: newTodo };
      onAddTodo(todo);
      setNewTodo("");
      setIdCounter(idCounter + 1);
    }
  };

  return (
    <input
      type="text"
      value={newTodo}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
      placeholder="Add a new todo"
    />
  );
};

export default TodoInput;
