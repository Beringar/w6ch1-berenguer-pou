import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoThunk } from "../../redux/thunks/todosThunks";
import "./todoform.css";

const TodoForm = () => {
  const dispatch = useDispatch();
  const initialFormData = {
    text: "",
    notdone: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFilled) {
      dispatch(addTodoThunk(formData));
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const isFilled = formData.text !== "";

  return (
    <>
      <form
        className="form-todos"
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
      >
        <div className="form-block">
          <label title="text" htmlFor="text">
            {"Not todo task:"}
          </label>
          <input
            type="text"
            name="text"
            id="text"
            onChange={handleChange}
            placeholder="this has to be fixed..."
          />
        </div>
        <div className="form-block">
          <button type="submit" className="button" disabled={!isFilled}>
            Add to my list of things to fix!
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
