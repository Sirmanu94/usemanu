 import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import EcommercePage from "./pages/EcommercePage";
import SitiWeb from "./pages/Sitiweb";
import Progetti from "./pages/Progetti";
import CreateReview from "./pages/CreateReview";
import Form from "./components/Form";
import Contattaci from "./pages/Contattaci";
import NotFound from "./pages/NotFound";
import Termini from "./pages/Termini";

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
    {
        path:'progetti',
        element:<Progetti/>
    },
    {
        path:'/createReview',
        element:<CreateReview/>
    },
    {
        path:'/contattaci',
        element:<Contattaci/>
    },
    {
        path:"termini",
        element: <Termini/>
    },
    {
        path: "*",
        element: <NotFound />,
    },
 ]
 )

 export default Router