export const initialState = {
    basket: [],
  };
  
  const priceToNumber = (price) => (parseInt(price.replace('₹' , '')));
  
  export const getBasketTotal = (basket) => 
  basket.reduce((amount, item) => (priceToNumber(item.price) + amount), 0);

    const reducer = (state, action) => {
    //console.log(action);
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

        default :
        return {...state}
     }
};

export default reducer
  
