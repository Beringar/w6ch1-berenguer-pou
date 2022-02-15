import {
  loadTodosAction,
  addTodoAction,
  deleteTodoAction,
  updateTodoAction,
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
    test("Then it should return an object with type add-todo and the object passed", () => {
      const deleteTodoType = actionsTypes.deleteTodo;
      const mockObject = { todo: { test: "test" } };
      const expectedAction = { type: deleteTodoType, todo: mockObject };

      const action = deleteTodoAction(mockObject);
      expect(action).toEqual(expectedAction);
    });
  });

  describe("When the function updateTodoAction is called", () => {
    test("Then it should return an object with type add-todo and the object passed", () => {
      const updateTodoType = actionsTypes.updateTodo;
      const mockObject = { todo: { test: "test" } };
      const expectedAction = { type: updateTodoType, todo: mockObject };

      const action = updateTodoAction(mockObject);
      expect(action).toEqual(expectedAction);
    });
  });
});
