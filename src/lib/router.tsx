import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RepoDetails from "../pages/RepoDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/repo/:name",
    element: <RepoDetails />,
  },
]);
