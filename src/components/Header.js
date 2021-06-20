import React from "react";
import logo from "../images/logo/logo.jpg";
import { Search,Menu, ListAlt, ShoppingBasket, Mood } from "@material-ui/icons";
import {Link} from 'react-router-dom';
import  '../Styles/Header.css'
import { useStateValue } from "../contextApi/StateProvider";


const Header = () => {
    const [{basket} , dispatch] = useStateValue();
  return (
    <div className="header">
      
       <img className="logo" src={logo}alt={logo}/>
      
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
             {basket.length === 0 ? <p>No Items in the bag</p> :<span className ="cart__counter">{basket.length}</span>}
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