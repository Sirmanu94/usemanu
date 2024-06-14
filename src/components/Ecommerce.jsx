import ecomm from '../assets/ecommvideo.mp4';
import Cms from './Cms';

function Ecommerce() {
  const handleVideoEnd = (event) => {
    // Mantiene l'ultima immagine del video
    event.target.pause();
    event.target.currentTime = event.target.duration;
  };

  return (
    <>
      <section className="mt-20 relative bg-cover bg-center bg-no-repeat">
        {/* Video come sfondo */}
        <video
          autoPlay
          muted
          onEnded={handleVideoEnd}
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={ecomm} type="video/mp4" />
        </video>

        {/* Overlay per rendere il testo leggibile */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
              Crea il tuo E-commerce
              <strong className="block font-extrabold text-yellow-300"> su misura. </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Trasforma la tua attività in un successo online con un e-commerce personalizzato e performante creato attraverso le più comuni piattaforme.
            </p>

            <div className="mt-8 flex justify-center items-center">
              <button className="border border-white text-white rounded-full font-bold hover:text-yellow-300 px-8 py-2">
                Scopri di più
              </button>
            </div>
          </div>
        </div>
      </section>
      <Cms/>
    </>
  );
}

export default Ecommerce;
