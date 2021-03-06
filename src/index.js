import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import basketReducer , {initialBasketState} from './contextApi/BasketReducer'
import { StateProvider } from "./contextApi/StateProvider";

ReactDOM.render(
  
  <React.StrictMode>
   <StateProvider initialState={initialBasketState} 
   reducer={basketReducer}>
      <App /> 
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
