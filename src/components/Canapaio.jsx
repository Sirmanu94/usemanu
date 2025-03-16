import { Zoom } from "react-awesome-reveal";
import efs from "../assets/efs.png";
import efs2 from "../assets/efs2.jpg";
import canavideo from "../assets/canavideo.mov";
import canafoto from "../assets/canafoto.png";
function Efs(){
    return(
      <>
      <Zoom duration={2500}>
      <section className="">
<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <header className="text-center">
    <h2 className="text-xl font-bold text-white sm:text-3xl">CANAPAIOVESUVIANO.COM</h2>

    <p className="mx-auto mt-4 max-w-ld text-gray-500">
E-Commerce di prodotti a base di CBD completamente naturali. <br/>Stay chill, Stay Green !   </p>
  </header>

  <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
  <li>
      <a href="#" className="group relative block">
        <video
              autoPlay
              muted
              loop
              playsInline
          src={canavideo}
          alt=""
          className="rounded-md w-full object-contain transition duration-500 group-hover:opacity-90 shadow-lg group-hover:shadow-xl group-hover:transform group-hover:-translate-y-2"
        />
      </a>
    </li>
    <li className="lg:col-span-3">
      <a href="#" className="group relative block">
        <img
          src={canafoto}
          alt=""
          className="rounded-md w-full object-contain transition duration-500 group-hover:opacity-90 shadow-lg group-hover:shadow-xl group-hover:transform group-hover:-translate-y-2"
        />
      </a>
    </li>


  </ul>
</div>
</section></Zoom>
      </>
    )
}

export default Efs;
