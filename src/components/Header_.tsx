"use client";

import React from "react";

/* nextui components*/
import { Navbar, NavbarBrand } from "@nextui-org/react";
/* components */
import { Searcher_, HeaderButton_ } from ".";
/* react icons */
import { IoMailOutline } from "react-icons/io5";

/* prop types */
interface NormalHeaderProps {
  shouldHideOnScroll?: boolean;
}

const Header_: React.FC<NormalHeaderProps> = ({}) => {
  return (
    <Navbar className="absolute" maxWidth="xl">
      <NavbarBrand className="space-x-20">
        {/* company name */}
        <p className="font-bold text-inherit text-4xl">LikeShoes</p>
        {/* searcher */}
        <Searcher_ />
        {/* buttons */}
        <HeaderButton_ text="Contáctanos" icon={<IoMailOutline size={28} />} />
      </NavbarBrand>
    </Navbar>
  );
};

export { Header_ };
