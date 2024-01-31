import { Product } from './types'

const fetchAllProducts = async () => {
  let productsArr = []
  try {
    const res = await fetch('https://burgerhub00.github.io/data/products.json')
    const data = await res.json()
    const { products } = data
    productsArr = products
  } catch (error) {
    console.log(error)
  }
  return productsArr
}

const fetchProduct = async (id: string) => {
  let productsArr = []
  try {
    const res = await fetch('https://burgerhub00.github.io/data/products.json')
    const data = await res.json()
    const { products } = data
    productsArr = products
  } catch (error) {
    console.log(error)
  }
  return productsArr.find((product: Product)  => product.id === id)
}

export { fetchAllProducts, fetchProduct }