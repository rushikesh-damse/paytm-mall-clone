
import React from 'react'
import Product from '../components/Product'
import Electronics  from '../images/All Categories/Electronics.webp'
import Mobiles  from '../images/All Categories/Mobiles.webp'
import Covid   from '../images/All Categories/covid essential.webp'
import  Mask from '../images/All Categories/Face Mask.webp'
import Men from '../images/All Categories/Men.webp'
import Women  from '../images/All Categories/Women.webp'



const ProductList =  () => {
    return (
     
       <div className="product">
         <div className="product__categories">
          <Product  title="Electronics" image = {Electronics} /> 
          <Product  title="Mobiles" image = {Mobiles} /> 
          <Product  title="Covid Essential" image = {Covid } /> 
          <Product   title="Face Mask" image = { Mask} /> 
          <Product   title="Men's Fashion" image = {Men} /> 
          <Product   title="Women's Fashion" image = {Women}/> 
        </div>

        </div>
    )
}

export default  ProductList;
