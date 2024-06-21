import Navbar from "../components/Navbar";
import background from '../assets/background.mp4';
import Form from "../components/Form";
import { useEffect } from "react";

function Contattaci(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
              <Navbar />
            {/* Video di sfondo */}
            <video
                autoPlay
                loop
                muted
                className="fixed top-0 left-0 w-full h-full object-cover -z-[10]"
            >
                <source src={background} type="video/mp4" />
            </video>
        <Form/>
        </>
    )
}
export default Contattaci