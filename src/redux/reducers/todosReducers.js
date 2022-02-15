import { actionsTypes } from "../actions/actionsTypes";

const todosReducers = (currentTodos = [], action = {}) => {
  let newState;
  switch (action.type) {
    case actionsTypes.loadTodos:
      newState = [...action.todos];
      break;
    case actionsTypes.deleteTodo:
      newState = [...currentTodos].filter((recipe) => recipe.id !== action.id);
      break;
    case actionsTypes.updateRecipe:
      newState = [...currentTodos].map((recipe) =>
        recipe.id === action.recipe.id ? { ...action.recipe } : { ...recipe }
      );
      break;
    default:
      newState = [...currentTodos];
  }
  return newState;
};

export default todosReducers;
