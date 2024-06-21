import laura from "../assets/laura.jpg";
import laura2 from "../assets/laura2.jpg";
import { Fade, Slide, Bounce, Zoom,Roll} from "react-awesome-reveal";


function Laura(){
    return(
        <>
        <Zoom duration={2500}>
        <section className="">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-white sm:text-3xl">BIJOUXMODALAURA.COM</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
        Brand di gioielli ed accessori che punta molto alla personalizzazione del prodotto. Difatti è stato totalmente personalizzato ogni campo di input per permettere agli utenti di poter svolgere ogni tipo di azione, dallo scrivere una frase a caricare una foto esempio.
      </p>
    </header>

    <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li className="lg:col-span-3">
        <a href="#" className="group relative block">
          <img
            src={laura}
            alt=""
            className="rounded-md w-full object-contain transition duration-500 group-hover:opacity-90 shadow-lg group-hover:shadow-xl group-hover:transform group-hover:-translate-y-2"
          />
        </a>
      </li>

      <li>
        <a href="#" className="group relative block">
          <img
            src={laura2}
            alt=""
            className="rounded-md w-full object-contain transition duration-500 group-hover:opacity-90 shadow-lg group-hover:shadow-xl group-hover:transform group-hover:-translate-y-2"
          />
        </a>
      </li>
    </ul>
  </div>
</section>
</Zoom>
        </>
    )
}

export default Laura;

