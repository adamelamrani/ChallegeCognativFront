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
          <h1 className="recipe-detail-name">{recipeObject.name}</h1>
          <h2 className="recipe-detail-category">
            {recipeObject.categoryName}
          </h2>
          <ul className="recipe-detail-stuff">
            <li className="recipe-detail-time">
              {recipeObject.duration} minutes
            </li>
            <li className="recipe-detail-complexity">
              {recipeObject.complexity}
            </li>
            <li className="recipe-detail-people">
              {recipeObject.people} people
            </li>
          </ul>
          <ul className="ingredients">
            <h2>Ingredients</h2>
            {recipeObject.ingredients.map((ingredient) => (
              <li key={recipeObject._id}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom">
        <h3 className="description">Info</h3>
        <p className="description-text">{recipeObject.description}</p>
      </div>
    </div>
  );
};

export default DetailsRecipe;
