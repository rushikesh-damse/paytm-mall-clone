export const initialState = {
    basket: [],
    totalItem : 0,
    totalAmount : 0,
  };
  
  const priceToNumber = (price) => (parseInt(price.replace('₹' , '')));
  
 const reducer = (state, action) => {
    console.log(state.basket);
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
          
         return {
            ...state,
           basket : incrementQuantity,
         };

         case "Decrement" :
          const decrementQuantity = state.basket.map(item => {
            if(action.id === item.id){
             return{...item , quantity : item.quantity-1 } 
            }
            return item;
          }).filter(item => item.quantity!==0);
 
          return {
             ...state,
            basket : decrementQuantity,
          };
          
          case "Get_Total_Amount" :
            const newBasket1 = [...state.basket];
            const getBasketTotal = (newBasket1) =>  newBasket1.reduce((amount, item) =>
              (priceToNumber(item.price)*(item.quantity) + amount), 0);
            
           return {
               ...state,
               totalAmount : getBasketTotal(newBasket1),
            };

            case "Get_Item_Total" :
              const newBasket2 = [...state.basket];
              const getBasketItem = (newBasket2) =>  newBasket2.reduce((amount, item) =>
                ((item.quantity) + amount), 0);
              
                // console.log(getBasketItem);
             return {
                 ...state,
                 totalItem : getBasketItem(newBasket2),
              };

        default :
        return {...state}
     }
};

export default reducer
  
