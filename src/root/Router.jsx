import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>
  },
]);