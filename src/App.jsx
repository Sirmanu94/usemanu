import { useEffect } from 'react';
import './App.css'
import Home from './pages/Home'
import ReactGA from 'react-ga';
ReactGA.initialize('G-Z78FMWF9FH');


function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  
  return (
    <>
  <Home/>
    </>
  )
}

export default App
