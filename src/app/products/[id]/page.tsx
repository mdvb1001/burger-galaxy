import Image from "next/image";
import { formatCentsToDollar } from "@/app/utils";
interface ProductDetailsPageProps {
  params: { id: string };
}
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  calorie: number;
}

const ProductDetail = async (props: ProductDetailsPageProps) => {
  const {
    params: { id },
  } = props;
  let prod: Product = {} as Product;
  try {
    const res = await fetch("https://burgerhub00.github.io/data/products.json");
    const data = await res.json();
    const { products } = data;
    prod = products.filter((product: Product) => product.id === id)[0];
  } catch (error) {
    console.log(error);
  }

  return (
    <div key={prod.id}>
      <h1>{prod.name}</h1>
      <Image src={prod.image} width="200" height="200" alt={prod.name} />
      <div>Price: ${formatCentsToDollar(prod.price)}</div>
      <div>Nutrition: {prod.calorie + ""} calories</div>
    </div>
  );
};

export default ProductDetail;
