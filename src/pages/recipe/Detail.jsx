import { Link } from "react-router-dom";
import fakeData from "../../utils/fakeData";
import "./style.css";

export default function Detail() {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <h1>Food recipes</h1>
        </Link>
      </div>
      <div className="page">
        <div className="top">
          <img
            className="details-image"
            alt={`${fakeData.name} recipe`}
            src={
              fakeData.photo
                ? fakeData.photo
                : "http://via.placeholder.com/640x360"
            }
          />
          <div className="top-information">
            <p className="recipe-detail-category">{fakeData.categoryName}</p>
            <h1 className="recipe-detail-name">{fakeData.name}</h1>
            <div className="recipe-detail-stuff">
              <p className="recipe-detail-time">{fakeData.duration} minutes</p>
              <p className="recipe-detail-complexity">{fakeData.complexity}</p>
              <p className="recipe-detail-people">{fakeData.people} people</p>
            </div>
            <div className="ingredients">
              <h4>Ingredients</h4>
              {fakeData.ingredients.split("\r\n").map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="bottom">
          <h4 className="description">Info</h4>
          <p className="description-text">{fakeData.description}</p>
        </div>
      </div>
    </div>
  );
}
