import React from "react";
import Image from "next/image";
import BackButton from "@/app/components/BackButton";
import AddToCartButton from "@/app/components/AddToCartButton";
import { formatCentsToDollar } from "@/app/utils";
import { Product } from "@/app/types";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="flex flex-col items-center bg-gray-200 rounded-xl py-4 min-w-64">
      <div className="mx-4">
        <BackButton />
        <div className="flex justify-center mb-4 h-72 md:h-96 relative overflow-hidden">
          <Image
            className="rounded-xl object-cover"
            src={product.image}
            fill={true}
            alt={product.name}
          />
        </div>
        <h1 className="text-xl md:text-4xl font-bold flex justify-center mb-4">
          {product.name}
        </h1>
        <div className="flex justify-center flex-col max-w-[500px] mb-4">
          <p className="font-bold decoration-dotted underline mb-2">
            ${formatCentsToDollar(product.price)}
          </p>
          <p className="mb-2">{product.description}</p>
          <span className="italic font-medium">{product.calorie} calories</span>
        </div>
        <div className="flex justify-center">
          <AddToCartButton id={product.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
