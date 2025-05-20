import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout";
import Home from "../homeLayout/Home";
import AddPlant from "../pages/AddPlant";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllPlants from "../pages/AllPlants";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            index: true,
            element:<Home/>
        },
        {
            path: "add-plant",
            element:<AddPlant/>
        },
        {
            path: "login",
            element:<Login/>
        },
        {
            path: "register",
            element:<Register/>
        },
        {
            path: "all-plants",
            element:<AllPlants/>
        }
    ]
  },
]);