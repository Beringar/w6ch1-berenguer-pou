import { loadTodosAction } from "../actions/actionsCreators";
import todosReducers from "./todosReducers";

describe("Given a todosReducer", () => {
  describe("When it's called with an action type loadTodos and provide an array of todos", () => {
    test("Then it should return a new state with all the todos that came inside the action", () => {
      const currentState = [];
      const todos = [
        { id: 1, text: "todo1" },
        { id: 2, text: "todo2" },
      ];
      const action = loadTodosAction(todos);
      const expectedNewState = [...todos];

      const newState = todosReducers(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });

    describe("When it's called with an action type loadTodos and provide no todos", () => {
      test("Then it should return a new state equal to currentState", () => {
        const currentState = [];
        const action = loadTodosAction();
        const expectedNewState = [];

        const newState = todosReducers(currentState, action);

        expect(newState).toEqual(expectedNewState);
      });
    });
  });
});
