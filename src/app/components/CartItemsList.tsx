"use client";

import { useCartContext } from "@/app/Contexts/CartContext";
import { formatCentsToDollar } from "@/app/utils";
import DeleteButton from "./DeleteButton";

interface CartItemsListProps {
  data: Product[];
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  calorie: number;
}

interface Item {
  id: string;
  quantity: number;
}

const CartItemsList = ({ data }: CartItemsListProps) => {
  const { cartItems } = useCartContext();

  // Combine product data with quantities from cartItems
  const itemsToRender = data.reduce((acc: (Product & { quantity: number, itemCost: number })[], product: Product) => {
    // Find the matching cart item
    const cartItem = cartItems.find((item: Item) => item.id === product.id);
    // Calculate the cost of the item
    const cost = (price: number, quantity:number) => {
      return price * quantity;
    }
    // If the item is in the cart, add it to the array with its quantity
    if (cartItem) {
      acc.push({ ...product, quantity: cartItem.quantity, itemCost: cost(product.price, cartItem.quantity) });
    }

    return acc;
  }, []);

  return (
    <ul>
      {itemsToRender.map((product) => (
        <li key={product.id}>
          <h2>{product.name} (Quantity: {product.quantity})</h2>
          <p>Price: ${formatCentsToDollar(product.itemCost)}</p>
          <p>{product.description}</p>
          <DeleteButton id={product.id} />
        </li>
      ))}
    </ul>
  );
};

export default CartItemsList;