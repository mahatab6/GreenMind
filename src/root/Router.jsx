import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout";
import Home from "../homeLayout/Home";
import AddPlant from "../pages/AddPlant";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllPlants from "../pages/AllPlants";
import DetailsPage from "../pages/DetailsPage";
import MyPlant from "../pages/MyPlant";
import Update from "../pages/Update";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import PrivateRouter from "../context/PrivateRouter";
import Dashboard from "../dashboardLayout/Dashboard";
import Plants from "../dashboardLayout/dashboardComponents/Plants";


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
            element:<PrivateRouter><AddPlant/></PrivateRouter>
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
        },
        {
            path: "plants-details/:id",
            element:<PrivateRouter><DetailsPage/></PrivateRouter>
        },
        {
            path: "my-plants",
            element:<PrivateRouter><MyPlant/></PrivateRouter>
        },
        {
            path: "update/:id",
            element:<Update/>
        },
        {
            path: "contact",
            element:<Contact/>
        },
        // {
        //     path: "*",
        //     element:<NotFound/>
        // }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRouter><Dashboard/></PrivateRouter>,
    children: [
        {
            index: 'true',
            element:<Plants/>

        }
    ]
  }

]);