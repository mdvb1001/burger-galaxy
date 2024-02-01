import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import CartLink from "@/app/components/CartLink";
import HomeLink from "@/app/components/HomeLink";

const NavigationBar: React.FC = () => {
  return (
    <Navbar className="bg-gray-800 text-white py-4" position="static">
      <NavbarContent justify="center">
        <NavbarBrand>
          <HomeLink />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <CartLink />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavigationBar;
