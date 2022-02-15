const TodosList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <p>{`${todo.id} ${todo.text} ${todo.notdone}`}</p>
    ))}
  </ul>
);

export default TodosList;
