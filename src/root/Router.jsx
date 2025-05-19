import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout";
import Home from "../homeLayout/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            index: true,
            element:<Home/>
        },
    ]
  },
]);