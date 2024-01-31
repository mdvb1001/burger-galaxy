'use client'

import ItemCard from './ItemCard'

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
          <ItemCard item={product} />
        </li>
      ))}
    </ul>
  )
}

export default HomeContainer
