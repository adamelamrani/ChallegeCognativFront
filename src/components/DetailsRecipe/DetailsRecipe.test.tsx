import { render, screen } from "@testing-library/react";
import { Recipe } from "../../interfaces/Recipe";
import DetailsRecipe from "./DetailsRecipe";

describe("Given a DetailsRecipe component", () => {
  describe("When it's instansiated", () => {
    test("Then it should render an image", () => {
      const recipe: Recipe = {
        _id: "52944",
        name: "Escovitch Fish",
        categoryId: "1",
        categoryName: "Fish",
        duration: 11,
        complexity: "Hard",
        people: 3,
        recommended: 1,
        ingredients: ["2 eggs", "4 tomatoes", "salt", "pepper"],
        description:
          "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use your favorite seasoning. I used creole seasoning. Set aside or place in the oven to keep it warm until sauce is ready.\r\n\r\nIn large skillet heat oil over medium heat, until hot, add the fish, cook each side- for about 5-7 minutes until cooked through and crispy on both sides. Remove fish and set aside. Drain oil and leave about 2-3 tablespoons of oil\r\nAdd, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn\r\nThen add onion, bell peppers, thyme, scotch bonnet, sugar, all spice-continue stirring for about 2-3 minutes. Add vinegar, mix an adjust salt and pepper according to preference. Let it simmer for about 2 more minutes. \r\n\r\nDiscard bay leave, thyme spring and serve over fish with a side of this bammy. You may make the sauce about 2 days in advance.",
        photo: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      };
      render(<DetailsRecipe recipeObject={recipe} />);

      const expectedOutput = screen.getByRole("img");
      expect(expectedOutput).toBeInTheDocument();
    });
  });

  describe("When a recipe is provided to the component", () => {
    test("Then it should render a list with 7 list items", () => {
      const recipe: Recipe = {
        _id: "52944",
        name: "Escovitch Fish",
        categoryId: "1",
        categoryName: "Fish",
        duration: 11,
        complexity: "Hard",
        people: 3,
        recommended: 1,
        ingredients: ["2 eggs", "4 tomatoes", "salt", "pepper"],
        description:
          "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use your favorite seasoning. I used creole seasoning. Set aside or place in the oven to keep it warm until sauce is ready.\r\n\r\nIn large skillet heat oil over medium heat, until hot, add the fish, cook each side- for about 5-7 minutes until cooked through and crispy on both sides. Remove fish and set aside. Drain oil and leave about 2-3 tablespoons of oil\r\nAdd, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn\r\nThen add onion, bell peppers, thyme, scotch bonnet, sugar, all spice-continue stirring for about 2-3 minutes. Add vinegar, mix an adjust salt and pepper according to preference. Let it simmer for about 2 more minutes. \r\n\r\nDiscard bay leave, thyme spring and serve over fish with a side of this bammy. You may make the sauce about 2 days in advance.",
        photo: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      };
      render(<DetailsRecipe recipeObject={recipe} />);
      const expectedOutput = screen.getAllByRole("listitem");

      expectedOutput.forEach((item) => expect(item).toBeInTheDocument());
      expect(expectedOutput).toHaveLength(7);
    });
  });

  describe("When the recipie does not have a photo", () => {
    test("Then it should render the default link", () => {
      const recipe: Recipe = {
        _id: "52944",
        name: "Escovitch Fish",
        categoryId: "1",
        categoryName: "Fish",
        duration: 11,
        complexity: "Hard",
        people: 3,
        recommended: 1,
        ingredients: ["2 eggs", "4 tomatoes", "salt", "pepper"],
        description:
          "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use your favorite seasoning. I used creole seasoning. Set aside or place in the oven to keep it warm until sauce is ready.\r\n\r\nIn large skillet heat oil over medium heat, until hot, add the fish, cook each side- for about 5-7 minutes until cooked through and crispy on both sides. Remove fish and set aside. Drain oil and leave about 2-3 tablespoons of oil\r\nAdd, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn\r\nThen add onion, bell peppers, thyme, scotch bonnet, sugar, all spice-continue stirring for about 2-3 minutes. Add vinegar, mix an adjust salt and pepper according to preference. Let it simmer for about 2 more minutes. \r\n\r\nDiscard bay leave, thyme spring and serve over fish with a side of this bammy. You may make the sauce about 2 days in advance.",
      };
      render(<DetailsRecipe recipeObject={recipe} />);
      const expectedOutput = screen.getByRole("img");

      expect(expectedOutput).toBeInTheDocument();
      expect(expectedOutput).not.toBe(
        '<img alt="Escovitch Fish recipe"class="details-image" src="https://www.themealdb.com/images/media/meals/1520084413.jpg" />'
      );
    });
  });
});
