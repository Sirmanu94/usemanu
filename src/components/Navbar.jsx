import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import fullstack from "../assets/fullstack.png";
import logoNavbar from "../assets/logonero.png";
import { Fade } from "react-awesome-reveal";

function Navbar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle clicks outside the dropdown
  const handleClickOutside = (event) => {
    if (dropdownOpen && !event.target.closest(".servizi-dropdown")) {
      setDropdownOpen(false);
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add event listener on component mount and remove on unmount
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]); // Dependency array to ensure listener updates

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <header className="mt-6 text-white shadow-lg md:block relative max-[500px]:mt-2">
        <div className="absolute inset-0 bg-black mt-8 bg-opacity-20 z-10"></div>
        <div className="container mx-auto flex items-center h-24 relative z-20">
          <Link to="/" className="flex items-center justify-center">
            <img
              className="h-[110px] sm: h-4 max-[768px]:h-16 max-[500px]:ml-12 max-[950px]:h-16"
              src={logoNavbar}
              alt="Logo"
            />
            <img
              className="min-[500px]:hidden ml-4 h-4 w-2/3  "
              src={fullstack}
              alt="Fullstack"
            />
          </Link>
          <nav className="contents font-semibold text-base lg:text-lg  max-[500px]:hidden">
            <ul className="mx-auto flex items-center ">
              <li className="p-5 xl:p-8 active hover:text-yellow-300 ">
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
                <button
                  onClick={toggleDropdown}
                  className="focus:outline-none flex items-center servizi-dropdown"
                >
                  {" "}
                  {/* Added class for targeting */}
                  <span>Servizi</span>
                  <svg
                    className="ml-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <Fade>
                    <div className="absolute top-full left-0 w-48 border-[1px] border-white text-white -mt-5 rounded-xl shadow-lg z-20">
                      <Link
                        to="/e-commerce"
                        className="block px-4 py-2 hover:text-yellow-300"
                      >
                        E-Commerce
                      </Link>
                      <Link
                        to="/sitiweb"
                        className="block px-4 py-2 hover:text-yellow-300"
                      >
                        Siti Web
                      </Link>
                      <Link
                        to="/web-application"
                        className="block px-4 py-2 hover:text-yellow-300"
                      >
                        Web Application
                      </Link>
                      <Link
                        to="/seo"
                        className="block px-4 py-2 hover:text-yellow-300"
                      >
                        SEO
                      </Link>
                    </div>
                  </Fade>
                )}
              </li>
              {/* ... other menu items */}
            </ul>
          </nav>
          <button
            onClick={() => navigate("/contattaci")}
            className="border border-white rounded-full font-bold px-8 py-2 hover:text-yellow-300 hover:border-yellow-300 transition-colors duration-300 max-[500px]:hidden"
          >
            Contattaci
          </button>

          <button
            className=" min-[500px]:hidden rounded  p-2 text-gray-600 transition hover:text-gray-600/75 ml-20 sticky "
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <Fade triggerOnce={false} duration={1500}>
              <div className="absolute right-0 mt-2 bg-black rounded-md shadow-lg flex flex-col items-start p-4 w-fit hamburgerNavbar">
                <ul className="flex flex-col items-start">
                  <li className="mb-2">
                  <Link
                      to="/progetti"
                      className="block px-4 text-white py-2 hover:text-yellow-300"
                    >
                      Progetti
                    </Link>
                  <Link
                      to="/about"
                      className="block px-4 text-white py-2 hover:text-yellow-300"
                    >
                      About
                    </Link>
                  <Link
                      to="/sitiweb"
                      className="block px-4 text-white py-2 hover:text-yellow-300"
                    >
                      Siti Web
                    </Link>
                    <Link
                      to="/e-commerce"
                      className="block px-4 text-white py-2 hover:text-yellow-300"
                    >
                      E-commerce
                    </Link>
                    <Link
                      to="/seo"
                      className="block px-4 text-white py-2 hover:text-yellow-300"
                    >
                      SEO
                    </Link>
                    <Link
                      to="/contattaci"
                      className="block px-4 text-white py-2 hover:text-yellow-300"
                    >
                      Contattaci
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </Fade>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
