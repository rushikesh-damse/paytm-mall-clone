
import React from 'react'

//components
import Product from '../components/Product'
import FlashProduct from '../components/FlashProduct'
import {Link} from 'react-router-dom'
// css files
import '../Styles/ProductList.css'

const ProductList =  () => {
const style ={
  display : 'flex',
  justifyContent : 'space-around',
  alignItems : 'center',
  flexWrap : 'wrap',
}
    
    return (
     
       <div className="productList">
         
         <div style={style} className="productList__categories">
          <Link  style={{textDecoration : "none"}}to ="/product/Electronics"> 
          <Product  title="Electronics" image = '/assets/images/All Categories/Electronics.webp'/> 
         </Link>

         <Link to = "/product/Mobile" style={{textDecoration : "none" }} >
          <Product  title="Mobiles" image = 'assets/images/All Categories/Mobiles.webp' /> 
          </Link>

          <Link to ="/product/CovidEssential" style={{textDecoration : "none"}}>
          <Product  title="Covid Essential" image = 'assets/images/All Categories/covid essential.webp' /> 
          </Link>

          <Link to ="/product/FaceMask" style={{textDecoration : "none"}}>
          <Product   title="Face Mask" image = 'assets/images/All Categories/Face Mask.webp'/> 
          </Link>

          <Link to ="/product/MensFashion" style={{textDecoration : "none"}}>
          <Product   title="Men's Fashion" image ='assets/images/All Categories/Men.webp' /> 
          </Link>

          <Link to ="/product/WomensFashion" style={{textDecoration : "none"}}>
          <Product   title="Women's Fashion" image ='assets/images/All Categories/Women.webp'/> 
          </Link>
        </div>
        
         <div className="banner">
         <div className="banner__bigBanner">
            <img className="imgsize" src = 'assets/images/Banners/banner_1.webp'/>
         </div>

         <div className="banner__smallBanner">
           <div className="smallBanner__img1">
             <img  className="imgsize" src='assets/images/Banners/banner_2.webp'/>
           </div>
           <div className="smallBanner__img2">
             <img  className="imgsize" src= 'assets/images/Banners/banner_3.webp'/>
           </div>
        
         </div>
         </div>
          

             <div className="flashproducts__header">
                <h2 className ="flashproducts__header__title">Products</h2>
             </div>

            <div className="flashproducts">
               <div className="flashproducts__items">
                   <FlashProduct
                  id = "1"
                  title = "Apple iPhone 11 128 GB White(Without Earphone & Adapter"
                  image = '/assets/images/Flash Products/Apple iPhone11.webp'
                  price = {"₹59000"}
                  rating = "3.8"
                  quantity = {1}
                  updatedPrice = {59000}
                  
                  />
                   </div>

                <div className="flashproducts__items">
                 <FlashProduct
                  id = "2"
                  title = "Philips BT1212/15 Beard & Hair Trimmer For Men (Green)"
                  image = 'assets/images/Flash Products/Trimmer.webp'
                  price = { "₹899"}
                  rating = "4.1"
                  quantity = {1}
                  updatedPrice = {899}
                  />
                 </div>

                 <div className="flashproducts__items">
                 <FlashProduct
                  id = "3"
                  title = "PUMA Fabric Sports Shoes for men"
                  image = 'assets/images/Flash Products/Sports Shoes.webp'
                  price = { "₹1719"}
                  rating = "3.6"
                  quantity = {1}
                  updatedPrice = {1719}
                  />
                </div>

                <div className="flashproducts__items">
                 <FlashProduct
                  id = "4"
                  title = "Vedant Vastram Women's Silk Printed Lace Work Saree With Jaquard blouse piece (Dark blue Colour)"
                  image = 'assets/images/Flash Products/Saree.webp'
                  price = { "₹1079"}
                  rating = "2"
                  quantity = {1}
                  updatedPrice = {1097}
                  />
               </div>

               <div className="flashproducts__items">
                 <FlashProduct
                  id = "5"
                  title = "boAt bassheads 100 BassHeads 100 In-Ear Wired Headphone ( Black )"
                  image = 'assets/images/Flash Products/Headphone.webp'
                  price = { "₹379"}
                  rating = "4.1"
                  quantity = {1}
                  updatedPrice = {379}
                  />
               </div>

               <div className="flashproducts__items">
                 <FlashProduct
                  id = "6"
                  title = "EYEBOGLER Men Yellow Regular fit Cotton Round neck T-Shirt - Pack Of 1"
                  image = 'assets/images/Flash Products/T-shirt.webp'
                  price = { "₹499"}
                  rating = "4"
                  quantity = {1}
                  updatedPrice = {499}
                  />
              
              </div>
            </div>
 </div>
    )
}

export default  ProductList;
