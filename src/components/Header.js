import React from "react";
import { Search,Menu, ListAlt, ShoppingBasket, Mood , Favorite , FavoriteBorder } from "@material-ui/icons";
import {Link} from 'react-router-dom';
import  '../Styles/Header.css'
import { useStateValue } from "../contextApi/StateProvider";


const Header = () => {
    const [{basket , saveForLaterBasket}, dispatch] = useStateValue();
   
  return (
    <div className="header">
       <img className="logo" src ='assets/images/logo/logo.jpg' />
       <div className="parentnav">
       <nav className = "navbar">
        <div className="header__options">
          <Menu className="hamburger" />
          <p>Shop By Category</p>
        </div>

        <div className="header__search">
          <input
            type="text"
            placeholder="Search for a Product, Brand or Category"
          />
          <Search className="search"/>
        </div>

        <div className="header__right">
          <Link style={{textDecoration : "none"}} to ="/myorders">
          <div className="header__myorders common">
            <ListAlt className="icon" />
            <span>My Orders</span>
          </div>
          </Link>
          <Link style={{textDecoration : "none"}} to="/cart">
          <div className="header__bag common">
          <ShoppingBasket  className="whitebackground icon"/>
          
          {/* {basket ? <span className ="cart__counter">{basket.length} </span> : <p>No Items in the bag</p>} */}
          {basket.length === 0 ? <p>No Items in the bag</p> :<span className ="cart__counter">{basket.length}</span>}
           </div>
           </Link>
          

          <Link  style={{textDecoration : "none"}} to="/saveforlater">
          <div className="header__myorders common">
           {saveForLaterBasket.length === 0 ? <FavoriteBorder/> : 
           <div>
             <Favorite/>
             <span className ="cart__counter">{saveForLaterBasket.length}</span>
           </div>
           }
           </div>
           </Link>
           <Link  style={{textDecoration : "none"}} to="/">
          <div className="header__login common">
            <Mood className="color icon" />
            <span>Login/Signup</span>
          </div>
          </Link>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default Header;