import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../Styles/SaveForLaterItems.css'
import { useStateValue } from "../contextApi/StateProvider";

function SaveForLaterItems({title,id,price,image,rating,quantity,updatedPrice}) {


const [{basket , saveForLaterBasket , totalItemInSaveForLaterBasket} , dispatch] = useStateValue();  

const deleteItem =  () => {
  dispatch({
      type : "Delete_Item_From_Saveforlater",
      id : id,
 });
};

const moveToBasket = () =>{
    dispatch({
      type : "Move_TO_Basket",
      items : {
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
        <div className="saveforlateritems">
             <div className="saveforlateritemsleft">
             <div className="saveforlateritem_img"> 
                <img className="saveforlateritem_product_img"  src = {image} />
             </div>
              <div className="saveforlateritem_title">
                  <h3>{title}</h3>
              </div>
             </div>
            
            <div className="saveforlateritemsright">
               <div className="saveforlateritem_price">
                <h2>{price}</h2>
                </div>
               
                <div className="saveforlateritem_remove">
                 <div  onClick = {deleteItem}className="removeFromBasket">
                <DeleteIcon className="deleteicon" />
                 Remove
                 </div>   
                 <div onClick = {moveToBasket} className="saveforlater">
                 | <FavoriteIcon  className ="heartIcon"/>
                Move to Basket
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default SaveForLaterItems
