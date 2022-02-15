import { loadTasksAction } from "../actions/actionsCreators";

export const loadTodosThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_HEROKKU_API_URL);
  const todos = await response.json();
  dispatch(loadTasksAction(todos));
};
