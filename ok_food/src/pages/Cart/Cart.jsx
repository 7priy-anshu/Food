import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../component/contaxt/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
 // these are var Data store in StoreContext
  const { cartItems, food_list, removeCart , gettotal} = useContext(StoreContext);

  //place order navigator

  const navigate = useNavigate(); 

  return (
    <div className='cart'>
      <div className="cart_Item">
        <div className="card_title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div>
                <div className='cart-items-item card_title'>

                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${item.price * cartItems[item.id]}</p>
                  <p className='cross' onClick={() => removeCart(item.id)}>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}

      </div>

      <div className="cart--">
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
              <p>${gettotal()===0 ? 0:2}</p>
            </div>
           <hr />
            <div className="cart-detail">
              <b>Total</b>
              <b>${ gettotal()===0 ? 0 :  gettotal()+2}</b>
            </div>
          </div>
          <button onClick={()=> navigate('/order')} >PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart_promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="card-input">
              <input type="type" placeholder='promo code'  />
              <button>APPLY</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Cart