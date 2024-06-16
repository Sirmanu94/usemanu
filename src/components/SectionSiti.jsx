import shopify from '../assets/shopify.png';
import copy from "../assets/COPY.png";
import responsive from "../assets/responsive.png";
import seo from "../assets/seo.png";
import marketing from "../assets/marketing2.png";
import performance from "../assets/performance.png";
import grafica from "../assets/grafica.png";




function SectionSiti(){
    return(
        <>
 <section className="bg-gray-900 bg-opacity-90 text-white">
  <div className="px-4 py-8 sm:px-6 flex flex-col items-center sm:py-12 lg:px-8 lg:py-16 text-center">
    <div className="max-w-xl">
      <h2 className="text-3xl font-bold sm:text-4xl">COSA OFFRIAMO ?</h2>
      <p className="mt-4 w-full text-gray-300">
        Con useManu - FullStack Developer puoi avere un sito web professionale e di ultima generazione per la tua attività. Tutti i nostri prezzi sono UNA TANTUM e comprendono tutto il necessario per ogni esigenza.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
    

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="w-full h-60 object-cover rounded-t-lg" src={copy} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Copywriting</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Qualunque sia il tuo prodotto o servizio, non puoi rimanere in silenzio sul web, quindi attraverso un piano di comunicazione costruiamo la consapevolezza e la reputazione del tuo prodotto/servizio. </p>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="w-full h-60 object-cover rounded-t-lg" src={responsive} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Grafica Responsive
</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I nostri siti web sono perfettamente visibili da computer, smarpthone e tablet. Tutte le immagini sono ad alta definizione e dotate di licenza.</p>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="w-full h-60 object-cover rounded-t-lg" src={seo} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Indicizzazione SEO
</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Il tuo sito sarà ben indicizzato su Google e tutti gli altri motori di ricerca. Ti daremo anche una serie di consigli gratuiti per migliorarne il posizionamento.</p>
     </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="w-full h-60 object-cover rounded-t-lg" src={performance} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Alte prestazioni</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I nostri server sono dotati di hardware ad altissime prestazioni. Il tuo sito sarà caricato in pochissimi secondi da qualsiasi zona del mondo.</p>
  
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="w-full h-60 object-cover rounded-t-lg" src={marketing} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Marketing</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Offriamo implementazione di plug-in per il marketing che ti renderanno facile aumentare la fidelizzazione dei tuoi utenti.</p>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="w-full h-60 object-cover rounded-t-lg" src={grafica} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Grafiche e Design</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Il servizio prevede progettazione logo e immagine coordinata del brand; realizzazione dell’intera grafica per campagne pubblicitarie, sempre coerente con il core del brand.

</p>

    </div>
</div>





    

    
    </div>
  </div>
</section>
        </>
    )
}
export default SectionSiti

