import { Link } from "react-router-dom";
import { Recipe } from "../../interfaces/Recipe";
import fakeRecipies from "../../utils/fakeRecipies";

const RecommendedRecipies = (): JSX.Element => {
  return (
    <div className="recommended-container">
      <h2 className="title">Recommended</h2>
      <div className="recommendations">
        {fakeRecipies.map((item: Recipe) => {
          return (
            <Link to={`/detail/${item._id}`} key={item._id}>
              <img
                className="recommended-image"
                alt={`${item.name} recipe`}
                src={
                  item.photo ? item.photo : "http://via.placeholder.com/640x360"
                }
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendedRecipies;