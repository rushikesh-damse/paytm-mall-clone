import React from 'react';
import Header from './components/Header'
import ProductList from './components/ProductList'
import './Styles/GlobalStyle.css'


const App = () => {
  return (
    <div className="App">
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;
