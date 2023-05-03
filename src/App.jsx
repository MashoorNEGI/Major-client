import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
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
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
