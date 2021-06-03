import React from 'react'
import { Search } from "@material-ui/icons";
import Headphone from '../images/Flash Products/Headphone.webp'
import Tshirt from '../images/Flash Products/T-shirt.webp'
import Shoes from '../images/Flash Products/Sports Shoes.webp'


import '../Styles/MyOrders.css'
function MyOrders() {
    return (
        <div className="myorders">
            <div className="myorders__title">
                <h3>My Orders</h3>
            </div>
             <div className="myorders__header">
                 <div className="myorders__header__left">
                       <p className="shoppingorders">Shopping Orders</p>
                       <p className="deals">Deals</p>
                 </div>
                 <div className="myorders__header__right">
                       <Search/>
                       <input type="text"  placeholder="Enter Order ID"/>
                 </div>

             </div>

         <div className="myorders__previousorders">
            <div className="myorders__previousorders__header">
                <div className="myorders__previousorders__header__left">
                    <p className="orderno">Order No. 12345678</p>
                    <p className="ordertime">28 May 2021, 10:31pm</p>
                </div>
                 <div className="myorders__previousorders__header__right">
                     <p className ="ordertotal">Order Total <span>₹878</span></p>
                 </div>

            </div>

              <div className="myorders__previousorders__main">
                   <div className="myorders__previousorders__main__left">
                       <div className="myorders__previousorders__img">
                           <img src={Headphone}/>
                       </div>
                       <div className="myorders__previousorders__content">
                           <p className="delivered"> Delivered</p>
                           <p className="title">boAt bassheads 100 BassHeads 100 In-Ear Wired Headphone ( Black )</p>
                           <p className="price">₹379</p>
                       </div>
                    </div>
                      
                     <div className = "myorders__previousorders__main__right">
                         <button >View Details</button>
                     </div>
              </div>

              <div className="myorders__previousorders__main">
                   <div className="myorders__previousorders__main__left">
                       <div className="myorders__previousorders__img">
                           <img src={Tshirt}/>
                       </div>
                       <div className="myorders__previousorders__content">
                           <p className="delivered"> Delivered</p>
                           <p className="title">EYEBOGLER Men Yellow Regular fit Cotton Round neck T-Shirt - Pack Of 1</p>
                           <p className="price">₹499</p>
                       </div>
                    </div>
                      
                     <div className = "myorders__previousorders__main__right">
                         <button >View Details</button>
                     </div>
              </div>

            </div>

            <div className="myorders__previousorders">
            <div className="myorders__previousorders__header">
                <div className="myorders__previousorders__header__left">
                    <p className="orderno">Order No. 56768755</p>
                    <p className="ordertime">21 May 2021, 10:00am</p>
                </div>
                 <div className="myorders__previousorders__header__right">
                     <p className ="ordertotal">Order Total <span>₹1719</span></p>
                 </div>

            </div>

              <div className="myorders__previousorders__main">
                   <div className="myorders__previousorders__main__left">
                       <div className="myorders__previousorders__img">
                           <img src= {Shoes}/>
                       </div>
                       <div className="myorders__previousorders__content">
                           <p className="delivered"> Delivered</p>
                           <p className="title"> PUMA Fabric Sports Shoes for men</p>
                           <p className="price">₹1719</p>
                       </div>
                    </div>
                      
                     <div className = "myorders__previousorders__main__right">
                         <button >View Details</button>
                     </div>
              </div>

            </div>

        </div>
    )
}

export default MyOrders

