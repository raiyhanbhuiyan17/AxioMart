import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {

  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket =()=>{
    dispatch({
      type: "REMOVE_FROM_BASKET", //type is kind of naming through which we'll run our switch case in reducer.
      id: id,
  });
  };

  return (
    <div className='checkoutProduct'>
        <img src={image} alt="product-img" className="checkoutProduct__image" />

        <div className='checkoutProduct__info'>
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <p className="checkoutProduct__rating">
              { Array(rating)
                 .fill()
                 .map((_,i)=>(<p>⭐️</p>))
                
                }
              </p>
            <button onClick={removeFromBasket}>Remove Item</button>

        </div>

    </div>
  )
}

export default CheckoutProduct
