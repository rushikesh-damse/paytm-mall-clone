
import React from 'react'

//components
import Product from '../components/Product'
import FlashProduct from '../components/FlashProduct'

//Product Categories
import Electronics  from '../images/All Categories/Electronics.webp'
import Mobiles  from '../images/All Categories/Mobiles.webp'
import Covid   from '../images/All Categories/covid essential.webp'
import  Mask from '../images/All Categories/Face Mask.webp'
import Men from '../images/All Categories/Men.webp'
import Women  from '../images/All Categories/Women.webp'
import bigBanner from '../images/Banners/banner_1.webp'
import smallBanner1 from '../images/Banners/banner_2.webp'
import smallBanner2 from '../images/Banners/banner_3.webp'
 
//Flash products
import Trimmer from '../images/Flash Products/Trimmer.webp'
import ApplePhone from '../images/Flash Products/Apple iPhone11.webp'
import Shoes from '../images/Flash Products/Sports Shoes.webp'
import Tshirt from '../images/Flash Products/T-shirt.webp'
import Saree from '../images/Flash Products/Saree.webp'
import HeadPhone from '../images/Flash Products/Headphone.webp'


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
           
          <Product  title="Electronics" image = {Electronics} /> 
          
          <Product  title="Mobiles" image = {Mobiles} /> 
          
          <Product  title="Covid Essential" image = {Covid } /> 
          
          <Product   title="Face Mask" image = { Mask} /> 
          
          <Product   title="Men's Fashion" image = {Men} /> 
         
          <Product   title="Women's Fashion" image = {Women}/> 
         
        </div>
        
         <div className="banner">
         <div className="banner__bigBanner">
            <img className="imgsize" src = {bigBanner}/>
         </div>

         <div className="banner__smallBanner">
           <div className="smallBanner__img1">
             <img  className="imgsize" src={smallBanner1}/>
           </div>
           <div className="smallBanner__img2">
             <img  className="imgsize" src={smallBanner2}/>
           </div>
        
         </div>
         </div>
          
          <div className="flashproducts">
               <div className="flashProduct">
                 <FlashProduct
                  id = "1"
                  title = "Apple iPhone 11 128 GB White(Without Earphone & Adapter"
                  image = {ApplePhone}
                  price = { "₹ 59000"}
                  rating = "3.8"
                  />
               </div>

               <div className="flashProduct">
                 <FlashProduct
                  id = "2"
                  title = "Philips BT1212/15 Beard & Hair Trimmer For Men (Green)"
                  image = {Trimmer}
                  price = { "₹ 899"}
                  rating = "4.1"
                  />
               </div>

               <div className="flashProduct">
                 <FlashProduct
                  id = "3"
                  title = "PUMA Fabric Sports Shoes for men"
                  image = {Shoes}
                  price = { "₹ 1719"}
                  rating = "3.6"
                  />
               </div>

               <div className="flashProduct">
                 <FlashProduct
                  id = "4"
                  title = "Vedant Vastram Women's Silk Printed Lace Work Saree With Jaquard blouse piece (Dark blue Colour)"
                  image = {Saree}
                  price = { "₹ 1079"}
                  rating = "2"
                  />
               </div>

               <div className="flashProduct">
                 <FlashProduct
                  id = "5"
                  title = "boAt bassheads 100 BassHeads 100 In-Ear Wired Headphone ( Black )"
                  image = {HeadPhone}
                  price = { "₹ 379"}
                  rating = "4.1"
                  />
               </div>

               <div className="flashProduct">
                 <FlashProduct
                  id = "6"
                  title = "EYEBOGLER Men Yellow Regular fit Cotton Round neck T-Shirt - Pack Of 1"
                  image = {Tshirt}
                  price = { "₹ 499"}
                  rating = "4"
                  />
               </div>

               

            </div>
 </div>
    )
}

export default  ProductList;
