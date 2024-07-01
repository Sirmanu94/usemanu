import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import ReactGA from 'react-ga4';

// Inizializzare con l'ID di misurazione di GA4
ReactGA.initialize('G-Z78FMWF9FH');

function App() {
  useEffect(() => {
    // Traccia la visualizzazione della pagina
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });

    // Traccia un evento personalizzato per la visualizzazione della Home
    if (window.location.pathname === '/' || window.location.pathname === '/home') {
      ReactGA.send({
        hitType: 'event',
        eventCategory: 'Page View',
        eventAction: 'Home View',
        eventLabel: 'Home Page'
      });
    }
  }, []);
  
  return (
    <>
      <Home/>
    </>
  );
}

export default App;
