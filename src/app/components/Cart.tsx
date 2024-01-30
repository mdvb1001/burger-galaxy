'use client'

import React from 'react';
import { useCartItems } from '@/app/Contexts/CartContext';

const Cart = () => {
    const { cartItems } = useCartItems();

    return (
        <div>
            <h1>Cart with Badges</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={item.id + index}>{item.id} - {item.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;