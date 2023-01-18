import { Route, Routes as RouteList } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";

const Routes = () => {
  return (
    <RouteList>
      <Route path="/" element={<MainPage />} />
      <Route path="/search" element={<SearchPage />} />
    </RouteList>
  );
};

export default Routes;
