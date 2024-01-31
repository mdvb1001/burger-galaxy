"use client";

import React, { useEffect } from "react";
import { useCartContext } from "@/app/Contexts/CartContext";

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

    setExistingCart(cart);
  }, []);

  return <div>{totalQuantityInCart > 0 ? totalQuantityInCart : null}</div>;
};

export default Badges;
