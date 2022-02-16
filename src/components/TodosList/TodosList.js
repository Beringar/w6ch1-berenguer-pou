import Todo from "../Todo/Todo";

const TodosList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </ul>
);

export default TodosList;
