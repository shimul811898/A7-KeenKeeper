import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Keeper from "../pages/keeper/Keeper";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import KeeperDetails from "../pages/KeeperDetails/KeeperDetails";
import DashBoard from "../pages/dashboard/DashBoard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/keeper",
        element: <Keeper />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/keeperDetails/:id",
        Component: KeeperDetails,
        loader: () => fetch("/KeeperData.json"),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);