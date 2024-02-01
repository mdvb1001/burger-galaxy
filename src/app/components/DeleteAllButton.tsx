"use client";

import React from "react";
import { useCartContext } from "../Contexts/CartContext";
import { Button } from "@nextui-org/button";
import { TrashIcon } from "@/app/icons/TrashIcon";

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

  return <Button isIconOnly onClick={() => handleRemoveFromCart()}><TrashIcon className="w-4 h-4" /></Button>;
};

export default DeleteAllButton;