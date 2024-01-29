'use client'

import React, { createContext, useState, useContext } from 'react';

interface Product {
  id: string,
  name: string,
  price: number,
  image: string,
  description: string,
  calorie: number
}

interface ProductsContextProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
      <ProductsContext.Provider value={{ products, setProducts }}>
          {children}
      </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
      throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};