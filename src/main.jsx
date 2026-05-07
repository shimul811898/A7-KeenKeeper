import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import { router } from "./routes/Routes";
import KeeperProvider from "./context/KeeperContext";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <KeeperProvider>
  <RouterProvider router={router} />
</KeeperProvider>
);
