"use client";

import React from "react";
import { useCartContext } from "@/app/Contexts/CartContext";
import { Button } from "@nextui-org/button";

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

  return <Button isIconOnly className="rounded-full h-10 w-10 p-0" onClick={() => handleRemoveFromCart()}>+</Button>;
};

export default AddOneButton;
