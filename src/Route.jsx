 import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";

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
        

    }
 ]
 )

 export default Router