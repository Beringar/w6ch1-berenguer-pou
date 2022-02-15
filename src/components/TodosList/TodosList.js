const TodosList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <p key={todo.id}>{`${todo.id} ${todo.text} ${todo.notdone}`}</p>
    ))}
  </ul>
);

export default TodosList;
