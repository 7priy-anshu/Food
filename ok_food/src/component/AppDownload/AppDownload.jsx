import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-' id='app-'>
         <p>For Better Experience <br/> Tomoto App</p>
         <div className="app-plat">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />

         </div>
    </div>
  )
}

export default AppDownload