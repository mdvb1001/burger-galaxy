import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { formatCentsToDollar } from "@/app/utils";
import { Product } from "@/app/types";

const ItemCard = ({ item }: { item: Product }) => {
  const router = useRouter();
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/products/${item.id}`);
  };
  return (
    <a
      onClick={handleClick}
      className="block h-full cursor-pointer"
      role="link"
      tabIndex={0}
      aria-label={`Go to product detail page of ${item.name}`}
    >
      <Card className="px-2 p-2 mx-3 h-full bg-primary shadow-xl shadow-blue-500/50">
        <CardHeader className="mb-3 pb-0 pt-2 px-4 flex-col items-start relative h-60 sm:h-80 md:h-40 xl:h-80">
          <Image
            alt={`Image of ${item.name}`}
            className="object-cover rounded-xl"
            src={item.image}
            fill={true}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <h2 className="font-bold text-large">{item.name}</h2>
          <p className="text-tiny uppercase font-bold mb-2">
            ${formatCentsToDollar(item.price)}
          </p>
          <small>{item.description}</small>
        </CardBody>
      </Card>
    </a>
  );
};

export default ItemCard;
