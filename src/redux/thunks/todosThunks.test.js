import {
  addTodoThunk,
  deleteTodoThunk,
  loadTodosThunk,
  toggleSolvedTodoThunk,
} from "../thunks/todosThunks";

describe("Given a loadTodos function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch function with the loadTodos action", async () => {
      const dispatch = jest.fn();

      await loadTodosThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a addTodo inner function", () => {
  describe("When it is called", () => {
    test("Then it should add one todo to the state", async () => {
      const dispatch = jest.fn();
      const todo = { id: "10", text: "test todo", notdone: false };

      const thunkFunction = addTodoThunk(todo);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
describe("Given a deleteTodoThunk inner function", () => {
  describe("When it is called with an id", () => {
    test("Then it should return the new state without the todo", async () => {
      const dispatch = jest.fn();
      const todo = { id: 4, name: "test1" };

      const thunkFunction = deleteTodoThunk(todo.id);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is called with an id 10 that is non matchcing", () => {
    test("Then it should return the new state without the todo", async () => {
      const dispatch = jest.fn();
      const todo = { id: "10", text: "test todo", notdone: false };

      const thunkFunction = deleteTodoThunk(todo.id);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
describe("Given a toggleTaskThunk inner function", () => {
  describe("When it is called with a task that is not defined", () => {
    test("Then it should call the dispatch with the todo", async () => {
      const dispatch = jest.fn();
      const todo = { id: "3", text: "test todo", notdone: false };

      const thunkFunction = toggleSolvedTodoThunk(todo);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
