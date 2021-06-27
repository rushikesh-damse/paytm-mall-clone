import React, {useEffect} from 'react'
import SaveForLaterItems from './SaveForLaterItems'
import EmptyCart from './EmptyCart'
import {useStateValue} from '../contextApi/StateProvider'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import '../Styles/SaveForLaterCart.css'

function SaveForLaterCart() {
    const [{basket , saveForLaterBasket , totalItemInSaveForLaterBasket} , dispatch] = useStateValue();     

  useEffect(() =>{
    
    dispatch({
        type : "Get_Item_Total_Of_Saveforlaterbasket",
    })
  } ,[saveForLaterBasket])

    return (
        
         <>
            { saveForLaterBasket.length === 0 ? (
               <div className = "emptycartdiv">
               <EmptyCart/>
             </div>
            ) : (
            <div className="saveforlatercart">
            <div className="saveforlatercart__header">
             <ShoppingCartIcon className="shoppingCartIcon"/>
             <h2><span>{totalItemInSaveForLaterBasket} Items</span> in your bag</h2>
           </div>

                <div>
            {saveForLaterBasket.map(items =>(
                    <SaveForLaterItems
                        id = {items.id}
                        title = {items.title}
                        image = {items.image}
                        price = {items.price}
                        rating = {items.rating}
                        quantity = {items.quantity}
                        updatedPrice = {items.updatedPrice}
                        
                    />
                     ))}
                </div>
            </div>)
}
    </>
    )
}

export default SaveForLaterCart

