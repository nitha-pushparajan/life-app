'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the structure of a product in the cart
interface CartProduct {
  id: string;
  quantity: number;
}

// Define the context data structure
interface CartContextType {
  cart: CartProduct[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

// Create a context with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component to wrap your app
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  // Add product to the cart
  const addToCart = (id: string) => {
    setCart((prevCart) => {
      // Check if the product already exists in the cart
      const productIndex = prevCart.findIndex((item) => item.id === id);
      if (productIndex === -1) {
        return [...prevCart, {
          id,
          quantity: 1
        }]; // If not, add it
      } else {
        const updatedCart = [...prevCart];
        updatedCart[productIndex].quantity += 1; // Update the quantity if exists
        return updatedCart;
      }
    });
  };

  // Remove product from the cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === id);
  
      // If product exists in the cart
      if (productIndex !== -1) {
        const updatedCart = [...prevCart];
  
        // Check if the quantity is greater than 1
        if (updatedCart[productIndex].quantity > 1) {
          // If more than 1 quantity, just decrease the quantity by 1
          updatedCart[productIndex].quantity -= 1;
        } else {
          // If the quantity is 1, remove the product from the cart
          updatedCart.splice(productIndex, 1);
        }
  
        return updatedCart;
      }
  
      return prevCart; // Return the cart as is if the product is not found
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
