// src/components/ProductList.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const products = [
  { id: 1, name: 'Product 1', price: 20 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 40 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>
      <ul className="list-disc pl-4">
        {products.map(product => (
          <li key={product.id} className="mb-2">
            {product.name} - ${product.price}
            <button
              className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
