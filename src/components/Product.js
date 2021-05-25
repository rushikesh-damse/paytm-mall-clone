import React from 'react'
import  '../Styles/Product.css'
const Product = ({title , image}) => {
    return (
        <div className='categoryProduct'>
            
           <div className="categoryProduct__img">
            <img  src={image}/>
            <p>{title}</p>
            </div>
        
            
     </div>
    )
}

export default Product