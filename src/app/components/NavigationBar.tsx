import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Badges from "@/app/components/Badges";
import CartIcon from "@/app/components/CartIcon";
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
          <Badges />
        </NavbarItem>
        <NavbarItem>
          <CartIcon />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavigationBar;
