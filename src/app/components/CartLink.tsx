"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CartIcon } from "@/app/icons/CartIcon";
import { Button } from "@nextui-org/button";
import { Badge } from "@nextui-org/badge";
import { useCartContext } from "@/app/Contexts/CartContext";

const CartLink = () => {
  const { totalQuantityInCart, setExistingCart } = useCartContext();
  const router = useRouter();

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "{}");
    const cartIds = Object.keys(existingCart);
    if (cartIds.length === 0) {
      return;
    }
    const cart = cartIds
      .map((id) => {
        return {
          id,
          quantity: existingCart[id],
        };
      })
      .filter((item) => item.quantity > 0);

    setExistingCart(cart);
  }, []);

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/cart`);
  };

  const badgeVisibility = totalQuantityInCart > 0 ? false : true;

  return (
    <Badge
      color="danger"
      content={totalQuantityInCart}
      isInvisible={badgeVisibility}
      shape="circle"
    >
      <Button
        isIconOnly
        onClick={handleClick}
        role="link"
        tabIndex={0}
        aria-label="Go to home cart"
      >
        <CartIcon className="w-6 h-6" />
      </Button>
    </Badge>
  );
};

export default CartLink;
