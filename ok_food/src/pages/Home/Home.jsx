import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import Explore from '../../component/Explore/Explore'
import Fooddisplay from '../../component/Fooddisplay/Fooddisplay'
import AppDownload from '../../component/AppDownload/AppDownload'

const Home = () => {

  // categary devide 

  const[category , setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <Explore category={category} setCategory={setCategory}/>
       <Fooddisplay category={category}/>
       <AppDownload/>
    </div>
  )
}

export default Home