"use client";

import ItemCard from "./ItemCard";
import { Product } from "@/app/types";

interface HomeContainerProps {
  data: [Product];
}

const HomeContainer = ({ data }: HomeContainerProps) => {
  return (
    <>
      <h1 className="pb-4 font-bold text-3xl">Menu</h1>
      <ul className="flex flex-wrap -mx-2">
        {data.map((product: any) => (
          <li key={product.id} className="w-full md:w-1/3 mb-4">
            <ItemCard item={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomeContainer;
