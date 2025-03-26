import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";



const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/about',
                element:<About></About>,
            },
            {
                path:'/contact',
                element:<Contact></Contact>,
            },
        ]
    }
])
export default router;