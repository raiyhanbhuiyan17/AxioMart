import React from 'react'
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className='home'>
        <div className="home__conatiner ">
            <img src="https://i0.wp.com/www.revistamercado.do/wp-content/uploads/2022/02/amazon-2-copy.jpg?resize=750%2C374&ssl=1" 
            alt="home-image_here" className='home__image' />

            <div className="home__row">
                <Product 
                    id="1211210"
                    title="Macbook Pro is one of the best laptop created by Apple so far. It has M2 chip which is a powerful technology."
                    price={1550}
                    rating={5}
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481"
                />
                 <Product 
                    id="12112100"
                    title="Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones - Apple W1 Headphone Chip"
                    price={250}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61Xvn9KUgYL._AC_UY218_.jpg"
                />


            </div>
            <div className="home__row">
                <Product 
                    id="121121000"
                    title="Laptop Backpack Women 15.6 Inch Travel Backpack for Women"
                    price={550}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/91Na9ujMeKL._AC_UL320_.jpg"
                />
                <Product 
                    id="1211210000"
                    title="Smart Watch for Men Women, Activity Fitness Tracker"
                    price={150}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61TPH1MxhML._AC_UL320_.jpg"
                />
                <Product 
                    id="12112100000"
                    title="Echo Dot (5th Gen, 2022 release) Kids"
                    price={50}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71SJzVbNqzL._AC_UL320_.jpg"
                />
                
            </div>
            <div className="home__row">
                <Product 
                    id="121121000000"
                    title="Samsung 65 TU7000 4K Ultra HD HDR Smart TV"
                    price={1050}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/91-gHZ+X9YL._AC_UL320_.jpg"
                />

                
            </div>
            <div className='footer'>
            All rights reserverd@Raiyhan Bhuiyan
            </div>
        
        </div>
      
    </div>
  )
}

export default Home
