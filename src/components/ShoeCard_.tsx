import React from "react";

import { Image } from "@nextui-org/react";

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

      <div className="grid grid-cols-2 auto-cols-max">
        <p className="text-center text-xs">talla</p>
        <p className="text-center text-xs">Agregar al carrito</p>
      </div>
    </div>
  );
};

export { ShoeCard_ };
