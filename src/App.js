import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/recipe/Detail";

function App() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <h2>Food recipes</h2>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/detail/:id`} element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
