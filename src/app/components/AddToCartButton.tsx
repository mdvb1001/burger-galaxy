"use client";

import React from "react";
import { useCartContext } from "@/app/Contexts/CartContext";
import { Button } from "@nextui-org/button";

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

  return <Button color="primary" onClick={handleAddToCart}>Add To Cart</Button>;
};

export default AddToCartButton;
