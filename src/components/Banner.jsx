import background from '../assets/banner3.png';

function Banner() {
  return (
    <section
      className="bg-black text-white mt-[-40px]"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '600px' }} // Aumenta l'altezza del banner
    >
      <div className="bg-black bg-opacity-0 h-full"> {/* Assicurati che l'overlay copra l'intero banner */}
        <div className="mx-auto max-w-screen-xl px-4 py-48 lg:flex lg:h-full lg:items-center"> {/* Aumenta il padding verticale */}
          <div className="mx-auto max-w-3xl text-center -mt-20">
            <h1 className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Trasforma le tue idee in realtà
              <span className="sm:block"> </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Sviluppo siti web e applicazioni web performanti e personalizzati per le tue esigenze aziendali
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-white bg-yellow-300 px-12 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                CONTATTAMI
              </a>

              <a
                className="block w-full rounded border border-white px-12 py-3 text-sm font-medium text-white hover:bg-yellow-300  hover:text-black focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                SCOPRI DI PIU'
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner