import { Link } from "react-router-dom";
import Recipies from "../../components/Recipies/Recipies";
import RecommendedRecipies from "../../components/RecommendedRecipies/RecommendedRecipies";
import "./style.css";

export default function Home() {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <h2>Food recipes</h2>
        </Link>
      </div>
      <div className="page">
        <div className="container-top">{<RecommendedRecipies />}</div>
        <div className="container-bottom">
          <Recipies />
        </div>
      </div>
    </div>
  );
}
