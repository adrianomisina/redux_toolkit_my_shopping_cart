// src/components/Cart.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, removeAllFromCart } from '../features/cart/cartSlice';
import Modal from 'react-modal';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIncreaseQuantity = itemId => {
    dispatch(addToCart({ id: itemId }));
  };

  const handleDecreaseQuantity = itemId => {
    const existingItem = cartItems.find(item => item.id === itemId);

    if (existingItem && existingItem.quantity > 1) {
      dispatch(removeFromCart(itemId));
    } else if (existingItem && existingItem.quantity === 1) {
      dispatch(removeFromCart(itemId));
    }
  };

  const handleRemoveAll = () => {
    dispatch(removeAllFromCart());
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // Simula o refresh da página após fechar o modal
    window.location.reload();
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Cart</h2>
      <ul className="list-disc pl-4">
        {cartItems.map(item => (
          <li key={item.id} className="mb-2">
            {item.name} - ${item.price} (Quantity: {item.quantity})
            <button
              className="ml-2 bg-green-500 text-white px-2 py-1 rounded"
              onClick={() => handleIncreaseQuantity(item.id)}
            >
              +
            </button>
            <button
              className="ml-2 bg-yellow-500 text-white px-2 py-1 rounded"
              onClick={() => handleDecreaseQuantity(item.id)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <strong>Total: ${calculateTotal().toFixed(2)}</strong>
      </div>

      <div className='flex gap-4 mt-4'>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={handleRemoveAll}
        >
          Remove All
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Compra Efetuada com Sucesso"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Compra Efetuada com Sucesso!</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleModalClose}
          >
            Fechar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
