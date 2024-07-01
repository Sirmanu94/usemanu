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
  }, []);
  
  return (
    <>
      <Home/>
    </>
  );
}

export default App;
