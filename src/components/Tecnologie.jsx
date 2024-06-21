import { FaReact, FaNodeJs, FaDatabase, FaShopify, FaWordpress, FaJsSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Tecnologie(){
    return(
        <>
                    <section className="text-white bg-black bg-opacity-70">
                <div className=" mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl text-yellow-400">Dai slancio al tuo business con soluzioni Full Stack</h2>
                        <p className="mt-4 text-gray-300">
                            Esperienza nella creazione di soluzioni web complete utilizzando le ultime tecnologie. Portiamo il tuo progetto al livello successivo.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 bg-gray-800"
                            href="#"
                        >
                            <FaReact className="w-10 h-10 text-blue-400 mx-auto" />

                            <h2 className="mt-4 text-xl font-bold text-white">Sviluppo React.js</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Costruzione di interfacce utente dinamiche e reattive con React.js per un'esperienza utente fluida.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10 bg-gray-800"
                            href="#"
                        >
                            <FaNodeJs className="w-10 h-10 text-green-400 mx-auto" />

                            <h2 className="mt-4 text-xl font-bold text-white">Backend con Node.js</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Creazione di applicazioni server-side robuste e scalabili con Node.js per soddisfare tutte le tue esigenze di backend.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10 bg-gray-800"
                            href="#"
                        >
                            <FaDatabase className="w-10 h-10 text-orange-400 mx-auto" />

                            <h2 className="mt-4 text-xl font-bold text-white">Gestione Database</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Gestione e manutenzione efficiente dei database per garantire l'integrità e l'accessibilità dei dati.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10 bg-gray-800"
                            href="#"
                        >
                            <FaShopify className="w-10 h-10 text-green-400 mx-auto" />

                            <h2 className="mt-4 text-xl font-bold text-white">E-commerce con Shopify</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Sviluppo e personalizzazione di negozi Shopify per offrire un'esperienza di shopping eccezionale.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 bg-gray-800"
                            href="#"
                        >
                            <FaWordpress className="w-10 h-10 text-blue-400 mx-auto" />

                            <h2 className="mt-4 text-xl font-bold text-white">Sviluppo WordPress</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Creazione di temi e plugin WordPress personalizzati per dare vita alla tua visione.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-yellow-500/10 hover:shadow-yellow-500/10 bg-gray-800"
                            href="#"
                        >
                            <FaJsSquare className="w-10 h-10 text-yellow-400 mx-auto" />

                            <h2 className="mt-4 text-xl font-bold text-white">Esperto in JavaScript</h2>

                            <p className="mt-1 text-sm text-gray-300">
                                Proficiente in JavaScript per creare applicazioni web dinamiche e interattive.
                            </p>
                        </a>
                    </div>

                    <div className="mt-12 text-center">
                        <Link to='/contattaci'
                            className="inline-block rounded bg-yellow-300 px-12 py-3 text-sm font-medium text-black transition hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            INFO
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tecnologie