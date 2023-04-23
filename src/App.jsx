import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ThemeProvider from './utils/ThemeProvider';
const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      once: false
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <ThemeProvider>
          <Routes />
          </ThemeProvider>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
