"use client";

import React from "react";
import { useCartContext } from "../Contexts/CartContext";

interface DeleteButtonProps {
  id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const { removeFromCartCompletely } = useCartContext();
  const handleRemoveFromCart = () => {
    removeFromCartCompletely(id);
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    delete cart[id];
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return <button onClick={() => handleRemoveFromCart()}>Delete</button>;
};

export default DeleteButton;