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

  return (
    <Container>
      <Title>Todo List</Title>
      <Input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo"
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
      <TodoItems>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>{todo.task}</TodoItem>
        ))}
      </TodoItems>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-top: 50px;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  margin-top: 20px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 10px;
  margin-top: 20px;
  background-color: #008cba;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #006a9d;
  }
`;

const TodoItems = styled.ul`
  list-style: none;
  margin-top: 20px;
`;

const TodoItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

export default TodoList;
