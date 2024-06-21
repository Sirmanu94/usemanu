import { useEffect } from "react";
import background from "../assets/background.mp4";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-[10]"
      >
        <source src={background} type="video/mp4" />
      </video>
      <div className=" flex items-center justify-center flex-col text-center h-screen">
        <h1 className="w-full text-4xl text-white">
          Pagina non trovata oppure ancora in costruzione
        </h1>
        <p className="text-gray-200 mt-4">Ci scusiamo per il disagio</p>
        <button
          onClick={() => navigate("/")}
          className="border mt-5 border-white text-white rounded-full font-bold px-8 py-2 hover:text-yellow-300 hover:border-yellow-300 transition-colors duration-300"
        >
          Torna alla Home{" "}
        </button>
      </div>
    </>
  );
}

export default NotFound;
