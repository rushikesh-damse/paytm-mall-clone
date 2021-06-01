import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import '../Styles/ShoppingCart.css'

import {useStateValue} from '../contextApi/StateProvider'

function ShoppingCart({title,id,price,image,rating}) {
     
     const [{basket} , dispatch] = useStateValue();     


      const deleteItem =  () => {
          dispatch({
            type : "Remove_From_Basket",
             id : id,
        }) ;
      };

    return (
      
        <div className="shoppingcart__items">
            <div className="shoppingcart__items__left">
                <div className="shoppingcart__items__img"> 
                <img className="shoppingcart__product__img"  src = {image} />
                </div>
                <div  className="shoppingcart__product__title">
                <h3>{title}</h3>
                <div className="shoppingcart__addoffers">
                <AddCircleOutlineIcon/> 
                <p> Add Offers</p>
                </div>
               
                </div>
            </div>

            <div className="shoppingcart__items__right">
                <div className="shoppingcart__price">
                <h2>{price}</h2>
                </div>
               
                <div className="shoppingcart__items__remove">
                 <div onClick = {deleteItem}className="removeFromBasket">
                <DeleteIcon className="deleteicon" />
                 Remove
                 </div>   
                 <div className="saveforlater">
                 | <FavoriteBorderIcon className ="heartIcon"/>
                Save for Later
                </div>
                </div>

            </div>
     </div>

    )
}

export default ShoppingCart
