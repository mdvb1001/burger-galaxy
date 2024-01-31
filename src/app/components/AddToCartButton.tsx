"use client";

import React from "react";
import { useCartContext } from "@/app/Contexts/CartContext";

interface AddToCartButtonProps {
  id: string;
}

const AddToCartButton = ({ id }: AddToCartButtonProps) => {
  const { addOneToCart } = useCartContext();

  const handleAddToCart = () => {
    addOneToCart(id);
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    if (!cart[id]) {
      cart[id] = 0;
    }
    cart[id]++;
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return <button onClick={handleAddToCart}>Add To Cart</button>;
};

export default AddToCartButton;
