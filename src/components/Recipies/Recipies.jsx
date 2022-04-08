import { Link } from "react-router-dom";
import fakeRecipies from "../../utils/fakeRecipies";

const Recipies = ({ renderImage }) => {
  return (
    <div className="recipes">
      <h1 className="recipes-title">Top selection</h1>
      {fakeRecipies.map((item, index) => {
        return (
          <div className="recipe">
            {renderImage(item)}
            <div className="recipe-info">
              <div>
                <p className="recipe-category">{item.categoryName}</p>
                <h1 className="recipe-name">{item.name}</h1>
                <div className="recipe-stuff">
                  <p className="recipe-time">{item.duration} minutes</p>
                  <p className="recipe-complexity">{item.complexity}</p>
                  <p className="recipe-people">{item.people} people</p>
                </div>
              </div>
              <Link className="recipe-button" to="/detail" key={index}>
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
