'use client'

import ItemCard from './ItemCard'
import { Product } from '@/app/types'

interface HomeContainerProps {
  data: [Product]
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
