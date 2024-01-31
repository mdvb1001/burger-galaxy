import React from "react";
import NavigationBar from "./NavigationBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

      <main className="flex-grow container mx-auto px-16 sm:px-20 md:px-14 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <p>© 2024 Burger Island</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
