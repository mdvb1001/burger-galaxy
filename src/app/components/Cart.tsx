'use client'

import React from 'react';
import { useCartContext } from '@/app/Contexts/CartContext';

const Cart = () => {
    const { totalQuantityInCart } = useCartContext();

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