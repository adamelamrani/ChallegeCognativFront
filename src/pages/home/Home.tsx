import Recipies from "../../components/Recipies/Recipies";
import RecommendedRecipies from "../../components/RecommendedRecipies/RecommendedRecipies";
import HomeStyleComponent from "./HomeStyleComponent";

const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <HomeStyleComponent className="page">
      <div className="container-top">{<RecommendedRecipies />}</div>
      <div className="container-bottom">
        <Recipies />
      </div>
    </HomeStyleComponent>
  );
};

export default Home;
