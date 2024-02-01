"use client";

import React from "react";
import { useCartContext } from "../Contexts/CartContext";
import { Button } from "@nextui-org/button";

interface DeleteAllButtonProps {
  id: string;
}

const DeleteAllButton = ({ id }: DeleteAllButtonProps) => {
  const { removeFromCartCompletely } = useCartContext();
  const handleRemoveFromCart = () => {
    removeFromCartCompletely(id);
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    delete cart[id];
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return <Button onClick={() => handleRemoveFromCart()}>Delete</Button>;
};

export default DeleteAllButton;