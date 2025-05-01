import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NotFound from "../Pages/Shared/NotFound/NotFound";
import Visa from "../Pages/Visa/Visa";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";



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
                path: "/visa",
                element: <Visa />,
            },
            {
                path:'/sign-up',
                element:<SignUp></SignUp>,
            },
            {
                path:'/login',
                element:<LogIn></LogIn>,
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
    },
    {
        path: '*',
        element:<NotFound></NotFound>,
    }
]);
export default router;