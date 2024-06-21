import { Zoom } from "react-awesome-reveal";
import find from "../assets/find1.mov";
import find2 from "../assets/find2.jpg";

function Find(){
    return(
        <>
        <Zoom duration={2500}>
        <section className="">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-white sm:text-3xl">Find&Fix</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
        Find&Fix è un servizio che ha come obiettivo quello di facilitare i contatti tra professionisti per la casa e potenziali clienti. Ci si può registrare come utenti o come professionisti.
        In base alla posizione e al tipo di abbonamento sottoscritto il sistema matcherà clienti e professionisti rispettando tutte le egigenze.
        Per migliorare l'esperienza è stata implementata una chat di assistenza virtuale.
      </p>
    </header>

    <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
   

      <li>
        <a href="#" className="group relative block">
          <img
            src={find2}
            alt=""
            className="rounded-md group-hover:transform group-hover:-translate-y-2 w-full object-contain transition duration-500 group-hover:opacity-90 max-[768px]:h-100"
          />
        </a>
      </li>
      <li className="lg:col-span-3">
        <a href="#" className="group relative block">
          <video
            src={find}
            autoPlay
            muted
            loop
            className=" rounded-md w-full group-hover:transform group-hover:-translate-y-2 object-contain transition duration-500 group-hover:opacity-90"
          />
        </a>
      </li>

  
    </ul>
  </div>
</section></Zoom>
        </>
    )
}

export default Find;
