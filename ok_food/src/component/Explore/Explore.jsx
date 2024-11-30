import React from 'react'
import './Explore.css'
import { menu_list } from '../../assets/assets'

const Explore = ({ category, setCategory }) => {
  //categray devide

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='text-p'>choose from a divers menu featuring a delecturing a delectable array of dishes crafted with the finest ingredients and culinay expertise. </p>
      <div className="explore-list">
        {menu_list.map((title, index) => {       // title or index  ki jagah apna bhi likh sakte h   y bus formal h 
          return (
            <div onClick={() => setCategory(prev => prev === title.menu_name ? "All" : title.menu_name)} key={index} className="explore-list-item">
              <img src={title.menu_image} className={category === title.menu_name ? "active" : ""} />
              <p>{title.menu_name}</p>
            </div>
          )
        })}

      </div>
      <hr />
    </div>


  )
}

export default Explore




