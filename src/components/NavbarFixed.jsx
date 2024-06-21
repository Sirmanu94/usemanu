import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fullstack from '../assets/fullstack.png';
import logoNavbar from '../assets/logonero.png';
import { Fade } from "react-awesome-reveal";

function NavbarFixed() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle clicks outside the dropdown
  const handleClickOutside = (event) => {
    if (dropdownOpen && !event.target.closest('.servizi-dropdown')) {
      setDropdownOpen(false);
    }
  };

  // Add event listener on component mount and remove on unmount
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownOpen]); // Dependency array to ensure listener updates

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <header className="mt-4 fixed top-0 left-0 w-full text-white shadow-lg z-50">
        <div className="absolute inset-0 bg-black -mt-10 bg-opacity-20 z-10"></div>
        <div className="container mx-auto flex items-center h-24 relative z-20">
          <Link to="/" className="flex items-center justify-center">
            <img className="h-[100px]" src={logoNavbar} alt="Logo" />
            <img className="h-5 ml-10" src={fullstack} alt="Fullstack" />
          </Link>
          <nav className="contents font-semibold text-base lg:text-lg">
            <ul className="mx-auto flex items-center">
              <li className="p-5 xl:p-8 active hover:text-yellow-300">
                <Link to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li className="p-5 xl:p-8 hover:text-yellow-300">
                <Link to="/about">
                  <span>About</span>
                </Link>
              </li>
              <li className="p-5 xl:p-8 hover:text-yellow-300">
                <Link to="/progetti">
                  <span>Progetti</span>
                </Link>
              </li>
              <li className="p-5 xl:p-8 hover:text-yellow-300 relative">
                <button onClick={toggleDropdown} className="focus:outline-none flex items-center servizi-dropdown">  {/* Added class for targeting */}
                  <span>Servizi</span>
                  <svg
                    className="ml-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <Fade>
                    <div className="absolute top-full left-0 w-48 border-[1px] border-white text-white -mt-5 rounded-xl shadow-lg z-20">
                      <Link to="/e-commerce" className="block px-4 py-2 hover:text-yellow-300">
                        E-Commerce
                      </Link>
                      <Link to="/sitiweb" className="block px-4 py-2 hover:text-yellow-300">
                        Siti Web
                      </Link>
                      <Link to="/web-application" className="block px-4 py-2 hover:text-yellow-300">
                        Web Application
                      </Link>
                      <Link to="/seo" className="block px-4 py-2 hover:text-yellow-300">
                        SEO
                      </Link>
                    </div>
                  </Fade>
                )}
              </li>
              {/* ... other menu items */}
            </ul>
          </nav>
          <Link to='/contattaci'>
          <button  className="border border-white rounded-full font-bold px-8 py-2 hover:text-yellow-300 hover:border-yellow-300 transition-colors duration-300">
            Contattaci
          </button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default NavbarFixed;


