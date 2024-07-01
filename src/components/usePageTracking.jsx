import { useLocation } from "react-router-dom";

function usePageTracking() {
    const location = useLocation();
  
    useEffect(() => {
      // Traccia la visualizzazione della pagina
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  
      // Traccia un evento personalizzato per ogni cambio di rotta
      ReactGA.send({
        hitType: 'event',
        eventCategory: 'Navigation',
        eventAction: 'Route Change',
        eventLabel: location.pathname
      });
    }, [location]);
  }
  export default usePageTracking;