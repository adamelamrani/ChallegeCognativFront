import { Link } from "react-router-dom";
import fakeRecommendations from "../../utils/fakeRecommendations";

const RecommendedRecipies = () => {
  return (
    <div>
      <h1 className="title">Recommended</h1>
      <div className="recommendations">
        {fakeRecommendations.map((item, index) => {
          return (
            <Link to="/detail" key={index}>
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
