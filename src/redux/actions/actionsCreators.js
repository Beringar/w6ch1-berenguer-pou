import { actionsTypes } from "./actionsTypes";

export const loadTodosAction = (todos = []) => ({
  type: actionsTypes.loadTodos,
  todos,
});

export const deleteTodoAction = (todos = []) => ({
  type: actionsTypes.deleteTodo,
  todos,
});
