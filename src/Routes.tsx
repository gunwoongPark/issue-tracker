import { Route, Routes as RouteList } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IssuesPage from "./pages/IssuesPage";
import SearchPage from "./pages/SearchPage";

const Routes = () => {
  return (
    <RouteList>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/issues/:owner/:repoName" element={<IssuesPage />} />
    </RouteList>
  );
};

export default Routes;
