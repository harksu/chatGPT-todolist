import React, { useState } from "react";
import Input from "styled-components";

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && newTodo.trim() !== "") {
      const todo: Todo = { id: idCounter, task: newTodo };
      onAddTodo(todo);
      setNewTodo("");
      setIdCounter(idCounter + 1);
    }
  };

  return (
    <Input
      type="text"
      value={newTodo}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder="Add a new todo"
    />
  );
};

export default TodoInput;
