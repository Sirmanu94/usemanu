import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import ReactGA from 'react-ga4';
import usePageTracking from './components/usePageTracking';

// Inizializzare con l'ID di misurazione di GA4
ReactGA.initialize('G-Z78FMWF9FH');

function App() {
usePageTracking();
  
  return (
    <>
      <Home/>
    </>
  );
}

export default App;
