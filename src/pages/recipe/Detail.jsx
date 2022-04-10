import { useParams } from "react-router-dom";
import DetailsRecipe from "../../components/DetailsRecipe/DetailsRecipe";
import fakeRecipies from "../../utils/fakeRecipies";
import "./style.css";

const Detail = () => {
  const { id } = useParams();

  const recipeDetails = fakeRecipies.filter((recipe) => recipe._id === id);
  const [recipeObject] = recipeDetails;

  return <DetailsRecipe recipeObject={recipeObject} />;
};

export default Detail;
