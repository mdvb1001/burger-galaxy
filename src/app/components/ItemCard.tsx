import Image from "next/image";
import { formatCentsToDollar } from "@/app/utils";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  calorie: number;
}

const ItemCard = ({ item }: { item: Product }) => {
  const router = useRouter();
  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push(`/products/${item.id}`);
  };
  return (
    <a onClick={handleClick}>
      <Image src={item.image} width="200" height="200" alt={item.name} />
      <h2>{item.name}</h2>
      <p>${formatCentsToDollar(item.price)}</p>
      <p>{item.description}</p>
    </a>
  );
};

export default ItemCard;
