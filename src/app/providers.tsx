"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { CartProvider } from '@/app/Contexts/CartContext'
interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <CartProvider>
          {children}
        </CartProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
