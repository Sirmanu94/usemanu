import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Tecnologie from "../components/Tecnologie";

import background from "../assets/background.mp4";
import sito from "../assets/www2.png";
import { Fade, Slide } from "react-awesome-reveal";
import SectionSiti from "../components/SectionSiti";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

function SitiWeb() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative">
        <video
          autoPlay
          playsInline
          loop
          muted
          className="fixed top-0 left-0 w-full h-full object-cover z-[-10]"
        >
          <source src={background} type="video/mp4" />
        </video>

        <Fade duration={2500}>
          <div className="relative z-10 flex justify-center -mt-12 max-[768px]:hidden">
            <img className="w-full object-cover opacity-80" src={sito} alt="sito" />
            <div className="absolute top-1/3 left-2/4  text-left text-white">
              <h1 className="lg:text-6xl font-bold mb-4 sm:text-2xl" >
                Realizza il tuo Sito Web Professionale
              </h1>
              <p className="lg:text-2xl sm:text-xl">
                Siti Vetrina, Blog e su misura per tutte le esigenze. <br />
                Tutti i nostri lavori sono Responsive e Facili da Gestire.
              </p>
              <Link to="/contattaci">
              <button className="border mt-5 border-white rounded-full font-bold px-8 py-2 hover:text-yellow-300 hover:border-yellow-300 transition-colors duration-300">
                RICHIEDI UN PREVENTIVO GRATUITO{" "}
              </button>
              </Link>
            </div>
          </div>
        </Fade>
        <Slide duration={2500}>
          <Fade duration={2500}>
            <SectionSiti />
          </Fade>
        </Slide>
        <Slide direction="right" duration={2500}>
          <Fade duration={2500}>
            <Tecnologie />
          </Fade>
        </Slide>
        {/* Pubblicità per i progetti */}
        {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section className="relative bg-progetti opacity-90 bg-cover bg-center bg-no-repeat">
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

        <Footer />
      </div>
    </>
  );
}

export default SitiWeb;
