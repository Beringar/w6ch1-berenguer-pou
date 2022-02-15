import {
  loadTodosAction,
  addTodoAction,
  deleteTodoAction,
  toggleSolvedTodoAction,
} from "./actionsCreators";
import { actionsTypes } from "./actionsTypes";

describe("Given an ActionsCreator set", () => {
  describe("When the function loadTodosAction is called", () => {
    test("Then it should return an object with type load-todos and the array passed", () => {
      const loadTodosType = actionsTypes.loadTodos;
      const mockObject = [
        { todo: { test: "test" } },
        { todo: { test: "test" } },
      ];
      const expectedAction = { type: loadTodosType, todos: mockObject };

      const action = loadTodosAction(mockObject);
      expect(action).toEqual(expectedAction);
    });
  });

  describe("When the function addTodoAction is called", () => {
    test("Then it should return an object with type add-todo and the object passed", () => {
      const addTodoType = actionsTypes.addTodo;
      const mockObject = { todo: { test: "test" } };
      const expectedAction = { type: addTodoType, todo: mockObject };

      const action = addTodoAction(mockObject);
      expect(action).toEqual(expectedAction);
    });
  });

  describe("When the function deleteTodoAction is called", () => {
    test("Then it should return an object with type delete-todo and the object passed", () => {
      const deleteTodoType = actionsTypes.deleteTodo;
      const mockId = 3;
      const expectedAction = { type: deleteTodoType, id: mockId };

      const action = deleteTodoAction(mockId);
      expect(action).toEqual(expectedAction);
    });
  });

  describe("When the function toggleSolvedTodoAction is called", () => {
    test("Then it should return an object with type toggle-solved-todo and id passed", () => {
      const toggleSolvedTodoType = actionsTypes.toggleSolvedTodo;
      const mockId = 5;
      const expectedAction = { type: toggleSolvedTodoType, id: mockId };

      const action = toggleSolvedTodoAction(mockId);
      expect(action).toEqual(expectedAction);
    });
  });
});
