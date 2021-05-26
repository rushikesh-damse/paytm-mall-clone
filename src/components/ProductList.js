
import React from 'react'
import Product from '../components/Product'
import Electronics  from '../images/All Categories/Electronics.webp'
import Mobiles  from '../images/All Categories/Mobiles.webp'
import Covid   from '../images/All Categories/covid essential.webp'
import  Mask from '../images/All Categories/Face Mask.webp'
import Men from '../images/All Categories/Men.webp'
import Women  from '../images/All Categories/Women.webp'
import bigBanner from '../images/Banners/banner_1.webp'
import smallBanner1 from '../images/Banners/banner_2.webp'
import smallBanner2 from '../images/Banners/banner_3.webp'
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







        </div>
    )
}

export default  ProductList;
