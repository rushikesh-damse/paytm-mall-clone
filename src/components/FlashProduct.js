import React from 'react'
import '../Styles/FlashProduct.css'

function FlashProduct({title , image , price , id , rating}) {
    return (
        <div className="flashproduct">
            <img src={image}/>
            <p className="flashproduct__price">{price}</p>   
            <p  className="flashproduct__title">{title}</p>
            <button>Buy Now</button>
          </div>
    )
}

export default FlashProduct
