import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ProductsProvider } from '@/app/Contexts/ProductsContext'
import { CartProvider } from '@/app/Contexts/CartContext'
import Cart from '@/app/components/Cart'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <ProductsProvider>
            <nav>
              <Link href="/">Burger Cove</Link>
              <Link className="pl-1" href="/cart">Cart</Link>
              <Cart />
            </nav>
            {children}
          </ProductsProvider>
        </CartProvider>
      </body>
    </html>
  );
}
