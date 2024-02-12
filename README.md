
My Shopping Cart Project
Overview
This project is a simple implementation of a shopping cart using React and Redux. It allows users to view a list of products, add them to a shopping cart, adjust quantities, remove items, and proceed to checkout. The project is organized into several components, with state management handled by Redux.

Project Structure
1. src/components/Cart.jsx
This component displays the user's shopping cart, including a list of items, their quantities, and buttons to increase, decrease, or remove items.
It calculates and displays the total price of the items in the cart.
Users can remove all items from the cart or proceed to checkout, which triggers a modal to confirm the successful purchase.
2. src/components/ProductList.jsx
Displays a list of products with their names and prices.
Users can add products to their cart by clicking the "Add to Cart" button.
3. src/features/cart/cartSlice.js
Redux slice containing the cart state and actions to add, remove, or removeAll items from the cart.
Uses the createSlice function from @reduxjs/toolkit for simpler reducer creation.
4. src/App.jsx
Main component rendering the entire application.
Integrates the Redux store and includes the Cart and ProductList components.
Getting Started
Clone the Repository:

bash
Copy code
git clone <repository-url>
cd <project-directory>
Install Dependencies:

bash
Copy code
npm install
Run the Application:

bash
Copy code
npm start
The application will be accessible at http://localhost:3000.

Usage
View the list of products on the "Product List" page.
Click the "Add to Cart" button to add a product to the shopping cart.
Navigate to the "Cart" page to view and manage the items in the cart.
Adjust quantities, remove items, or proceed to checkout.
A modal will confirm a successful purchase.
Technologies Used
React: A JavaScript library for building user interfaces.
Redux: A predictable state container for JavaScript applications.
Redux Toolkit: A set of tools for efficient Redux development.
React-Redux: Official React bindings for Redux.
React Modal: A simple modal component for React.
Contributing
Feel free to contribute by submitting issues or pull requests. Bug reports, suggestions, and improvements are welcome!

License
This project is licensed under the MIT License.