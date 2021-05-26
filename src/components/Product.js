import React from 'react'
import  '../Styles/Product.css'
const Product = ({title , image}) => {

    return (
        <div className='Product'>
            <div className="product__catrgories">
            <img  className = "product__img" src={image}/>
            <p className="product__text">{title}</p>
            </div>
        </div>
    )
}

export default Product