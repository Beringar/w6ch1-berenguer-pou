import {
  loadTodosAction,
  deleteTodoAction,
  toggleSolvedTodoAction,
  addTodoAction,
} from "../actions/actionsCreators";

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

export const toggleSolvedTodoThunk = (todo) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_HEROKKU_API_URL}${todo.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }
  );
  const newTask = await response.json();
  dispatch(toggleSolvedTodoAction(newTask.id));
};

export const addTodoThunk = (todo) => async (dispatch) => {
  console.log("action add");
  const response = await fetch(process.env.REACT_APP_HEROKKU_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await response.json();
  dispatch(addTodoAction(newTodo));
};
