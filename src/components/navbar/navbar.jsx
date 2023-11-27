import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Items from "../shop/Items";
import {
  Navbar as CNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { navLinks } from "./../../helpers/navbar.helpers";
import "./navbar.css";
import mail from "./../../assets/landing/mail.svg";
import call from "./../../assets/landing/call.svg";
import locate from "./../../assets/landing/locate.svg";
import clock from "./../../assets/landing/clock.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Home", "About Us", "Contact Us", "Products"];
  return (
    <div className="flex flex-col fixed bg-[white] text-[black] w-[100vw] pb-[2em]">
      <div className="top-wrapper">
        <div>
          <div>
            <img src={locate} alt={locate} />
            <span>
              {" "}
              <strong> Nairobi, Kenya</strong>
            </span>
          </div>

          <div>
            <img src={clock} alt={clock} />
            <span>
              {" "}
              <strong> Open 24/7</strong>
            </span>
          </div>
        </div>

        <div>
          <div>
            <img src={call} alt={call} />
            <span>
              {" "}
              <strong> +254 793 020496</strong>
            </span>
          </div>

          <div>
            <img src={mail} alt={mail} />
            <span>
              <strong>icikakennedy@gmail.com</strong>{" "}
            </span>
          </div>
        </div>
      </div>
      <CNavbar
        onMenuOpenChange={setIsMenuOpen}
        className="flex flex-col mt-[6em] bg-white text-black"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">Cogra Entreprise</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navLinks &&
            navLinks.map((link, index) => {
              return (
                <NavbarItem isActive key={index}>
                  <Link href={link.href} aria-current={link.tag}>
                    {link.tag}
                  </Link>
                </NavbarItem>
              );
            })}
        </NavbarContent>
        <NavbarMenu className="flex flex-col mt-[5em] bg-[white] text-[black]">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </CNavbar>
    </div>
  );
}
