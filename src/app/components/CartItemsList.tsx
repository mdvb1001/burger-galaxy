"use client";

import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { useCartContext } from "@/app/Contexts/CartContext";
import { formatCentsToDollar } from "@/app/utils";
import DeleteAllButton from "./DeleteAllButton";
import { Product, Item } from "@/app/types";
import AddOneButton from "./AddOneButton";
import RemoveOneButton from "./RemoveOneButton";

interface CartItemsListProps {
  data: Product[];
}

const CartItemsList = ({ data }: CartItemsListProps) => {
  const { cartItems } = useCartContext();

  // Combine product data with quantities from cartItems
  const itemsToRender = data.reduce(
    (
      acc: (Product & { quantity: number; itemCost: number })[],
      product: Product
    ) => {
      // Find the matching cart item
      const cartItem = cartItems.find((item: Item) => item.id === product.id);
      // Calculate the cost of the item
      const cost = (price: number, quantity: number) => {
        return price * quantity;
      };
      // If the item is in the cart, add it to the array with its quantity
      if (cartItem) {
        acc.push({
          ...product,
          quantity: cartItem.quantity,
          itemCost: cost(product.price, cartItem.quantity),
        });
      }
      return acc;
    },
    []
  );

  if (itemsToRender.length === 0) {
    return (
      <p className="flex justify-center italic my-8">Your cart is empty</p>
    );
  }

  // Add subtotal
  // // Add function to add all of the costs of each item
  // Add tax (takes subtotal and applies 8.5% tax)
  // Add total (subtotal + tax)
  const subTotal = itemsToRender
    .map((product) => product.itemCost)
    .reduce((acc, cost) => acc + cost, 0);
  const tax = subTotal * 0.085;
  const total = subTotal + tax;

  return (
    <>
      <ul>
        {itemsToRender.map((product) => (
          <li
            className="flex flex-col sm:flex-row justify-between my-8"
            key={product.id}
          >
            <div className="flex items-center">
              <div className="relative overflow-hidden h-10 w-10 mr-2">
                <Image
                  className="rounded-full object-cover"
                  src={product.image}
                  fill={true}
                  alt={product.name}
                  sizes="10vw" // Optimize image loading
                />
              </div>
              <h2 className="mr-2">{product.name}</h2>
              <p>({product.quantity})</p>
            </div>
            <div className="flex items-center">
              <p className="font-medium mr-4">
                ${formatCentsToDollar(product.itemCost)}
              </p>
              <Divider orientation="vertical" className="mr-4" />
              <div className="mr-2">
                <RemoveOneButton id={product.id} />
              </div>
              <div className="mr-4">
                <AddOneButton id={product.id} />
              </div>
              <DeleteAllButton id={product.id} />
            </div>
          </li>
        ))}
      </ul>
      <p>Subtotal: ${formatCentsToDollar(subTotal)}</p>
      <p>Tax: ${formatCentsToDollar(tax)} (8.5%)</p>
      <p>Total: ${formatCentsToDollar(total)}</p>
    </>
  );
};

export default CartItemsList;
