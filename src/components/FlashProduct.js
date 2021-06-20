import React from 'react'
import '../Styles/FlashProduct.css'
import { useStateValue } from "../contextApi/StateProvider";

function FlashProduct({id , title ,price, image , rating, quantity, updatedPrice}) {

  const [{} , dispatch] = useStateValue();
  const additems = () =>{
       dispatch({
        type : "Add_To_Basket",
        items:{
          id :id,
          title :title,
          price :price,
          image :image,
          rating:rating,
          quantity :quantity,
          updatedPrice :updatedPrice,
      
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
