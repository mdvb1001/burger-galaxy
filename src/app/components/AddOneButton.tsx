"use client";

import React from "react";
import { useCartContext } from "../Contexts/CartContext";

interface AddOneButtonProps {
  id: string;
}

const AddOneButton = ({ id }: AddOneButtonProps) => {
  const { addOneToCart } = useCartContext();
  const handleRemoveFromCart = () => {
    addOneToCart(id);
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    if (cart[id]) {
      cart[id]++;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return <button onClick={() => handleRemoveFromCart()}>+</button>;
};

export default AddOneButton;
