// ...existing code...
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import InteractiveMapPage from "./screens/InteractiveMapPage";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <LandingPage />, 
  },
  {
    path: "/map",
    element: <InteractiveMapPage />, 
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
