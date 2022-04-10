import { Link } from "react-router-dom";
import { Recipe } from "../../interfaces/Recipe";
import fakeRecipies from "../../utils/fakeRecipies";

const Recipies = (): JSX.Element => {
  return (
    <div className="recipes">
      <h2 className="recipes-title">Top selection</h2>
      {fakeRecipies.map((item: Recipe) => {
        return (
          <div className="recipe">
            <img
              className="recipe-image"
              alt={`${item.name} recipe`}
              src={
                item.photo ? item.photo : "http://via.placeholder.com/640x360"
              }
            />
            <div className="recipe-info">
              <div>
                <h1 className="recipe-name">{item.name}</h1>
                <p className="recipe-category">{item.categoryName}</p>
                <ul className="recipe-stuff">
                  <li className="recipe-time">{item.duration} minutes</li>
                  <li className="recipe-complexity">{item.complexity}</li>
                  <li className="recipe-people">{item.people} people</li>
                </ul>
              </div>
              <Link
                className="recipe-button"
                to={`/detail/${item._id}`}
                key={item._id}
              >
                See more
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Recipies;
