import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "./TodoForm";

describe("Given a TodoForm component", () => {
  describe("When it's rendered and typed on the text input", () => {
    test("Then the label input should contain the text typed", () => {
      const inputPlaceholder = "this has to be fixed...";

      render(<TodoForm />);

      const input = screen.queryByPlaceholderText(inputPlaceholder);
      userEvent.type(input, "text");
      expect(input).toHaveDisplayValue("text");
    });
  });
});
