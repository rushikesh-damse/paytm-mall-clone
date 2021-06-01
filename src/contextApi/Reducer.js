export const initialState = {
    basket: []
    
  };
  
export  const reducer = (state, action) => {
    //console.log(action);
    switch (action.type) {
      case "Add_To_Basket":
        return {
          ...state,
          basket : [...state.basket , action.items],
        };
    
  
      case "Remove_From_Basket":
        const id = action.id;
        const newBasket = [...state.basket];
        newBasket.splice(state.basket.findIndex(a => a.id ===id) , 1)

        return {
         ...state,
          basket : newBasket,
       };

        default :
        return {...state}
     }
};
  
export const getTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount,0);