import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../component/contaxt/StoreContext'

const Placeorder = () => {

  const {gettotal} = useContext(StoreContext);

  return (
    <form className='place'>

<div className="place-left">
  <p className='title'>delivery information</p>
  <div className="multi-fields">
    <input type="text" placeholder='First Name' />
    <input type="text" placeholder='Last Name' />
  </div>
  <input type="email" placeholder='Email adress' />
  <input type="text" placeholder='Street area'  />
  
  <div className="multi-fields">
    <input type="text" placeholder='city' />
    <input type="text" placeholder='state' />
  </div>

  <div className="multi-fields">
    <input type="text" placeholder='pincode' />
    <input type="text" placeholder=' country' />
  </div>

<input type="text" placeholder='phone' />

</div>


    <div className="place-right">

    <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-detail">
              <p>Subtotal</p>
              <p>${gettotal()}</p>
            </div>
            <hr />
            <div className="cart-detail">
            <p>Delivery Charge</p>
              <p>${gettotal() === 0 ? 0 : 2}</p>
            </div>
           <hr />
            <div className="cart-detail">
              <b>Total</b>
              <b>${gettotal() === 0 ? 0 :gettotal()+2}</b>
            </div>
          </div>
          <button  >PROCEED TO PAYMENT</button>
        </div>


    </div>
    </form>
  )
}

export default Placeorder