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
    document.querySelector("#text").value = "";
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
        <div className="input-group">
          <label for="text">{"Add a new (not) to do:"}</label>
          <input
            type="text"
            name="text"
            id="text"
            onChange={handleChange}
            placeholder="this has to be fixed..."
            className="input-field"
          />
          <button
            type="submit"
            className="button button-submit"
            disabled={!isFilled}
          >
            Add to my list of things to fix!
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
