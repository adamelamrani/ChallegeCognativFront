const DetailsRecipe = ({ recipeObject }) => {
  return (
    <div className="page">
      <div className="top">
        <img
          className="details-image"
          alt={`${recipeObject.name} recipe`}
          src={
            recipeObject.photo
              ? recipeObject.photo
              : "http://via.placeholder.com/640x360"
          }
        />
        <div className="top-information">
          <p className="recipe-detail-category">{recipeObject.categoryName}</p>
          <h1 className="recipe-detail-name">{recipeObject.name}</h1>
          <div className="recipe-detail-stuff">
            <p className="recipe-detail-time">
              {recipeObject.duration} minutes
            </p>
            <p className="recipe-detail-complexity">
              {recipeObject.complexity}
            </p>
            <p className="recipe-detail-people">{recipeObject.people} people</p>
          </div>
          <div className="ingredients">
            <h4>Ingredients</h4>
            {recipeObject.ingredients.split("\r\n").map((ingredient) => (
              <p key={recipeObject._id}>{ingredient}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom">
        <h4 className="description">Info</h4>
        <p className="description-text">{recipeObject.description}</p>
      </div>
    </div>
  );
};

export default DetailsRecipe;
