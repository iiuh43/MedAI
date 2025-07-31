import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./screens/About";
import { TeamPage } from "./screens/About/TeamPage"; // <-- Import TeamPage

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/teams",
    element: <TeamPage />, // <-- Add this route
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
