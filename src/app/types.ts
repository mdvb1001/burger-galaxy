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

interface IconProps {
  fill?: string;
  filled?: boolean;
  size?: number;
  height?: number;
  width?: number;
  label?: string;
  [key: string]: any; // for additional props that might be passed
}

export type { Product, Item, IconProps }
