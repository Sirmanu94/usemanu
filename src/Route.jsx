 import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import EcommercePage from "./pages/EcommercePage";
import SitiWeb from "./pages/Sitiweb";

 const Router = createBrowserRouter([
    {
        path: "/", 
        element: <Home/>
    },

    {
        path: "/about",
        element: <About/>,
        children:[
            {
                
            }
        ]
        

    },
    {
        path:"/e-commerce",
        element: <EcommercePage/>
    },
    {
        path:"/sitiweb",
        element: <SitiWeb/>
    },
 ]
 )

 export default Router