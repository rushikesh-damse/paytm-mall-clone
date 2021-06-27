export const initialBasketState = {
    basket: [],
    saveForLaterBasket : [],
    totalItemInBasket : 0,
    totalItemInSaveForLaterBasket : 0,
    totalAmount : 0,
  };
  
  const priceToNumber = (price) => (parseInt(price.replace('₹' , '')));
  
 const basketReducer = (state, action) => {
    //console.log(state.basket);
    switch (action.type) {
      case "Add_To_Basket":
        return {
          ...state,
          basket : [...state.basket , action.items]
        };
    
  
      case "Remove_From_Basket":
        const id = action.id;
        const newBasket = [...state.basket];
        newBasket.splice(state.basket.findIndex(item => item.id === id) , 1);

        return {
         ...state,
          basket : newBasket,
       };

       case "Increment" :
         const incrementQuantity = state.basket.map(item => {
           if(action.id === item.id){
            return{...item , quantity : item.quantity+1 } 
           }
           return item;
         })
        
         const updatedIncrementQuantityPrice = incrementQuantity.map(item => {
            if(action.id === item.id){
            return{...item , updatedPrice : priceToNumber(item.price)* item.quantity } 
           }
           return item;
         })

        return {
            ...state,
           basket : updatedIncrementQuantityPrice,
         };

         case "Decrement" :
          const decrementQuantity = state.basket.map(item => {
            if(action.id === item.id){
             return{...item , quantity : item.quantity-1 } 
            }
            return item;
          }).filter(item => item.quantity!==0);
           
          const updatedDecrementQuantityPrice = decrementQuantity.map(item => {
            if(action.id === item.id){
            return{...item , updatedPrice : priceToNumber(item.price)* item.quantity } 
           }
           return item;
         })
         
         
         return {
             ...state,
            basket : updatedDecrementQuantityPrice,
          };
          
          case "Get_Total_Amount" :
            const newBasket1 = [...state.basket];
            const getBasketTotal = (newBasket1) =>  newBasket1.reduce((amount, item) =>
              (priceToNumber(item.price)*(item.quantity) + amount), 0);
            
           return {
               ...state,
               totalAmount : getBasketTotal(newBasket1),
            };

            case "Get_Item_Total_Of_Basket" :
              const newBasket2 = [...state.basket];
              const getBasketItem = (newBasket2) =>  newBasket2.reduce((amount, item) =>
                ((item.quantity) + amount), 0);
              
                // console.log(getBasketItem);
             return {
                 ...state,
                 totalItemInBasket : getBasketItem(newBasket2),
             };

             case "Dispatch_To_SaveforLater" :
            
              const updateSaveForLater = [...state.saveForLaterBasket ,  action.items]
  
              const deleteItemFromBasket = state.basket.filter(item => { return action.items.id !== item.id} )
               return {
                 ...state,
                 basket : deleteItemFromBasket,
                 saveForLaterBasket : updateSaveForLater,
          };

          case "Get_Item_Total_Of_Saveforlaterbasket" :
            const newBasket3 = [...state.saveForLaterBasket]
           const saveforlaterbaskettotal = (newBasket3) => (newBasket3).reduce( (amount , item) => ((item.quantity) + amount) , 0);

               return {
                 ...state,
                 totalItemInSaveForLaterBasket : saveforlaterbaskettotal(newBasket3),

           };

           case "Delete_Item_From_Saveforlater" :
            const updatedSaveforlaterAfterDeletion = state.saveForLaterBasket.filter(item => (
              action.id !== item.id
            ))
             return {
                 ...state,
                saveForLaterBasket :updatedSaveforlaterAfterDeletion,
           };

           case "Move_TO_Basket" :
                const updatedBasket = [...state.basket , action.items];
                const updatedSaveForLater = state.saveForLaterBasket.filter(item => { return item.id !== action.items.id});
           return {
                 ...state,
                 basket : updatedBasket,
                 saveForLaterBasket : updatedSaveForLater,
           };
           
         default : 
          return {...state};
      }


};

export default basketReducer
  
