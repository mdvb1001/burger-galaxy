"use client";

import React, { createContext, useState, useContext, useCallback } from "react";

interface Item {
  id: string;
  quantity: number;
}

interface CartContextProps {
  cartItems: Item[];
  addOneToCart: (id: string) => void;
  removeOneFromCart: (id: string) => void;
  totalQuantityInCart: number;
  removeFromCartCompletely: (id: string) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addOneToCart = useCallback((id: string) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);
      if (existingItem) {
        // Update only the quantity of the existing item
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add a new item to the cart
        return [...prevItems, { id, quantity: 1 }];
      }
    });
  }, []);

  const totalQuantityInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const removeOneFromCart = useCallback((id: string) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          // If the item quantity is more than one, decrement it by one
          return prevItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          // If the item quantity is one, remove the item from the array
          return prevItems.filter((item) => item.id !== id);
        }
      } else {
        // If the item doesn't exist in the cart, return the existing items
        return prevItems;
      }
    });
  }, []);

  const removeFromCartCompletely = useCallback((id: string) => {
    setCartItems((prevItems) => {
      return prevItems.filter(item => item.id !== id)
    })
  }, [])

  return (
    <CartContext.Provider value={{ cartItems, addOneToCart, removeOneFromCart, totalQuantityInCart, removeFromCartCompletely }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartItems must be used within a CartProvider");
  }
  return context;
};
