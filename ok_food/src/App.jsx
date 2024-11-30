import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/Placeorder/Placeorder';
import Footer from './component/Footer/Footer';
import Login from './component/Lodin/Login';
// import PinCodeDetails from './loction/PinCodeDetails';
import './index.css'

const App = () => {
  //  display the log-in pop      strShowLgin  are just using hide and show
  const [showLogin, setShowLogin] = useState(false)


  //theme
  const current_theme = localStorage.getItem('current_theme');


  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  }, [theme])
  // end theme




  
//preloader


// useEffect(() => {
//   const loader = document.getElementById("preloader");

//   const hideLoader = setTimeout(() => {
//     if (loader) {
//       loader.style.display = "none";
//     }
//   }, 4000); // 4000 milliseconds = 4 seconds

//   return () => clearTimeout(hideLoader); // Clean up timeout on component unmount
// }, []);



  return (

    <>
  {/* <div id='preloader'>
<div className="loader">
  <div className="box1"></div>
  <div className="box2"></div>
  <div className="box3"></div>
</div>
  </div> */}
      <div className={`container ${theme}`}>
        {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}

        <div className="app">

          <Navbar theme={theme} setTheme={setTheme} setShowLogin={setShowLogin} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Placeorder />} />
          </Routes>




        </div>
        <Footer />

      </div>
    </>
  )
}

export default App