import React from "react";
import { Recipe } from "../../interfaces/Recipe";
import DetailsStyleComponent from "./DetailsStyleComponent";

interface RecipeObjectProps {
  recipeObject: Recipe;
}

const DetailsRecipe = ({ recipeObject }: RecipeObjectProps): JSX.Element => {
  return (
    <DetailsStyleComponent className="page">
      <div className="top">
        <img
          className="details-image"
          alt={`${recipeObject.name} recipe`}
          src={
            recipeObject.photo
              ? recipeObject.photo
              : "http://via.placeholder.com/640x360"
          }
        />
        <div className="top-information">
          <h2 className="recipe-detail-category">
            {recipeObject.categoryName}
          </h2>
          <h1 className="recipe-detail-name">{recipeObject.name}</h1>
          <ul className="recipe-detail-stuff">
            <li className="recipe-detail-time">
              {recipeObject.duration} minutes
            </li>
            <li className="recipe-detail-complexity">
              {recipeObject.complexity}
            </li>
            <li className="recipe-detail-people">
              {recipeObject.people} people
            </li>
          </ul>
          <ul className="ingredients">
            <h2>Ingredients</h2>
            {recipeObject.ingredients.map((ingredient) => (
              <li key={`${recipeObject._id}_${ingredient}`}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom">
        <h3 className="description">Info</h3>
        <p className="description-text">{recipeObject.description}</p>
      </div>
    </DetailsStyleComponent>
  );
};

export default DetailsRecipe;
