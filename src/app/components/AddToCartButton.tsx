"use client";

import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useCartContext } from "@/app/Contexts/CartContext";
import { Button } from "@nextui-org/button";

interface AddToCartButtonProps {
  id: string;
}

const AddToCartButton = ({ id }: AddToCartButtonProps) => {
  const { addOneToCart } = useCartContext();

  const triggerToast = () => {
    toast.success("This item was added to your cart", {
      style: {
        border: "1px solid #050F33",
        padding: "16px",
        color: "#050F33",
      },
      iconTheme: {
        primary: "#050F33",
        secondary: "#FFFAEE",
      },
    });
  };

  const handleAddToCart = () => {
    addOneToCart(id);
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    if (!cart[id]) {
      cart[id] = 0;
    }
    cart[id]++;
    localStorage.setItem("cart", JSON.stringify(cart));
    triggerToast();
  };

  return (
    <div>
      <Button onClick={handleAddToCart}>
        Add To Cart
      </Button>
      <Toaster position="top-center" />
    </div>
  );
};

export default AddToCartButton;
