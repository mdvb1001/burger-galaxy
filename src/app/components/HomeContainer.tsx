'use client'

import Link from 'next/link'
import Image from 'next/image'
import { formatCentsToDollar } from "@/app/utils";

interface HomeContainerProps {
  data: [Product]
}

interface Product {
    id: string,
    name: string,
    price: number,
    image: string,
    description: string,
    calorie: number
}

const HomeContainer = ({ data }: HomeContainerProps) => {
  return (
    <ul>
      {data.map((product: any) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>
            <Image
              src={product.image}
              width='200'
              height='200'
              alt={product.name}
            />
            <h2>{product.name}</h2>
            <p>${formatCentsToDollar(product.price)}</p>
            <p>{product.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default HomeContainer
