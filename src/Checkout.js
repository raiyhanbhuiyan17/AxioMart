import React from 'react';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{basket},dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img src="https://gos3.ibcdn.com/car-top-1640940376.jpg" 
            alt="promtotion pic" className="checkout__ad" />
            <div className="checkout__title">
            <h2>Your Cart Items: </h2>
            <hr></hr>
              {basket.map(item =>(
                <CheckoutProduct
                 id = {item.id}
                 title = {item.title}
                 image = {item.image}
                 price = {item.price}
                 rating = {item.rating}
                />

              ))}
             
             
            </div>
        </div>


        <div className="chekout__right">
            <Subtotal/>
        </div>
        
      
    </div>
  )
}

export default Checkout
