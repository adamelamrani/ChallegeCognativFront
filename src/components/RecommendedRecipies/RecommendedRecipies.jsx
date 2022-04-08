import { Link } from "react-router-dom";
import fakeRecommendations from "../../utils/fakeRecommendations";

const RecommendedRecipies = ({ renderImageBox }) => {
  return (
    <div>
      <h1 className="title">Recommended</h1>
      <div className="recommendations">
        {fakeRecommendations.map((item, index) => {
          return (
            <Link to="/detail" key={index}>
              {renderImageBox(item)}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendedRecipies;
