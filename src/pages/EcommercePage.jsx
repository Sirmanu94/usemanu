import Navbar from "../components/Navbar";
import background from '../assets/background.mp4';
import Cms from "../components/Cms";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function EcommercePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="relative">
            <Navbar />
            <video
                autoPlay
                loop
                muted
                className="fixed top-0 left-0 w-full h-full object-cover z-[-10]"
            >
                <source src={background} type="video/mp4" />
            </video>

            <section className="relative h-screen -mt-15 flex items-center justify-center bg-center bg-contain bg-no-repeat bg-ecomm bg-cover">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Opacità per lo sfondo */}
                <div className="relative px-4 mx-auto max-w-screen-xl text-center text-white">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Investi nel tuo potenziale</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Scopri come costruire un negozio online di successo con le nostre soluzioni complete e personalizzate, e inizia a vendere in tutto il mondo.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                       <Link to="/contattaci">
                        <button className="border border-white rounded-full font-bold px-8 py-2 hover:text-yellow-300 hover:border-yellow-300 transition-colors duration-300">
            Inizia Ora
          </button> </Link>
       
                       
                    </div>
                </div>
            </section>
            <Cms/>
            <Footer/>
        </div>
    )
}

export default EcommercePage;
