import js from '../assets/js.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import background from '../assets/background.mp4';
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";



function Cards() {
  return (
    <div className="relative">
      {/* Video come sfondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={background} type="video/mp4" />
      </video>

      {/* Overlay scuro per rendere il testo leggibile */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Contenuto */}
      <div className="relative z-10">
        {/* Titolo principale */}
        <section className="text-center py-8">
          <Fade triggerOnce={true} duration={4500}>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            PRINCIPALI TECNOLOGIE
          </h1>
          </Fade>
        </section>

        {/* Sezioni delle tecnologie */}
         <Slide direction={'left'} triggerOnce={false} duration={3500}>
           <section>
        
          <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-4 lg:py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
              <div className="relative h-48 overflow-hidden rounded-lg sm:h-64 lg:order-last lg:h-full">
                <img
                  alt="React"
                  src={react}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-12">
                <h2 className="text-2xl text-white font-bold sm:text-3xl">
                  Crea interfacite utente dinamiche e reattive con React.
                </h2>
                <p className="mt-2 text-gray-300">
                  Sviluppo siti web moderni e performanti con la libreria JavaScript React.
                </p>
              </div>
            </div>
          </div>
        </section>
        </Slide>
        <Slide direction={'right'} triggerOnce={false} duration={3500}>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-4 lg:py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
              <div className="relative h-48 overflow-hidden rounded-lg sm:h-64 lg:h-full">
                <img
                  alt="JavaScript"
                  src={js}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-12">
                <h2 className="text-2xl text-white font-bold sm:text-3xl">
                  Il linguaggio del web: sviluppo versatile con JavaScript.
                </h2>
                <p className="mt-2 text-gray-300">
                  Realizza siti web interattivi e funzionalità avanzate con JavaScript.
                </p>
              </div>
            </div>
          </div>
        </section>
        </Slide>

<Slide direction={'left'} triggerOnce={false} duration={3500}>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-4 lg:py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
              <div className="relative h-48 overflow-hidden rounded-lg sm:h-64 lg:order-last lg:h-full">
                <img
                  alt="Node.js"
                  src={node}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-12">
                <h2 className="text-2xl text-white font-bold sm:text-3xl">
                  Sviluppo backend efficiente con Node.js.
                </h2>
                <p className="mt-2 text-gray-300">
                  Crea applicazioni web scalabili e performanti con Node.js.
                </p>
              </div>
            </div>
          </div>
        </section>
        </Slide>
      </div>
    </div>
  );
}

export default Cards;
