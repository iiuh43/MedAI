import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./screens/About";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <About />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
