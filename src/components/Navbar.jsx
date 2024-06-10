import fullstack from '../assets/fullstack.png';
import logoNavbar from '../assets/logonero.png'; // Percorso corretto per l'immagine

function Navbar() {
  return (
    <>
        {/* <video
          className="absolute top-0 left-0 w-full h-28 object-cover z-0"
          src={video2}
          autoPlay
          loop
          muted
        >
        </video> */}
      <header className="mt-6 text-white shadow-lg md:block relative">
        <div className="absolute inset-0 bg-black mt-8 bg-opacity-20 z-10"></div>
        <div className="container mx-auto flex items-center h-24 relative z-20">
          <a href="" className="flex items-center justify-center">
            <img
              className="h-20"
              src={logoNavbar}
              alt="Logo"
            />
            <img
              className="h-4 ml-10"
              src={fullstack}
              alt="Fullstack"
            />
          </a>
          <nav className="contents font-semibold text-base lg:text-lg">
            <ul className="mx-auto flex items-center">
              <li className="p-5 xl:p-8 active">
                <a href="">
                  <span>Home</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>About</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Projects</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Services</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </nav>
          <button className="border border-white rounded-full font-bold px-8 py-2">
            Contact me
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
