import React , {useEffect} from 'react'
import { useStateValue } from "../contextApi/StateProvider";
import ShoppingCart from './ShoppingCart'
import PaymentSummary from './PaymentSummary'
import EmptyCart from './EmptyCart'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../Styles/Cart.css'


function Cart() {

 const [{basket, totalItem} , dispatch] = useStateValue();

 useEffect(() => {

 dispatch({ 
  type: "Get_Item_Total"
  });

}, [basket]);

    return (
        <>
         { basket.length === 0 ? (
            <div className = "emptycartdiv">
           <EmptyCart/>
            </div>
         ) : (
             <div className="cart">
             <div className="cart__left">
             <div>
           <div className="shoppingcart__header">
            <ShoppingCartIcon className="shoppingCartIcon"/>
          <h2><span>{totalItem} Items</span> in your bag</h2>
           </div>
               {basket.map(items =>(
                    <ShoppingCart
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
             </div> 


        <div className="cart__right">
            <PaymentSummary />
        </div>        
       </div>
       )}
    
    </>
    )
}
export default Cart
