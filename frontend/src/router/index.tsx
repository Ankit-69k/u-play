import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { paths } from "./paths";
import HomePage from "@/pages/home";

export default function Router() {
  return useRoutes([...root]);
}

const root = [
  {
    path: paths.home,
    element: <HomePage />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
];

export * from "./paths";
