import React from 'react'
import {useEffect , useRef} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import '../Styles/ShoppingCart.css'

import {useStateValue} from '../contextApi/StateProvider'

function ShoppingCart({title,id,price,image,rating,quantity,updatedPrice}) {
     
     const [{basket , saveForLaterBasket} , dispatch] = useStateValue();     
  
      const deleteItem =  () => {
          dispatch({
            type : "Remove_From_Basket",
             id : id,
        }) ;
      };


      const increment =  () => {
        dispatch({
          type : "Increment",
          id : id,
          quantity : quantity,
        });
      };

      const decrement =  () => {
        dispatch({
          type : "Decrement",
          id : id,
          quantity : quantity,
        });
      };
        
     const dispatchToSaveforLater = () =>{
      dispatch({
        type : "Dispatch_To_SaveforLater",
        items:{
          id :id,
          title :title,
          price :price,
          image :image,
          rating:rating,
          quantity :quantity,
          updatedPrice :updatedPrice,
       }
      });
     }


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

              <div className="shoppingcart__items__middle">
                <RemoveIcon className="decrement-btn" onClick={decrement} />
                <span className="shoppingcart__items__quantity">{quantity}</span>
                <AddIcon  className="increment-btn" onClick={increment} />
              </div>
            
            <div className="shoppingcart__items__right">
                <div className="shoppingcart__price">
                <h2>₹ {updatedPrice}</h2>
                </div>
               
                <div className="shoppingcart__items__remove">
                 <div onClick = {deleteItem}className="removeFromBasket">
                <DeleteIcon className="deleteicon" />
                 Remove
                 </div>   
                 <div  onClick = {dispatchToSaveforLater} className="saveforlater">
                 | <FavoriteIcon  className ="heartIcon"/>
                Save for Later
                </div>
               </div>

            </div>
     </div>

    )
}

export default ShoppingCart
