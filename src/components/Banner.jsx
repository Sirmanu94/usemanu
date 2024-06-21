import background from '../assets/banner3.png';
import { Fade } from "react-awesome-reveal";
import { Link, useNavigate } from 'react-router-dom';


function Banner() {
  return (
    <Fade duration={4500}>
      <section
        className="bg-black text-white "
        style={{ 
          backgroundImage: `url(${background})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '800px' 
        }} 
      >
        <div className=" h-full flex mt-10 justify-center items-center max-[768px]:-mt-50">
          <div className="mx-auto max-w-screen-xl lg:flex lg:h-full lg:items-center">
            <div className="mx-auto max-w-3xl text-center max-[768px]:text-center w-2/3">
              <h1 
                className="text-white text-4xl font-extrabold sm:text-5xl  max-[768px]:text-2xl "
              >
                TRASFORMA LE TUE IDEE IN REALTA'
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg sm:text-2xl text-gray-200">
                Sviluppiamo siti e applicazioni web performanti e personalizzati per le tue esigenze aziendali.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-6">
                <Link to='/contattaci'
                  className="block w-auto rounded border border-white bg-yellow-300 px-8 py-4 text-base font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition-colors duration-300 max-[768px]:w-52"
                  
                >
                  CONTATTACI
                </Link>

                <Link to='/sitiweb'
                  className="block w-auto rounded border border-white px-8 py-4 text-base font-medium text-white hover:bg-yellow-300 hover:text-black focus:outline-none focus:ring active:bg-blue-500 sm:w-auto transition-colors duration-300 max-[768px]:w-52"
                  href="#"
                >
                  SCOPRI DI PIU'
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default Banner;
