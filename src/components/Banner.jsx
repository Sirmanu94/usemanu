import background from '../assets/banner3.png';

function Banner() {
  return (
    <section
      className="bg-black text-white mt-[-40px]"
      style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '800px' 
      }} 
    >
      <div className="bg-black bg-opacity-0 h-full flex justify-center items-center">
        <div className="mx-auto max-w-screen-xl px-8 py-64 lg:flex lg:h-full lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 
              className="text-white text-4xl font-extrabold text-transparent sm:text-5xl whitespace-nowrap"
            >
              TRASFORMA LE TUE IDEE IN REALTA'
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg sm:text-2xl text-gray-200">
              Sviluppiamo siti e applicazioni web performanti e personalizzati per le tue esigenze aziendali.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <a
                className="block w-full rounded border border-white bg-yellow-300 px-16 py-4 text-base font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                CONTATTACI
              </a>

              <a
                className="block w-full rounded border border-white px-16 py-4 text-base font-medium text-white hover:bg-yellow-300 hover:text-black focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
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

export default Banner;
