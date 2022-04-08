import { useParams } from "react-router-dom";
import DetailsRecipe from "../../components/DetailsRecipe/DetailsRecipe";
import fakeRecipies from "../../utils/fakeRecipies";
import "./style.css";

export default function Detail() {
  const { id } = useParams();

  const detailsRecipe = fakeRecipies.filter((recipe) => recipe._id === id);

  const [recipeObject] = detailsRecipe;
  return <DetailsRecipe recipeObject={recipeObject} />;
}
