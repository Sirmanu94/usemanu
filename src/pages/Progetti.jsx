import Navbar from "../components/Navbar"
import background from '../assets/background.mp4';
import Recensioni from "../components/Recensioni";
import Laura from "../components/Laura";
import Efs from "../components/Efs";
import Find from "../components/Find";
import Footer from "../components/Footer";
import { useEffect } from "react";



function Progetti(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
          <Navbar />
            <video
                autoPlay
                loop
                muted
                className="fixed top-0 left-0 w-full h-full object-cover z-[-10]"
                playsInline
            >
                <source src={background} type="video/mp4" />
            </video>
            <Find/>
            <Laura/>
            <Efs/>
            
            <Recensioni/>
            <Footer/>
        </>
    )
}

export default Progetti