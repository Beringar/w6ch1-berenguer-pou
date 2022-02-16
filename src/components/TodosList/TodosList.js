import Todo from "../Todo/Todo";

const TodosList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map((todo) => (
      <li key={todo.id}>
        <Todo todo={todo} />
      </li>
    ))}
  </ul>
);

export default TodosList;
