import React from "react";
import NavigationBar from "./NavigationBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

      <main className="flex-grow container mx-auto px-16 sm:px-20 md:px-14 lg:px-48 py-8">
        {children}
      </main>

      <footer className="p-4">
        <div className="container mx-auto">
          <small>© 2024 Burger Galaxy. All Rights Reserved</small>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
