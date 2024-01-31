"use client";

import React, { useEffect } from "react";
import { useCartContext } from "@/app/Contexts/CartContext";
import { exit } from "process";

const Badges = () => {
  const { totalQuantityInCart, setExistingCart } = useCartContext();

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "{}");
    const cartIds = Object.keys(existingCart);
    if (cartIds.length === 0) {
      return;
    }
    const cart = cartIds.map((id) => {
      return {
        id,
        quantity: existingCart[id],
      };
    }).filter(item => item.quantity > 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    setExistingCart(cart);
  }, []);

  return <div>{totalQuantityInCart > 0 ? totalQuantityInCart : null}</div>;
};

export default Badges;
