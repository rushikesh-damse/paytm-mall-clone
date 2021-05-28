export const initialState = {
    basket: ["i ", "h"],
    
  };
  
  
 export  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
        };
    
  
      case "REMOVE_FROM_BASKET":
        return {
          ...state,
        
        }

        default :
        return {state}
     }
};
  
 