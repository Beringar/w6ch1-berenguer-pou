import { screen } from "@testing-library/react";
import renderWithProviders from "../../setupTests";
import TodosList from "./TodosList";

describe("Given a TodosList component", () => {
  describe("When it is rendered with an array of 2 todos", () => {
    test("Then it should show a list with the two tasks", () => {
      const todos = [
        { id: 1, text: "task1", notdone: true },
        { id: 1, text: "task1", notdone: true },
      ];

      renderWithProviders(<TodosList todos={todos} />);

      const listofTodos = screen.getAllByRole("listitem").length;

      expect(listofTodos).toBe(todos.length);
    });
  });
});
