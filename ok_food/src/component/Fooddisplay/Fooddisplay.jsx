import React, { useContext } from 'react'
import './Fooddisplay.css'
import { StoreContext } from '../contaxt/StoreContext'
import Fooditem from '../Fooditem/Fooditem'

const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)
  return (
    <div>
      <div className="food-display" id='food-display'>
        <h2>Top disher near you </h2>
        <div className="food-display-list">
          {food_list.map((food, index) => {
            if (category === "All" || category == food.category) {
              return <Fooditem key={index} id={food.id} name={food.name} description={food.description} price={food.price} image={food.image} />
            }
          })}
        </div>

      </div>
    </div>
  )
}

export default Fooddisplay