'use client'

import React from 'react';
import { useCartContext } from '@/app/Contexts/CartContext';

interface AddToCartButtonProps {
    id: string;
}

const AddToCartButton = ({ id }: AddToCartButtonProps) => {
    const { addOneToCart } = useCartContext();

    return (
        <button onClick={() => addOneToCart(id)}>Add To Cart</button>
    );
};

export default AddToCartButton;
