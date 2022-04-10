import { useParams } from "react-router-dom";
import DetailsRecipe from "../../components/DetailsRecipe/DetailsRecipe";
import { Recipe, RecipiesArray } from "../../interfaces/Recipe";
import fakeRecipies from "../../utils/fakeRecipies";
import "./style.css";

const Detail: React.FunctionComponent = (): JSX.Element => {
  const { id } = useParams();

  const recipeDetails: RecipiesArray = fakeRecipies.filter(
    (recipe: Recipe) => recipe._id === id
  );
  const [recipeObject]: RecipiesArray = recipeDetails;

  return <DetailsRecipe recipeObject={recipeObject} />;
};

export default Detail;
