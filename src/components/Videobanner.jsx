import videobanner from '../assets/videobanner.mp4'; // Percorso corretto per il video
const handleVideoEnd = (event) => {
    // Mantiene l'ultima immagine del video
    event.target.pause();
    event.target.currentTime = event.target.duration;
  };
function Videobanner(){
    return(
        <>
           
            <video
                className="h-600 w-full bg-opacity-50  object-cover  z-0 max-[500px]:h-[300px]"
                src={videobanner}
                autoPlay
                muted
                playsInline
            />
      +
        </>
    )
}

export default Videobanner