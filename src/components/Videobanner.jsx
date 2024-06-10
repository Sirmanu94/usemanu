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
                className="h-[500px] w-full bg-opacity-50  object-cover  z-0"
                src={videobanner}
                autoPlay
                muted
            />
      +
        </>
    )
}

export default Videobanner