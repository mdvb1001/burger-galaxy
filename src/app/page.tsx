import HomeContainer from '@/app/components/HomeContainer'

export default async function Home () {
  let productsArr = []
  try {
    const res = await fetch('https://burgerhub00.github.io/data/products.json')
    const data = await res.json()
    const { products } = data
    productsArr = products
  } catch (error) {
    console.log(error)
  }

  return (
      <div>
        <h1>Burger Order</h1>
        <HomeContainer data={productsArr} />
      </div>
  )
}
