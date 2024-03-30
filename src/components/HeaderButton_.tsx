"use client";

import React from "react";

/* next ui */
import { Button } from "@nextui-org/react";
/* react icons */
import { IoMailOutline } from "react-icons/io5";

interface HeaderButtonProps_ {
  text: string;
  icon: React.ReactElement;
}

const HeaderButton_: React.FC<HeaderButtonProps_> = ({ text, icon }) => {
  return (
    <Button variant="outlined" startContent={icon}>
      {text}
    </Button>
  );
};

export { HeaderButton_ };
