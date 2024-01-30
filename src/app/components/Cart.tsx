'use client'

import React from 'react';
import { useCartItems } from '@/app/Contexts/CartContext';

const Cart = () => {
    const { totalQuantityInCart } = useCartItems();

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