'use client'

import React from 'react';
import { useCartItems } from '@/app/Contexts/CartContext';

interface AddToCartButtonProps {
    id: string;
}

const AddToCartButton = ({ id }: AddToCartButtonProps) => {
    const { addToCart } = useCartItems();

    return (
        <button onClick={() => addToCart(id)}>Add To Cart</button>
    );
};

export default AddToCartButton;
