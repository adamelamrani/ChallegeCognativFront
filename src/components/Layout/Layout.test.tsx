import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it's instansiated", () => {
    test("Then it should render a heading", () => {
      render(
        <BrowserRouter>
          <Layout children />
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading");

      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toBe("Food recipies");
    });
  });
});
