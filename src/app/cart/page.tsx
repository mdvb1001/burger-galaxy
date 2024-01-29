import React from 'react';
import { NextPage } from 'next';
import BackButton from "@/app/components/BackButton";

const CartPage: NextPage = () => {
  return (
    <div>
      <BackButton />
      <h1>Cart Page</h1>
    </div>
  );
};

export default CartPage;