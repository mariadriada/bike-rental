import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import { HomePage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>hello</h1>,
    errorElement: <div>Page not found!</div>,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

export const CustomRouterProvider = () => (
  <RouterProvider router={router}></RouterProvider>
);
