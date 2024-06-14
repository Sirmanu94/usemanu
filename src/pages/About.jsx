import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Navbar from "../components/Navbar";
import manu from '../assets/manu2.png'; // Percorso corretto per l'immagine
import background from '../assets/background.mp4';
import logovideo from '../assets/logovideo2.mp4';
import certificato from '../assets/certificato.png';
import { FaReact, FaNodeJs, FaDatabase, FaShopify, FaWordpress, FaJsSquare } from 'react-icons/fa';
import Footer from "../components/Footer";
import AboutNumbers from "../components/AboutNumbers";
import connect from '../assets/connect.png'; // Percorso corretto per l'immagine

function About() {
    return (
        <>
            <Navbar />
            {/* Video di sfondo */}
            <video
                autoPlay
                loop
                muted
                className="fixed top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src={background} type="video/mp4" />
            </video>

            {/* Overlay scuro per rendere il testo leggibile */}
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-30 -z-10"></div>

            <Fade triggerOnce={true} duration={3000}>
                <Slide direction="right" duration={3000}>
                    <div className='relative z-10 flex flex-col justify-center items-center py-16'>
                        {/* Contenitore per l'immagine e il testo */}
                        <div className="sm:flex items-center w-3/4">
                            {/* Immagine arrotondata */}
                            <div className="sm:w-1/2 flex justify-center">
                                <img src={manu} className='w-full max-w-lg h-auto rounded-[100px] object-cover' alt="Manu" />
                            </div>
                            {/* Contenuto sovrapposto */}
                            <div className="sm:w-1/2 p-5">
                                <div className="text">
                                    <span className="text-white border-b-2 border-yellow-300 uppercase">Chi siamo</span>
                                    <h2 className="my-4 font-bold text-3xl text-white sm:text-4xl">About <span className="text-yellow-300">useManu</span></h2>
                                    <p className="text-white text-md leading-8">
                                        Salve, sono Emanuele, sviluppatore Full Stack. UseManu è il risultato della mia passione per la tecnologia e la programmazione, che mi ha portato a specializzarmi nello sviluppo di soluzioni web complete, dalla progettazione del front-end alla gestione del back-end.
                                        Il nostro impegno è facilitare connessioni significative, offrendo una piattaforma innovativa dove talento e opportunità si incontrano. Dopo aver completato con successo un corso intensivo di circa 6 mesi con Develhope S.r.l., ho ottenuto la certificazione di Sviluppatore Full Stack. Sono in costante aggiornamento e formazione ed ho successivamente acquisito competenze come sviluppatore di e-commerce sulle principali piattaforme.
                                        In attesa di ulteriori skills e competenze resto a vostra disposizione per realizzare ogni vostro desiderio digitale.
                                    <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
            </Fade>

            <Fade triggerOnce={true} duration={3000}>
                <Slide duration={3000}>
                    <div className='relative z-10 flex flex-col justify-center items-center py-16'>
                        {/* Contenitore per l'immagine e il testo */}
                        <div className="sm:flex items-center w-3/4">
                            {/* Contenuto sovrapposto */}
                            <div className="sm:w-1/2 p-5">
                                <div className="text">
                                    <span className="text-white border-b-2 border-yellow-300 uppercase">The mission</span>
                                    <h2 className="my-4 font-bold text-3xl text-white sm:text-4xl">Our <span className="text-yellow-300">Mission</span></h2>
                                    <p className="text-white text-md leading-8">
                                        La nostra missione è trasformare idee innovative in soluzioni digitali efficaci e all'avanguardia. Crediamo nel potere della tecnologia per migliorare la vita delle persone e delle aziende, creando esperienze utente coinvolgenti e funzionali.
                                        <br />
                                    </p>
                                </div>
                            </div>
                            <div className="sm:w-1/2 p-5 flex justify-center">
                                <img src={connect} className='w-full max-w-lg h-auto rounded-[100px] object-cover' alt="Connect" />
                            </div>
                        </div>
                    </div>
                </Slide>
            </Fade>

            {/* Secondo video centrale */}
            <Fade triggerOnce={true} duration={3000}>
                <div className="relative z-10 w-full sm:w-2/3 p-5 flex justify-center items-center mx-auto mt-8">
                    <video
                        className='w-full h-auto object-cover rounded-lg'
                        src={logovideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </Fade>
            <AboutNumbers />

            <Footer />
        </>
    );
}

export default About;
