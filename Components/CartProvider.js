import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

 
  // Load cart data from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to the cart

  

  const addToCart = (product, changeBy = 1) => {
   
  
    const existingItem = cart.find((item) => item.productId === product.productId);
  
    if (existingItem) {
      // If item exists, update quantity
      const newQuantity = existingItem.quantity + changeBy;
  
      // Remove item if new quantity is 0 or less
      if (newQuantity <= 0) {
        setCart((prevCart) =>
          prevCart.filter((item) => item.productId !== product.productId)
        );
      } else {
        // Otherwise, update the quantity
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.productId === product.productId
              ? { ...item, quantity: newQuantity }
              : item
          )
        );
      }
    } else {
      // If item doesn't exist and changeBy is positive, add it
      if (changeBy > 0) {
        setCart([...cart, { ...product, quantity: changeBy }]);
      }
    }
  };

 





  




  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.productId !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;