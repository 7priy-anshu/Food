import React, { useContext  } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../contaxt/StoreContext'



const Fooditem = ({ id, name, price, description, image }) => {

  // const [itemCount, setItemCount] = useState(0)

   const {cartItems,addTocart,removeCart}  =useContext(StoreContext)

  return (
    <div className="fooditem">
      
      <div className="food-item-con">
        <img className='item-img' src={image} alt="" />
        {!cartItems[id]
          ? <img className='add' onClick={() =>addTocart(id) } src={assets.add_icon_white} alt='' />
          : <div className='food-counter'>
            <img onClick={() => removeCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addTocart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />




        </div>

        <p className="food-item-dec">{description}</p>
        <p className='food-item-price' >${price}</p>

      </div>

    </div>

  )
}

export default Fooditem




// import React, { useContext } from 'react';
// import './Fooditem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../context/StoreContext';

// const Fooditem = ({ id, name, price, description, image }) => {
//   const { cartItems, addTocart, removeCart } = useContext(StoreContext);

//   return (
//     <div className="fooditem">
//       <div className="food-item-con">
//         <img className='item-img' src={image} alt={name} />
//         {!cartItems[id]
//           ? <img className='add' onClick={() => addTocart(id)} src={assets.add_icon_white} alt='Add' />
//           : <div className='food-counter'>
//             <img onClick={() => removeCart(id)} src={assets.remove_icon_red} alt="Remove" />
//             <p>{cartItems[id]}</p>
//             <img onClick={() => addTocart(id)} src={assets.add_icon_green} alt="Add" />
//           </div>
//         }
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="Rating" />
//         </div>
//         <p className="food-item-dec">{description}</p>
//         <p className='food-item-price'>${price}</p>
//       </div>
//     </div>
//   );
// }

// export default Fooditem;
