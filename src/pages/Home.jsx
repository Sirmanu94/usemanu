import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Ecommerce from "../components/Ecommerce";
import Footer from "../components/Footer";
import Junbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Videobanner from "../components/Videobanner";

function Home(){
    return(
     <>
     <Navbar/>
     <Junbotron/>
     <Banner/>
     <Videobanner/>
     <Cards/>
     <Ecommerce/>
     <Footer/>

    </>
    )
}

export default Home