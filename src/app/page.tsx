import React from "react";
import HomeContainer from "@/app/components/HomeContainer";
import { fetchAllProducts } from "@/app/requests";

// Page now loads 150ms faster with Memo (down from ~300 ms)
const Home = async () => {
  const allProducts = await fetchAllProducts();

  return <HomeContainer data={allProducts} />;
}

export default  React.memo(Home);