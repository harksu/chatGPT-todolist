const TodoItem = styled.li`
  font-size: 24px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px;
  background-color: #f2f2f2;
  color: #1a1a2e;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  font-size: 18px;
  padding: 10px;
  background-color: #e74c3c;
  color: #f2f2f2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #c0392b;
  }
`;

const TodoItemText = styled.span`
  margin-right: 20px;
`;

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const handleDeleteTodo = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <TodoItem>
      <TodoItemText>{todo.task}</TodoItemText>
      <DeleteButton onClick={handleDeleteTodo}>Delete</DeleteButton>
    </TodoItem>
  );
};
