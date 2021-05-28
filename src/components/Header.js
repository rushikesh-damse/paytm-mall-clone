import React from "react";
import logo from "../images/logo/logo.jpg";
import { Search,Menu, ListAlt, ShoppingBasket, Mood } from "@material-ui/icons";
import  '../Styles/Header.css'
import { useStateValue } from "../contextApi/StateProvider";


const Header = () => {
    const [{basket}] = useStateValue();
  return (
    <div className="header">
       <img className="logo" src={logo}alt={logo}/>
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
          <div className="header__myorders common">
            <ListAlt className="color" />
            <span>My Orders</span>
          </div>
          <div className="header__bag common">
            <ShoppingBasket className="shoppingbasket" className="color"/>
             {/* {console.log(basket)} */}
             <span>{basket.length}</span>
             <span>items</span>
              {/* {basket.length === 0 ? <p>No Items in the bag</p> : <p>2</p>} */}
                {/* {console.log(basket)}
               {basket.length ==0 ? <span>No Items in the bag</span> : <h1></h1> } */}
             </div>
          <div className="header__login common">
            <Mood className="color" />
            <span>Login/Signup</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;