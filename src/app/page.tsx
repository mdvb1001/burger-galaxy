import HomeContainer from '@/app/components/HomeContainer'
import { fetchAllProducts } from '@/app/utils'

export default async function Home () {

  const allProducts = await fetchAllProducts()

  return (
      <div>
        <h1>Burger Order</h1>
        <HomeContainer data={allProducts} />
      </div>
  )
}
