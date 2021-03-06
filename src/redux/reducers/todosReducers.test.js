import {
  loadTodosAction,
  addTodoAction,
  deleteTodoAction,
  toggleSolvedTodoAction,
} from "../actions/actionsCreators";
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

  describe("When it's called with action type deleteTodo and passed a matching id", () => {
    test("Then it should return a new state without the todo with matching id", () => {
      const currentState = [
        { id: 1, text: "todo1" },
        { id: 2, text: "todo2" },
      ];
      const idTodoToDelete = 1;
      const action = deleteTodoAction(idTodoToDelete);
      const expectedNewState = [{ id: 2, text: "todo2" }];

      const newState = todosReducers(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type deleteTodo and passed a non matching id", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const currentState = [
        { id: 1, text: "todo1" },
        { id: 2, text: "todo2" },
      ];
      const action = deleteTodoAction(888);
      const expectedNewState = [...currentState];

      const newState = todosReducers(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with action type deleteTodo and passed no id", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const currentState = [
        { id: 1, text: "todo1" },
        { id: 2, text: "todo2" },
      ];
      const action = deleteTodoAction();
      const expectedNewState = [...currentState];

      const newState = todosReducers(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it's called with an action type toggleSolvedTodo and provide a maching id", () => {
    test("then it should return a new state with the same amount of recipes", () => {
      const currentState = [
        { id: 1, text: "todo1", notdone: false },
        { id: 2, text: "todo2", notdone: false },
      ];
      const todoId = 2;
      const action = toggleSolvedTodoAction(todoId);
      const expectedLength = 2;

      const newState = todosReducers(currentState, action);

      expect(newState.length).toBe(expectedLength);
    });

    test("then it should return a new state with the updated todo and without the outdated todo info", () => {
      const currentState = [
        { id: 1, text: "todo1", notdone: false },
        { id: 2, text: "todo2", notdone: false },
      ];

      const todoIdtoBeToggled = 2;
      const currentNotDoneStatus = currentState.find(
        (todo) => todo.id === todoIdtoBeToggled
      ).notdone;
      const action = toggleSolvedTodoAction(todoIdtoBeToggled);

      const newState = todosReducers(currentState, action);
      expect(
        newState.find((todo) => todo.id === todoIdtoBeToggled).notdone
      ).toBe(!currentNotDoneStatus);
    });
  });

  describe("When it's called with an action type toggleSolvedTodo and provide a todo with no matching id", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const currentState = [
        { id: 1, text: "todo1" },
        { id: 2, text: "todo2" },
      ];
      const todoTotoggleSolved = { id: 666, text: "devil zone" };
      const action = toggleSolvedTodoAction(todoTotoggleSolved);

      const newState = todosReducers(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });

  describe("When it's called with an action type toggleSolvedTodo and provide no todo", () => {
    test("Then it should return a new state equal to currentstate", () => {
      const currentState = [
        { id: 1, text: "todo1" },
        { id: 2, text: "todo2" },
      ];

      const action = toggleSolvedTodoAction();
      const newState = todosReducers(currentState, action);
      expect(newState).toEqual(currentState);
    });
  });
});
