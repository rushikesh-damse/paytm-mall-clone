import React from 'react'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PaymentIcon from '@material-ui/icons/Payment';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Link} from 'react-router-dom';
import {getBasketTotal} from '../contextApi/Reducer.js'
import '../Styles/PaymentSummary.css'
import {useStateValue} from '../contextApi/StateProvider'

function PaymentSummary() {

   const [{basket}, dispatch] = useStateValue();
         
  
   console.log(basket.length);
    return (
        <div className="dispatchDetails">
            <div className="dispatchDetails__deliveryAdd ">
             
             <div className="deliveryadd">
              <LocalShippingIcon className = "truckIcon"/> 
              <p>Delivery Address </p>
              </div>

              <div className="deliverypincode">
              <p>Deliver to <span>123456</span> </p>
              </div>
                  
            </div>
             
            <div className="dispatchDetails__payment">
                <div className="payment__header">
                    <PaymentIcon className="paymenticon"/>
                    <p>Payment Summary</p>
                </div>

                <div className="payment__total">
                    <div className="payment__bagTotal payment__flex">
                        <p>Bag Total</p>
                        <p>₹ {getBasketTotal(basket)}</p>
                    </div>
                    <div className="payment__shippingCharges payment__flex">
                        <p>Shipping charges</p>
                        <p>₹ 19</p>
                    </div>
                    <div className="payment__amountPayable payment__flex">
                        <p>Amount Payable</p>
                        <p>₹ {getBasketTotal(basket) + parseInt(19)}</p>
                    </div>
                       
                    <div className="payment__gstin">
                       <button>Use GSTIN for claiming input tax
                       <ChevronRightIcon className="gstinarrow "/>
                       </button>
                      
                    </div>
                    
                    <div className="payment__proceed">
                       <button>Proceed to pay ₹ {getBasketTotal(basket) + parseInt(19)} </button>
                    </div>
                   <Link to= "/">
                    <div className="payment__continueShopping">
                      <p>Continue Shopping</p>
                      <ChevronRightIcon className="rightarrowicon"/>
                    </div>
                    </Link>
            </div>
                   
           </div>

        </div>
    )
}

export default PaymentSummary
