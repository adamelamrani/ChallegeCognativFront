import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Detail from "./pages/recipe/Detail";

const App = () => {
  return (
    <>
      <Routes>
        <Layout>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Layout>
      </Routes>
    </>
  );
};

export default App;
