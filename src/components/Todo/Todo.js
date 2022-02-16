import Button from "../Button/Button";
import "./todo.css";
const Todo = ({ todo }) => (
  <article className={`todo ${todo.notdone ? "todo--notdone" : ""}`}>
    <p>{todo.text}</p>
    <Button
      text={todo.notdone ? "Set as not resolved" : "Mark as solved"}
      className={todo.notdone ? "button--notdone" : "button-done"}
      actionOnClick={() => null}
    />
  </article>
);

export default Todo;
