import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

describe("Given a Home page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 20 images", () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      const expectedElement = screen.getAllByRole("img");

      expect(expectedElement).toHaveLength(20);
    });
  });
});
