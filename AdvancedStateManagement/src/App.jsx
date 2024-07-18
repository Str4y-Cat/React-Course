import { useState } from 'react';

import { CartContext } from '../store/ShoppingCartContext.jsx';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import CartContextProvider from '../store/ShoppingCartContext.jsx';

function App() {
  

  return (
    <CartContextProvider>
      <Header/>
      <Shop  />
    </CartContextProvider>
  );
}

export default App;
