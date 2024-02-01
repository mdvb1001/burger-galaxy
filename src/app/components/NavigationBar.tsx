import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import CartLink from "./CartLink";
import HomeLink from "./HomeLink";
import { ThemeSwitcher } from "./ThemeSwitcher";

const NavigationBar: React.FC = () => {
  return (
    <Navbar className="py-4" position="static">
      <NavbarContent justify="center">
        <NavbarBrand>
          <HomeLink />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitcher />
        <NavbarItem>
          <CartLink />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavigationBar;
