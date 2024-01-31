import React from 'react';
import { NextPage } from 'next';
import BackButton from "@/app/components/BackButton";
import CartItemsList from "@/app/components/CartItemsList";
import { fetchAllProducts } from '@/app/requests';

const CartPage: NextPage = async () => {
  const products = await fetchAllProducts();

  return (
    <div>
      <BackButton />
      <h1>Cart Page</h1>
      <CartItemsList data={products} />
    </div>
  );
};

export default CartPage;