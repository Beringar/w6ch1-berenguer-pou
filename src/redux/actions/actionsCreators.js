import { actionsTypes } from "./actionsTypes";

export const loadTodosAction = (todos = []) => ({
  type: actionsTypes.loadTodos,
  todos,
});

export const deleteTodoAction = (todo = {}) => ({
  type: actionsTypes.deleteTodo,
  todo,
});

export const addTodoAction = (todo = {}) => ({
  type: actionsTypes.addTodo,
  todo,
});

export const updateTodoAction = (todo = {}) => ({
  type: actionsTypes.updateTodo,
  todo,
});
