// I should have kept this a server component... but forgot to change it back after abstracting

import ItemCard from "./ItemCard";
import { Product } from "@/app/types";

interface HomeContainerProps {
  data: Product[];
}

const HomeContainer = ({ data }: HomeContainerProps) => {
  return (
    <>
      <h1 className="pb-4 font-bold text-3xl flex justify-center">Menu</h1>
      <ul className="flex flex-wrap -mx-3">
        {data.map((product: any) => (
          <li key={product.id} className="w-full md:w-1/3 mb-8">
            <ItemCard item={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomeContainer;
