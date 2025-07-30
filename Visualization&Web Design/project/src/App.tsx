import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { TeamPage } from "./screens/TeamPage";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <TeamPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
