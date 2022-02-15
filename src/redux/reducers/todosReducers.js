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
      newState = action.todos ? [...action.todos] : [...currentTodos];
      break;
    case actionsTypes.deleteTodo:
      newState = action.id
        ? [...currentTodos].filter((todo) => todo.id !== action.id)
        : [...currentTodos];
      break;
    case actionsTypes.updateTodo:
      newState = action.todo
        ? [...currentTodos].map((todo) =>
            todo.id === action.todo.id ? { ...action.todo } : { ...todo }
          )
        : [...currentTodos];
      break;
    default:
      newState = [...currentTodos];
  }
  return newState;
};

export default todosReducers;
