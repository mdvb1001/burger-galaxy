interface Product {
  id: string,
  name: string,
  price: number,
  image: string,
  description: string,
  calorie: number
}

interface Item {
  id: string;
  quantity: number;
}

export type { Product, Item }
