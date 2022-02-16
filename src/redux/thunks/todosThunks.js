import { loadTodosAction, deleteTodoAction } from "../actions/actionsCreators";

export const loadTodosThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_HEROKKU_API_URL);
  const todos = await response.json();
  dispatch(loadTodosAction(todos));
};

export const deleteTodoThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_HEROKKU_API_URL}${id}`,
    {
      method: "DELETE",
    }
  );

  if (response.ok) {
    dispatch(deleteTodoAction(id));
  }
};
