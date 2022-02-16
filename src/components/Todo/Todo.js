import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import "./todo.css";
import { deleteTodoThunk } from "../../redux/thunks/todosThunks";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const TodoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 8px 30px;
`;

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteTodo = () => dispatch(deleteTodoThunk(todo.id));

  return (
    <TodoWrapper className={`todo ${todo.notdone ? "todo--notdone" : ""}`}>
      <p>{todo.text}</p>
      <Button
        text={todo.notdone ? "Set as not resolved" : "Mark as solved"}
        className={todo.notdone ? "button--notdone" : "button-done"}
        actionOnClick={() => null}
      />
      <FontAwesomeIcon icon={faTrashCan} onClick={deleteTodo} />
    </TodoWrapper>
  );
};

export default Todo;
