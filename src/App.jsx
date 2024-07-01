import './App.css'
import Home from './pages/Home'
import ReactGA from 'react-ga';
ReactGA.initialize('G-Z78FMWF9FH');


function App() {
  ReactGA.pageview();
  return (
    <>
  <Home/>
    </>
  )
}

export default App
