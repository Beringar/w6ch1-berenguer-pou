import { loadTodosAction } from "./actionsCreators";
import { actionsTypes } from "./actionsTypes";

describe("Given an ActionsCreator set", () => {
  describe("When the function loadTodosAction is called", () => {
    test("Then it should return an object with type load todos and the object passed", () => {
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
});
