import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's instansiated", () => {
    test("Then it should render the heading of the Layout component", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const expectedElement = screen.getByRole("heading", {
        name: "Food recipies",
      });

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
