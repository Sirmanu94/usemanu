import Navbar from "../components/Navbar";
import js from '../assets/js.png';
import react from '../assets/react.png';
import shopify from '../assets/shopify.png';
import wordpress from '../assets/wordpress.png';
import background from '../assets/background.mp4';
import { Fade, Slide } from "react-awesome-reveal";

function Cms() {
  return (
    <div className="relative">
      {/* Video come sfondo */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={background} type="video/mp4" />
      </video>

      {/* Overlay scuro per rendere il testo leggibile */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Contenuto */}
      <div className="relative z-10">

        {/* Contenitore principale */}
        <div className="bg-cover bg-center py-16" style={{ backgroundImage: "url('your-background-image-url')" }}>
          <section className="text-center py-4">
            <Fade triggerOnce={true} duration={3500}>
              <h2 className="text-3xl font-bold text-gray-300 lg:text-3xl sm:px-12 lg:px-12">
                Scopri le nostre soluzioni CMS e scegli quella più adatta alle tue esigenze. <br/>
                Crea e gestisci il tuo negozio online con facilità e professionalità.
              </h2>
            </Fade>
          </section>

          {/* Sezioni delle tecnologie */}
          <Slide direction={'left'} triggerOnce={false} duration={3500}>
            <section>
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                    <img
                      alt=""
                      src={shopify}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  <div className="lg:py-24">
                    <h2 className="text-3xl font-bold sm:text-4xl text-green-400">
                      Costruisci il Tuo Successo Online con Shopify
                    </h2>
                    <p className="mt-4 text-gray-400">
                      Scopri la potenza di Shopify per trasformare la tua idea in un business online di successo. Con strumenti intuitivi, design professionali e supporto dedicato 24/7, creare e gestire il tuo negozio online non è mai stato così semplice. Approfitta delle integrazioni con i principali social media e dei potenti strumenti di marketing per raggiungere clienti in tutto il mondo. Inizia oggi e rendi il tuo sogno realtà!
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Slide>

          <Slide direction={'right'} triggerOnce={false} duration={3500}>
            <section>
              <div className="mx-auto -mt-15 max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                    <img
                      alt="JavaScript"
                      src={wordpress}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  <div className="lg:py-24">
                    <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: '#21759B' }}>
                      Personalizza al massimo il tuo E-commerce con WordPress
                    </h2>
                    <p className="mt-2 text-gray-400">
                      Sfrutta la flessibilità e la personalizzazione di WordPress per creare un negozio online unico. Grazie a migliaia di temi e plugin disponibili, puoi costruire un sito su misura per le tue esigenze. Goditi il controllo completo sul design e le funzionalità del tuo e-commerce, con l'ulteriore vantaggio di un'ampia comunità di supporto e risorse. Avvia il tuo negozio online con WordPress e raggiungi il successo con stile!
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Slide>

          {/* Call to Action */}
          <section className="text-center py-8">
            <div className="mx-auto max-w-screen-md">
              <Fade triggerOnce={true} duration={3500}>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Pronto a Iniziare?
                </h2>
                <p className="mt-4 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                  Compila il form oggi gratuitamente per scoprire come possiamo aiutarti a costruire il tuo e-commerce di successo con i migliori CMS sul mercato.
                </p>
                <a href="#" className="inline-flex justify-center items-center mt-8 py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                  Contattaci
                </a>
              </Fade>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Cms;
