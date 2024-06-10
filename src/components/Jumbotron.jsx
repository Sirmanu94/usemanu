import impossible from '../assets/impossible3.mp4'; // Percorso corretto per il video

function Junbotron() {
    return (
        <div className="relative">
            <video
                className="h-screen w-full object-cover mt-[-100px] z-0"
                src={impossible}
                autoPlay
                loop
                muted
            />
            <button 
                className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white rounded-full text-white font-bold px-8 py-2 z-10"
            >
                SCOPRI I SERVIZI
            </button>
        </div>
    );
}

export default Junbotron;

