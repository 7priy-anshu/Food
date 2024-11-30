import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';
import { Link } from 'react-router-dom';
import { StoreContext } from '../contaxt/StoreContext';
//theme
const Navbar = ({ theme, setTheme, setShowLogin }) => {

  const toggleMode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }//end theme

  // that for list  unline of on click
  const [menu, setMenu] = useState("home")

// cart item red dost verify item
 
const{gettotal} = useContext(StoreContext);




  return (
    <div className='navbar'>
      <Link to='/'>  <img src={assets.logo} alt="" className="logo" /> </Link>
      <ul className="navbar-menu">
        {/* there is on click function */}
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a >
      </ul>

      {/* this for theme to switch mode */}

      <img onClick={toggleMode} src={theme === 'light' ? toggle_light : toggle_dark} alt="Toggle Theme" className="toogle" />


      <div className="nav-right">

        <img src={assets.search_icon} alt="" />
        <div className="nav-search-icon">
          <Link to='Cart' > <img src={assets.basket_icon} alt="" /> </Link>
          <div className={gettotal() === 0 ? "":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar









