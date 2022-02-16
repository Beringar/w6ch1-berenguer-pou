import "./todo.css";
const Todo = ({ todo }) => (
  <article className={`todo ${todo.notdone ? "todo--notdone" : ""}`}>
    <p>{todo.text}</p>
  </article>
);

export default Todo;
