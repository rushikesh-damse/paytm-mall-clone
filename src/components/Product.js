import React from 'react'
import  '../Styles/Product.css'
const Product = ({title , image}) => {
   const style = {
       width: '150px'
   }

    return (
        <div className='Product'>
            
           <div className="product__catrgories">
            <img style={style} className = "product__img" src={image}/>
            <p className="product__text">{title}</p>
            </div>
        </div>
    )
}

export default Product