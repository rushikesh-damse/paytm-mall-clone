import React from 'react';
import Header from './components/Header'
import ProductList from './components/ProductList'
import './Styles/GlobalStyle.css'
import {
  BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";


const App = () => {
  return (
    <div className="App">
       
       
      <Router>
        <Switch>
        <Route path="/payment">
        <h2>Payment</h2>
        </Route>
        <Route path="/cart">
        <Header />
        <h2>Shopping Cart</h2>
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
