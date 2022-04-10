import { Link } from "react-router-dom";
import fakeRecommendations from "../../utils/fakeRecommendations";

const RecommendedRecipies = () => {
  return (
    <div>
      <h2 className="title">Recommended</h2>
      <div className="recommendations">
        {fakeRecommendations.map((item) => {
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
