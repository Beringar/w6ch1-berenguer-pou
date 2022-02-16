import { screen } from "@testing-library/react";
import renderWithProviders from "../../setupTests";
import Todo from "./Todo";

describe("Given a Todo component", () => {
  describe("When it is rendered with the a todo", () => {
    test("Then it should render the name of the task", async () => {
      const todo = { id: 4, text: "testing todo", notdone: false };
      const textTodisplay = todo.text;
      renderWithProviders(<Todo todo={todo} />);

      const nameOftheTask = await screen.findByText(textTodisplay);

      expect(nameOftheTask).toBeInTheDocument();
    });
  });
});
