import React from "react";

/* nextui components*/
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

/* prop types */
interface NormalHeaderProps {
  shouldHideOnScroll?: boolean;
}

const NormalHeader: React.FC<NormalHeaderProps> = ({}) => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">LikeShoes</p>
      </NavbarBrand>
    </Navbar>
  );
};

export { NormalHeader };
