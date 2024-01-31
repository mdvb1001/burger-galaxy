import HomeContainer from "@/app/components/HomeContainer";
import { fetchAllProducts } from "@/app/requests";

export default async function Home() {
  const allProducts = await fetchAllProducts();

  return <HomeContainer data={allProducts} />;
}
