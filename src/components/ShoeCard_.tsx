"use client";

import React from "react";

import {
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const SizeButton: React.FC = () => {
  // w-[80px]
  return (
    <Dropdown className="min-w-[80px] p-1" placement="top">
      <DropdownTrigger className="w-full">
        <Button variant="bordered">Talla</Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Action event example"
        onAction={(key) => alert(key)}
        className="text-center"
        classNames={{ base: "", list: "" }}
        itemClasses={{ base: "", wrapper: "" }}
      >
        <DropdownItem key="new">36</DropdownItem>
        <DropdownItem key="copy">37</DropdownItem>
        <DropdownItem key="edit">38</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const ShoeCard_ = () => {
  return (
    <div
      className="
      grid grid-rows-4 w-full p-2
      border hover:shadow-lg hover:cursor-pointer
    "
    >
      <div className="grid row-span-4 justify-items-center">
        <Image
          src="https://calzatodocol.vteximg.com.br/arquivos/ids/216552-292-292/712100069_blanco-verde_02.jpg?v=638376158510500000.jpeg"
          className="z-0"
        />
      </div>

      <div className="h-5">
        <p className="font-bold">Fratini</p>
      </div>
      <div className="h-10">
        <p className="text-gray-400 text-[14px]">
          Mocasin de Mujer marca Frattini
        </p>
      </div>
      <div className="h-3 mt-4">
        <p className="font-bold text-[10px] text-gray-400">Ahora</p>
      </div>

      <div className="h-5">
        <p className="font-bold">$300.000</p>
      </div>

      <div className="mt-2">
        <p className=" text-[10px] text-gray-400">Color</p>
        <p className="-mt-1">colores (desarrollo)</p>
      </div>

      <div className="grid grid-cols-5 gap-2 auto-cols-max mt-5">
        <div className="col-span-2">
          <SizeButton />
        </div>
        <Button className="col-span-3 text-center text-xs bg-[#252525] text-white">
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export { ShoeCard_ };
