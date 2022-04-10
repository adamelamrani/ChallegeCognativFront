import { Link } from "react-router-dom";
import { Recipe } from "../../interfaces/Recipe";
import fakeRecipies from "../../utils/fakeRecipies";
import RecommendedRecipiesStyle from "./RecommendedRecipiesStyle";

const RecommendedRecipies = (): JSX.Element => {
  return (
    <RecommendedRecipiesStyle className="recommended-container">
      <h2 className="title">Recommended</h2>
      <div className="recommendations">
        {fakeRecipies.map((item: Recipe, index: number) => {
          return (
            <Link to={`/detail/${item._id}`} key={index}>
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
    </RecommendedRecipiesStyle>
  );
};

export default RecommendedRecipies;
