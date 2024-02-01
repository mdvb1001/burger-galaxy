import Image from "next/image";
import { formatCentsToDollar } from "@/app/utils";
import { useRouter } from "next/navigation";
import { Product } from "@/app/types";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

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
      <Card className="px-2 pt-2 m-2 h-full">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start relative h-60 sm:h-80 md:h-40">
          <Image
            alt={`Image of ${item.name}`}
            className="object-cover rounded-xl"
            src={item.image}
            fill={true}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <h2 className="font-bold text-large">{item.name}</h2>
          <p className="text-tiny uppercase font-bold">
            ${formatCentsToDollar(item.price)}
          </p>
          <small className="text-default-500">{item.description}</small>
        </CardBody>
      </Card>
    </a>
  );
};

export default ItemCard;
