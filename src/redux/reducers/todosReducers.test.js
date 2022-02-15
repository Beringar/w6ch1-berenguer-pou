import { loadTodosAction, addTodoAction } from "../actions/actionsCreators";
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

    describe("When it's called with action type addTodo and passed a todo", () => {
      test("Then it should return a newState with all the previous todos and the todo inside action", () => {
        const currentState = [{ id: 3, text: "todo3" }];
        const todoToAdd = { id: 666, text: "find the devil" };
        const action = addTodoAction({ ...todoToAdd });
        const expectedNewState = [...currentState, { ...todoToAdd }];

        const newState = todosReducers(currentState, action);

        expect(newState).toEqual(expectedNewState);
      });
    });

    describe("When it's called with action type addTodo and passed no todo", () => {
      test("Then it should return a newState equal to previous state", () => {
        const currentState = [{ id: 3, text: "todo3" }];
        const action = addTodoAction();
        const expectedNewState = [...currentState];

        const newState = todosReducers(currentState, action);

        expect(newState).toEqual(expectedNewState);
      });
    });
  });
});
