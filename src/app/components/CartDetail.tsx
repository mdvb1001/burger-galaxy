import React from "react";
import BackButton from "@/app/components/BackButton";
import { Product } from "@/app/types";
import CartItemsList from "@/app/components/CartItemsList";

interface CartDetailProps {
  products: Product[];
}

const CartDetail: React.FC<CartDetailProps> = ({ products }) => {
  return (
    <div className="flex flex-col items-center bg-gray-200 rounded-xl py-4 min-w-64 bg-primary shadow-xl shadow-blue-500/50">
      <div className="px-4 md:px-12 w-full">
        <BackButton />
        <h1 className="text-xl md:text-4xl font-bold flex justify-center mb-4">
          Cart
        </h1>
        <CartItemsList data={products} />
      </div>
    </div>
  );
};

export default CartDetail;
