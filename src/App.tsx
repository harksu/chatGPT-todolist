import React, { useState } from "react";
import styled from "styled-components";

interface Todo {
  id: number;
  task: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const todo: Todo = { id: Date.now(), task: newTodo };
      setTodos([...todos, todo]);
      setNewTodo("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <Container>
      <Title>My Todo List</Title>
      <Input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Add a new todo"
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
      <TodoItems>
        {todos.map((todo) => (
          <Todo key={todo.id}>
            <TodoText>{todo.task}</TodoText>
            <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </DeleteButton>
          </Todo>
        ))}
      </TodoItems>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #1a1a2e;
  color: #f2f2f2;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 30px;
  font-family: "Montserrat", sans-serif;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  &::placeholder {
    color: #b3b3b3;
  }
`;

const Button = styled.button`
  font-size: 18px;
  padding: 15px 20px;
  background-color: #7f5af0;
  color: #f2f2f2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #6c47d5;
  }
`;

const TodoItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Todo = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px;
`;
const TodoText = styled.span`
  font-size: 24px;
  margin-right: 10px;
`;

const DeleteButton = styled.button`
  font-size: 18px;
  padding: 10px 15px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #d32f2f;
  }
`;

export default TodoList;
