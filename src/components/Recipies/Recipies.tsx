import { Link } from "react-router-dom";
import { Recipe } from "../../interfaces/Recipe";
import fakeRecipies from "../../utils/fakeRecipies";
import RecipiesStyleComponent from "./RecipiesStyleComponent";

const Recipies = (): JSX.Element => {
  return (
    <RecipiesStyleComponent className="recipes">
      <h2 className="recipes-title">Top selection</h2>
      {fakeRecipies.map((item: Recipe, index: number) => {
        return (
          <div className="recipe" key={`${item._id}_${index}`}>
            <img
              className="recipe-image"
              alt={`${item.name} recipe`}
              src={
                item.photo ? item.photo : "http://via.placeholder.com/640x360"
              }
            />
            <div className="recipe-info">
              <div>
                <p className="recipe-category">{item.categoryName}</p>
                <h1 className="recipe-name">{item.name}</h1>
                <ul className="recipe-stuff">
                  <li className="recipe-time">{item.duration} minutes</li>
                  <li className="recipe-complexity">{item.complexity}</li>
                  <li className="recipe-people">{item.people} people</li>
                </ul>
              </div>
              <Link className="recipe-button" to={`/detail/${item._id}`}>
                See more
              </Link>
              <Link className="recipe-arrow" to={`/detail/${item._id}`}>
                <img alt="arrow" src="arrow-right-solid.svg" />
              </Link>
            </div>
          </div>
        );
      })}
    </RecipiesStyleComponent>
  );
};

export default Recipies;
