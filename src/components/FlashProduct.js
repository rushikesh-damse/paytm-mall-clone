import React from 'react'
import '../Styles/FlashProduct.css'


function FlashProduct({id , title ,price, image , rating}) {

  const additems = () =>{
       dispatch({
        type : "Add_to_basket",
        items:{
          id :id,
          title :title,
          price :price,
          image :image,
          rating:rating,
        },
       });

  };
 return (
        <div className="flashproduct">
            <img src={image}/>
            <p className="flashproduct__price">{price}</p>   
            <p  className="flashproduct__title">{title}</p>
            <button onClick={additems} >Buy Now</button>
          </div>
    )
}

export default FlashProduct
