"use client";

import React from "react";
import { useCartContext } from "../Contexts/CartContext";

interface RemoveOneButtonProps {
  id: string;
}

const RemoveOneButton = ({ id }: RemoveOneButtonProps) => {
  const { removeOneFromCart } = useCartContext();
  const handleRemoveFromCart = () => {
    removeOneFromCart(id);
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    if (cart[id]) {
      cart[id]--;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return <button onClick={() => handleRemoveFromCart()}>-</button>;
};

export default RemoveOneButton;
