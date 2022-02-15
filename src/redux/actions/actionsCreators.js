import { actionsTypes } from "./actionsTypes";

export const loadTodosAction = (todos) => ({
  type: actionsTypes.loadTodos,
  todos,
});

export const deleteTodoAction = (id) => ({
  type: actionsTypes.deleteTodo,
  id,
});

export const addTodoAction = (todo) => ({
  type: actionsTypes.addTodo,
  todo,
});

export const toggleSolvedTodoAction = (id) => ({
  type: actionsTypes.toggleSolvedTodo,
  id,
});
