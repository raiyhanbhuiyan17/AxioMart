import React from 'react'
import "./Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {

  const [{basket}, dispatch] = useStateValue(); // destructuring the array, presenting new state value and importing basket and dispatch.
  //here basket has the product details. if there's two products then it will be two objects likwise..
  return (
    
    <div className="header">
        <Link to="/" style={{textDecoration:"none"}}>
            <div className="header__logo">
              <StoreIcon className="header__logoImage" fontSize='large'/>
              <h2 className='header__logoTitle'>AxioMart</h2>
            </div>
        </Link>


        <div className="header__search">
          <input type="text" className="header_searchInput"/>
          <SearchIcon className="header__searchIcon" />
        </div>
       
        <div className="header__nav">
        <Link to="/login" style={{ textDecoration:"none" }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link> 
 

          <div className="nav__item">
           <Link to="/checkout" style={{textDecoration:"none"}}>
             <div className="nav__item">
                <span className="nav__itemLineOne">Your</span>
                <span className="nav__itemLineTwo">Item</span>
             </div>
           </Link>  
          </div>

          <Link to="/checkout" style={{textDecoration:"none"}}>
            <div className="nav__itemBasket">
              <ShoppingCartIcon fontSize='large'/>
              <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
              
            </div>
          
          </Link>


       </div>
      
    </div>
  )
}

export default Header
