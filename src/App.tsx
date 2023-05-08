import React, { useState } from "react";
import styled from "styled-components";

interface ITodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoItemContainer = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "gray" : "black")};
`;

const TodoText = styled.span`
  margin-right: 10px;
`;

const TodoInput = styled.input`
  margin-right: 10px;
`;

const TodoButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
`;

const TodoList: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      const newTodoItem = {
        id: newId,
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const handleToggleComplete = (id: number) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  return (
    <TodoListContainer>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <TodoItemContainer key={todo.id} completed={todo.completed}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleComplete(todo.id)}
          />
          <TodoText>{todo.text}</TodoText>
        </TodoItemContainer>
      ))}
      <div>
        <TodoInput
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new todo"
        />
        <TodoButton onClick={handleAddTodo}>Add Todo</TodoButton>
      </div>
    </TodoListContainer>
  );
};

export default TodoList;
