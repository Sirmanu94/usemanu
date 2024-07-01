import ReactGA from "react-ga4";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {

  
  const [formData, setFormData] = useState({
    servizio: "",
    name: "",
    email: "",
    oggetto: "",
    messaggio: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function thankyouPage() {
    navigate('/thankyou');
  }

  const { servizio, name, email, oggetto, messaggio } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validate = () => {
    let errors = {};
    if (!servizio) errors.servizio = "Seleziona un servizio";
    if (!email) {
      errors.email = "Email obbligatoria";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Formato email non valido";
    }
    if (!messaggio) errors.messaggio = "Il messaggio non deve essere vuoto";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    ReactGA.event({
      category: "Click Pulsante",
      action: "Form Inviato",
      label: "Etichetta pulsante",
    });


    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("https://usemanu-back.vercel.app/contattaci", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Errore durante l'invio dei dati");
      }

      console.log("Dati inviati con successo!");
      setFormData({
        servizio: "",
        name: "",
        email: "",
        oggetto: "",
        messaggio: "",
      });
      thankyouPage();
    } catch (error) {
      console.error("Errore durante l'invio dei dati:", error.message);
    }
  };

  return (
    <>
      <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-black opacity-90 rounded-lg">
        <div className="grid lg:grid-cols-3 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Chiedi Info, è gratis !
            </h1>
            <p className="text-sm text-gray-300 mt-4 leading-relaxed"></p>

            <ul className="mt-12 space-y-8">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  viewBox="0 0 479.058 479.058"
                >
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000"
                  />
                </svg>
                <a
                  href="javascript:void(0)"
                  className="text-white text-sm ml-4"
                >
                  info@usemanu.com
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  viewBox="0 0 482.6 482.6"
                >
                  <path
                    d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.5 66.1 96.1 87.5 4.6 2.9 9.1 5.1 13.4 7.4 5.7 2.9 11.1 5.5 16.4 8.7 5.6 3.4 12.2 3.1 17.8-1.2l41.5-41.5c6.2-6.2 12.4-9.4 18.7-9.4 6.3 0 12.4 3.3 18.7 9.5l60.1 60.1c6.4 6.4 6.4 12.7.2 19.3-4.2 4.4-8.5 8.7-12.9 12.9-6.6 6.3-13.4 12.7-19.1 19.9-9.5 10.8-19.8 13-31.6 13.7-33.7-2.2-64.2-15.4-86.4-26.2-62.2-29.5-116.1-72.8-161.3-129.1-37.5-44.8-62.9-86.6-78.5-131.7-10.3-28-14.3-50.9-12.5-71.5z"
                    data-original="#000000"
                  />
                </svg>
                <span className="text-white text-sm ml-4">
                  +39 3926201365
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  viewBox="0 0 483.3 483.3"
                >
                  <path
                    d="M424.3 34.35H59c-32.6 0-59 26.4-59 59v296.7c0 32.6 26.4 59 59 59h138.7v30.9H155c-5.5 0-10 4.5-10 10s4.5 10 10 10h173.2c5.5 0 10-4.5 10-10s-4.5-10-10-10h-42.8v-30.9H424c32.6 0 59-26.4 59-59v-296.7c.1-32.6-26.4-59-58.9-59zm-181 419h-3.4v-30.9h3.4v30.9zm204-89.9c0 21.6-17.6 39.2-39.2 39.2H59c-21.6 0-39.2-17.6-39.2-39.2v-296.7c0-21.6 17.6-39.2 39.2-39.2h365.3c21.6 0 39.2 17.6 39.2 39.2v296.7h-.1z"
                    data-original="#000000"
                  />
                  <path
                    d="M322.3 216.55H161c-5.5 0-10 4.5-10 10v77.4c0 5.5 4.5 10 10 10h161.3c5.5 0 10-4.5 10-10v-77.4c0-5.5-4.5-10-10-10zm-10 77.4H171v-57.4h141.3v57.4z"
                    data-original="#000000"
                  />
                  <path
                    d="M359.5 133.35h-236c-5.5 0-10 4.5-10 10s4.5 10 10 10h236c5.5 0 10-4.5 10-10s-4.4-10-10-10z"
                    data-original="#000000"
                  />
                </svg>
                <span className="text-white text-sm ml-4">
                  Napoli
                </span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 lg:mt-0 mt-10">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative">
                <label
                  htmlFor="servizio"
                  className="text-gray-400 text-sm font-bold mb-2"
                >
                  Servizio *
                </label>
                <select
                  id="servizio"
                  name="servizio"
                  value={servizio}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-700 bg-transparent rounded outline-none text-gray-100 focus:border-red-600 mt-2"
                >
                  <option value="">Seleziona un'opzione</option>
                  <option value="Sito Vetrina">
                    Voglio creare un Sito Web vetrina
                  </option>
                  <option value="E-commerce">
Vgolio creare un E-Commerce                  </option>
                  <option value="Marketing">
                    Sono interessato a Marketing e Seo
                  </option>
                </select>
                {errors.servizio && <p className="text-red-500 text-sm mt-1">{errors.servizio}</p>}
              </div>
              <div className="relative">
                <label
                  htmlFor="name"
                  className="text-gray-400 text-sm font-bold mb-2"
                >
                  Nome e Cognome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-700 bg-transparent rounded outline-none text-gray-100 focus:border-red-600 mt-2"
                />
              </div>
            </div>
            <div className="relative mt-6">
              <label
                htmlFor="email"
                className="text-gray-400 text-sm font-bold mb-2"
              >
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 bg-transparent rounded outline-none text-gray-100 focus:border-red-600 mt-2"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="relative mt-6">
              <label
                htmlFor="oggetto"
                className="text-gray-400 text-sm font-bold mb-2"
              >
                Oggetto
              </label>
              <input
                id="oggetto"
                name="oggetto"
                type="text"
                value={oggetto}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 bg-transparent rounded outline-none text-gray-100 focus:border-red-600 mt-2"
              />
            </div>
            <div className="relative mt-6">
              <label
                htmlFor="messaggio"
                className="text-gray-400 text-sm font-bold mb-2"
              >
                Messaggio *
              </label>
              <textarea
                id="messaggio"
                name="messaggio"
                value={messaggio}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-700 bg-transparent rounded outline-none text-gray-100 focus:border-red-600 mt-2"
              ></textarea>
              {errors.messaggio && <p className="text-red-500 text-sm mt-1">{errors.messaggio}</p>}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full mt-6 p-3 bg-yellow-300 hover:bg-yellow-600 hover:bg-red-700 transition-colors duration-300 text-black text-sm font-bold uppercase rounded cursor-pointer"
            >
              Invia richiesta
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;

