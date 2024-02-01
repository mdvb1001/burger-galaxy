import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import CartLink from "@/app/components/CartLink";
import HomeIcon from "@/app/components/HomeIcon";

const NavigationBar: React.FC = () => {
  return (
    <Navbar className="bg-gray-800 text-white p-1" position="static">
      <NavbarContent justify="center">
        <NavbarBrand>
          <HomeIcon />
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
