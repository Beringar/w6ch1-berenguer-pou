import { actionsTypes } from "./actionsTypes";

export const loadTodosAction = (todos) => ({
  type: actionsTypes.loadTodos,
  todos,
});
