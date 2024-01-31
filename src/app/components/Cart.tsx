'use client'

import React, { useEffect } from 'react';
import { useCartContext } from '@/app/Contexts/CartContext';

const Cart = () => {
    const { totalQuantityInCart, setExistingCart } = useCartContext();

    useEffect(() => {
      const existingCart = JSON.parse(localStorage.getItem("cart") || "{}");
      const cartIds = Object.keys(existingCart);
      const cart = cartIds.map((id) => {
        return {
          id,
          quantity: existingCart[id],
        };
      });
      setExistingCart(cart)
    }, [])

    return (
        <div>
            <h1>Cart with Badges</h1>
            <ul>
                {totalQuantityInCart > 0 ? totalQuantityInCart : null}
            </ul>
        </div>
    );
};

export default Cart;