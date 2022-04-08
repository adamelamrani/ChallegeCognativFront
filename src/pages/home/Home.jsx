import { Link } from "react-router-dom";
import Recipies from "../../components/Recipies/Recipies";
import RecommendedRecipies from "../../components/RecommendedRecipies/RecommendedRecipies";
import "./style.css";

export default function Home() {
  function renderImage(item) {
    let imageUrl = "http://via.placeholder.com/640x360";
    if (item && item.photo) {
      imageUrl = item.photo;
    }
    return <img className="recipe-image" src={imageUrl} />;
  }
  function renderImageBox(item) {
    let imageUrl = "http://via.placeholder.com/640x360";
    if (item && item.photo) {
      imageUrl = item.photo;
    }
    return <img className="recommended-image" src={imageUrl} />;
  }

  return (
    <div>
      <div className="header">
        <Link to="/">
          <h1>Food recipes</h1>
        </Link>
      </div>
      <div className="page">
        <div className="container-top">
          {<RecommendedRecipies renderImageBox={renderImageBox} />}
        </div>
        <div className="container-bottom">
          <Recipies renderImage={renderImage} />
        </div>
      </div>
    </div>
  );
}
