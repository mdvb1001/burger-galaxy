'use client';

import { useRouter } from 'next/navigation';

const CartIcon = () => {
  const router = useRouter();
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/cart`);
  };
  return <a onClick={handleClick}>Cart</a>;
};

export default CartIcon;
