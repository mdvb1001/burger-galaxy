import Image from 'next/image'

export default async function Home () {
  let renderProducts = <li>no products</li>
  try {
    const res = await fetch('https://burgerhub00.github.io/data/products.json')
    const data = await res.json()
    const { products } = data
    renderProducts = products.map((product: any) => (
      <li key={product.id}>
        <Image
          src={product.image}
          width='200'
          height='200'
          alt={product.name}
        />
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </li>
    ))
  } catch (error) {
    console.log(error)
  }

  return (
    <div>
      <h1>Burger Order</h1>
      <ul>{renderProducts}</ul>
    </div>
  )
}
