import { Link } from 'react-router-dom';
import impossible from '../assets/impossible3.mp4'; // Percorso corretto per il video
import impossiblemobile from '../assets/impossibilemobile.mp4'; // Percorso corretto per il video


function Junbotron() {
    return (
        <div className="relative">
            <video
                className="h-screen w-full object-cover mt-[-100px] z-0 max-[768px]:hidden"
                src={impossible}
                autoPlay
                loop
                muted
            />
              <video
                className="h-screen w-full object-cont mt-[-40px] z-0 min-[768px]:hidden"
                src={impossiblemobile}
                autoPlay
                loop
                muted
            />
            <Link to='/sitiweb'> 
            <button 
                className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white rounded-full text-white font-bold px-8 py-2 z-10 hover:text-yellow-300 hover:border-yellow-300 transition-colors duration-300 max-[768px]:bottom-[130px]"
            >
CREA IL TUO SITO WEB            </button></Link>
        </div>
    );
}

export default Junbotron;

