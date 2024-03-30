"use client";

import React from "react";

/* nextui components*/
import { Navbar, NavbarBrand } from "@nextui-org/react";
/* components */
import { Searcher_, HeaderButton_ } from ".";
/* react icons */
import { IoMailOutline } from "react-icons/io5";
import { FaTruckMoving } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";

/* prop types */
interface NormalHeaderProps {
  shouldHideOnScroll?: boolean;
}

const Header_: React.FC<NormalHeaderProps> = ({}) => {
  return (
    <Navbar maxWidth="xl" position="sticky" className="bg-[#fff]">
      <NavbarBrand className="grid grid-cols-6 space-x-20">
        {/* company name */}
        <div className="col-span-1">
          <p className="font-bold text-inherit text-4xl">LikeShoes</p>
        </div>

        {/* searcher */}
        <div className="col-span-4">
          <Searcher_ />
        </div>
        {/* buttons */}
        <div className="">
          <HeaderButton_
            text="Contáctanos"
            icon={<IoMailOutline size={26} color="black" />}
          />

          <HeaderButton_
            text="Mi pedido"
            icon={<FaTruckMoving size={26} color="black" />}
          />

          <HeaderButton_
            text="Carrito"
            icon={<IoIosCart size={26} color="black" />}
          />
        </div>
      </NavbarBrand>
    </Navbar>
  );
};

export { Header_ };
