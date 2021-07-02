import React from 'react';
import Header from './components/Header'
import Cart from './components/Cart'
import MyOrders from './components/MyOrders'
import ProductList from './components/ProductList'
import SaveForLaterCart from './components/SaveForLaterCart'
import Category from './components/Products/Category'
import './Styles/GlobalStyle.css'
import {
  BrowserRouter as Router,Switch, Route} from "react-router-dom";


const App = () => {
  return (
    <div className="App">
        <Router>
        <Switch>
        <Route path={"/product/:id"}>
         <Header />
         <Category/>
       </Route>
        <Route path="/saveforlater">
         <Header />
         <SaveForLaterCart/>
        </Route>
        <Route path="/myorders">
         <Header />
         <MyOrders/>
        </Route>
        <Route path="/cart">
        <Header/>
        <Cart/>
        </Route>
        <Route path="/login">
        <h2>Login page</h2>
        </Route>
        <Route path="/">
        <Header />
        <ProductList/>
        </Route>

       </Switch>
      </Router>
    </div>
  );
}

export default App;
