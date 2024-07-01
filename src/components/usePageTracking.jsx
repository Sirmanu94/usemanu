import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Traccia la visualizzazione della pagina
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });

    // Ottieni il riferimento da cui l'utente è arrivato
    const referrer = document.referrer || 'Direct';

    // Traccia un evento personalizzato per ogni cambio di rotta
    ReactGA.send({
      hitType: 'event',
      eventCategory: 'Navigation',
      eventAction: 'Route Change',
      eventLabel: location.pathname,
      eventValue: referrer  // Aggiungi il referer come eventValue
    });
  }, [location]);
}

export default usePageTracking;
