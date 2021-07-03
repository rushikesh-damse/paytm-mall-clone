import React from 'react';
import Header from './components/Header'
import Cart from './components/Cart'
import MyOrders from './components/MyOrders'
import ProductList from './components/ProductList'
import SaveForLaterCart from './components/SaveForLaterCart'
import Category from './components/Products/Category'
import Footer from './components/Footer'
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
         <Footer/>
       </Route>
        <Route path="/saveforlater">
         <Header />
         <SaveForLaterCart/>
         <Footer/>
        </Route>
        <Route path="/myorders">
         <Header />
         <MyOrders/>
         <Footer/>
        </Route>
        <Route path="/cart">
        <Header/>
        <Cart/>
        <Footer/>
        </Route>
        <Route path="/login">
        <h2>Login page</h2>
        </Route>
        <Route path="/">
        <Header />
        <ProductList/>
        <Footer/>
        </Route>

       </Switch>
      </Router>
    </div>
  );
}

export default App;
