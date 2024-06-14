import Navbar from "../components/Navbar";
import background from '../assets/background.mp4';
import Cms from "../components/Cms";

function EcommercePage() {
    return (
        <div className="relative">
            <Navbar />
            <video
                autoPlay
                loop
                muted
                className="fixed top-0 left-0 w-full h-full object-cover z-[-10]"
            >
                <source src={background} type="video/mp4" />
            </video>

            <section className="relative h-screen -mt-15 flex items-center justify-center bg-center bg-contain bg-no-repeat bg-ecomm">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Opacità per lo sfondo */}
                <div className="relative px-4 mx-auto max-w-screen-xl text-center text-white">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Investi nel tuo potenziale</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Scopri come costruire un negozio online di successo con le nostre soluzioni complete e personalizzate, e inizia a vendere in tutto il mondo.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Inizia ora
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Scopri di più
                        </a>
                    </div>
                </div>
            </section>
            <Cms/>
        </div>
    )
}

export default EcommercePage;
