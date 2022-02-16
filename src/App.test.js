import { screen } from "@testing-library/react";
import App from "./App";
import renderWithProviders from "./setupTests";

test("renders text Not Todos List", () => {
  renderWithProviders(<App />);
  const heading = screen.getByText(/not todos list/i);
  expect(heading).toBeInTheDocument();
});
