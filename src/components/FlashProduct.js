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
        <div className="flashproduct__item">
          <div className="flashproduct__item__img__div">
            <img className = "flashproduct__item__img" src={image}/>
          </div>
            <p className="flashproduct__item__price">{price}</p>   
            <p  className="flashproduct__item__title">{title}</p>
            <button onClick={additems} >Buy Now</button>
          </div>
    )
}

export default FlashProduct
