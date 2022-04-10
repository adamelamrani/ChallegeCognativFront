import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Recipies from "./Recipies";

describe("Given a Recipies component", () => {
  describe("When it's instansiated", () => {
    test("Then it should render an image, a heading and a list for each item", () => {
      render(
        <BrowserRouter>
          <Recipies />
        </BrowserRouter>
      );

      const heading = screen.getAllByRole("heading", { level: 1 });
      const image = screen.getAllByRole("img");
      const list = screen.getAllByRole("list");

      expect(heading[0]).toBeInTheDocument();
      expect(heading[0].textContent).toBe("Escovitch Fish");
      expect(image[1]).toBeInTheDocument();
      expect(list).toHaveLength(10);
    });
  });
});
