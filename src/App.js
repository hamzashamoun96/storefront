import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Categories from './components/categories';
import Products from './components/products';

function App() {
  return (
    <>
    <div id="blur"></div>
    <Header/>
    <Categories/>
    <Products/>
    <Footer/>
    </>
  );
}

export default App;