import React from 'react'
import {Link} from 'react-router-dom';
import "../Styles/EmptyCart.css"

function EmptyCart() {
    return (
        <div className ="emptycart">
        <div className="emptycart__img">
                  <img src = 'assets/images/EmptyCart/emptycart.png'/>
        </div>
        <div className="emptycard__info1">
            <p>Oops! Your Cart is empty</p>
        </div>
        <div className="emptycard__info2">
            <p>Get some amazing products and offers</p>
        </div>
         <Link to="/">
        <div className="emptycard__info3">
           <button>Continue Shopping</button>
        </div>
        </Link>
       </div>
    )
}

export default EmptyCart
