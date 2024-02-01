import React from "react";
import { NextPage } from "next";
import { fetchAllProducts } from "@/app/requests";
import CartDetail from "../components/CartDetail";

const CartPage: NextPage = async () => {
  const products = await fetchAllProducts();

  return <CartDetail products={products} />;
};

export default CartPage;
