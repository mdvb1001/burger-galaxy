import Image from "next/image";
import { formatCentsToDollar } from "@/app/utils";
import { fetchProduct } from "@/app/requests";
import BackButton from "@/app/components/BackButton";
import AddToCartButton from "@/app/components/AddToCartButton";
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
  const prod = await fetchProduct(id);

  return (
    <div key={prod.id}>
      <BackButton />
      <h1>{prod.name}</h1>
      <Image src={prod.image} width="200" height="200" alt={prod.name} />
      <div>Price: ${formatCentsToDollar(prod.price)}</div>
      <div>Nutrition: {prod.calorie + ""} calories</div>
      <AddToCartButton id={prod.id} />
    </div>
  );
};

export default ProductDetail;
