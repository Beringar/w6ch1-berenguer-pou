import { actionsTypes } from "../actions/actionsTypes";

const todosReducers = (currentTodos = [], action = {}) => {
  let newState;
  switch (action.type) {
    case actionsTypes.addTodo:
      newState = action.todo
        ? [...currentTodos, { ...action.todo }]
        : [...currentTodos];
      break;
    case actionsTypes.loadTodos:
      newState = [...action.todos];
      break;
    case actionsTypes.deleteTodo:
      newState = [...currentTodos].filter((todo) => todo.id !== action.id);
      break;
    case actionsTypes.updateTodo:
      newState = [...currentTodos].map((todo) =>
        todo.id === action.todo.id ? { ...action.todo } : { ...todo }
      );
      break;
    default:
      newState = [...currentTodos];
  }
  return newState;
};

export default todosReducers;
