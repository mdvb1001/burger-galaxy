"use client";

import React from "react";
import { useCartContext } from "../Contexts/CartContext";
import { Button } from "@nextui-org/button";

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

  return <Button isIconOnly className="rounded-full h-10 w-10 p-0" onClick={() => handleRemoveFromCart()}>-</Button>;
};

export default RemoveOneButton;
