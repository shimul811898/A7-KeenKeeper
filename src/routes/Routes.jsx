import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Keeper from "../pages/homepage/keeper/Keeper";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout ,
    children: [
      {
        index: true,
        element:<Homepage />
      },
      {
        path: "/keeper",
        element: <Keeper />
      }
    ],
    errorElement: <ErrorPage />,
  },
 
]);