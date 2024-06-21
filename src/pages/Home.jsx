import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Ecommerce from "../components/Ecommerce";
import Footer from "../components/Footer";
import Junbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Videobanner from "../components/Videobanner";
import { Fade, Slide } from "react-awesome-reveal";
import { useEffect } from "react";


function Home(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return(
     <>
     <Navbar/>
     <Junbotron/>
     <Banner/>
     <Videobanner/>
     <Cards/>
     <Ecommerce/>
     <Fade duration={3500}>
     
     <section className="relative bg-progetti opacity-90 bg-cover bg-center bg-no-repeat mt-10">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative mx-auto w-full px-4 py-32 sm:px-6 lg:flex lg:h-84 lg:items-center lg:px-8">
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
        Dai un'occhiata ad alcuni dei nostri progetti
      </h1>

      <div className="mt-12 text-center">
        <Link to='/progetti'
          className="inline-block rounded bg-yellow-300 px-12 py-3 text-sm font-medium text-black transition hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          PROGETTI
        </Link>
      </div>
    </div>
  </div>
</section>
</Fade>
     <Footer/>

    </>
    )
}

export default Home