import { Route, Routes as RouteList } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";

const Routes = () => {
  return (
    <RouteList>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </RouteList>
  );
};

export default Routes;
