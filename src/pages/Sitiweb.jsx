import React from "react";
import Navbar from "../components/Navbar";
import Tecnologie from "../components/Tecnologie";

import background from "../assets/background.mp4";
import sito from "../assets/www2.png";
import { Fade, Slide } from "react-awesome-reveal";
import SectionSiti from "../components/SectionSiti";

function SitiWeb() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          className="fixed top-0 left-0 w-full h-full object-cover z-[-10]"
        >
          <source src={background} type="video/mp4" />
        </video>

        <Fade duration={2500}>
          <div className="relative z-10 flex justify-center -mt-12">
            <img className="w-full  opacity-95" src={sito} alt="sito" />
            <div className="absolute top-1/3 left-2/4  text-left text-white">
              <h1 className="text-6xl font-bold mb-4">
                Realizza il tuo Sito Web Professionale
              </h1>
              <p className="text-2xl">
                Siti Vetrina, Blog e su misura per tutte le esigenze. <br />
                Tutti i nostri lavori sono Responsive e Facili da Gestire.
              </p>
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
      </div>
    </>
  );
}

export default SitiWeb;
