'use client'

import Link from 'next/link'
import Image from 'next/image'

interface HomeContainerProps {
  products: [Product]
}

interface Product {
    id: string,
    name: string,
    price: number,
    image: string,
    description: string,
    calorie: number
}

const HomeContainer = ({ products }: HomeContainerProps) => {
  return (
    <ul>
      {products.map((product: any) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>
            <Image
              src={product.image}
              width='200'
              height='200'
              alt={product.name}
            />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default HomeContainer
