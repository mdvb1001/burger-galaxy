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
  const itemsToRender = data.reduce((acc: (Product & { quantity: number })[], product: Product) => {
    // Find the matching cart item
    const cartItem = cartItems.find((item: Item) => item.id === product.id);

    // If the item is in the cart, add it to the array with its quantity
    if (cartItem) {
      acc.push({ ...product, quantity: cartItem.quantity });
    }

    return acc;
  }, []);

  return (
    <ul>
      {itemsToRender.map((product) => (
        <li key={product.id}>
          <h2>{product.name} (Quantity: {product.quantity})</h2>
          <p>Price: ${formatCentsToDollar(product.price)}</p>
          <p>{product.description}</p>
          <DeleteButton id={product.id} />
        </li>
      ))}
    </ul>
  );
};

export default CartItemsList;