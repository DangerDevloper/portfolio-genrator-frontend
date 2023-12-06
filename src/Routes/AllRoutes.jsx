import Generation from "../Components/Generation";
import Home from "../Components/Home";
import Resume from "../Components/resume";
import {Routes,Route} from "react-router-dom"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/generation" element={<Generation />}></Route>
      <Route path="/:id" element={<Resume />}></Route>
    </Routes>
  );
};

export default AllRoutes;
