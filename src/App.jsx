// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
        <div className="mb-8">
          <Cart />
        </div>
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
