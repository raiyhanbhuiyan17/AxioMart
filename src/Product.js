import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider"; //this useState value makes the product as a child component.
//once is is a child component, it can access the data from the parent component.

function Product({id,title,price,rating,image}) {

  const [state, dispatch] = useStateValue(); //dispatch is alternative name of action. type feature of js.

  const addToBasket = () => {
      dispatch({
          type: "ADD_TO_BASKET", //type is kind of naming through which we'll run our switch case in reducer.
          item: {
              id: id,
              image: image,
              price: price,
              rating: rating,
          },
      });
  };

  return (
    <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                 .fill()
                 .map((_,i)=>(<p>⭐️</p>))
                
                }
             </div>

        </div>
        <img src={image} 
        alt='product_image_macbookpro' />
        <button onClick={addToBasket}>Add to Cart</button>

      
    </div>
  )
}

export default Product
