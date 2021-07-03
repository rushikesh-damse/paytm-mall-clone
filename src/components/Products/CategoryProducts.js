import React from 'react'
import '../../Styles/Category.css';
import {useStateValue} from '../../contextApi/StateProvider'

const CategoryProducts = ({product , id}) => {
    const[ {basket} , dispatch]= useStateValue();

         
    const addToBasket =  (e,id) => {
        console.log(id)
          product.map(item => {
             if(id === item.id){
                 return dispatch({
                     type : "Add_To_Basket",
                     items : {
                         id :item.id,
                         title :item.title,
                         image : item.image,
                         price :item.price,
                         rating:item.rating,
                         quantity :item.quantity,
                         updatedPrice :item.updatedPrice,
                         category : item.category, 
                     },
           });
           }})

    };


   const productDetails = product.map(item => {
    //    console.log(item);
    return <div className="categoryproduct">
            <div className="categoryproduct__items__img">
                  <img src={item.image}/>
            </div>
             <div className="categoryproduct__items__price">
                 <span>{item.price}</span>
            </div>
            <div className="categoryproduct__items__title">
                 <p>{item.title}</p>
            </div>
            <button  onClick = {(e) => addToBasket(e,item.id) } >Buy Now</button>

          </div>
        
 });

   return (
        <div className = "categoryproducts">
            <div className="categoryproducts__header">
              <h2 className ="categoryproducts__header__title">{id} Products</h2>
              </div>
             <div className="categoryproducts__details">
                  {productDetails}   
              </div>
              
        </div>
    )
}

export default CategoryProducts
