import React from "react";

import { Image } from "@nextui-org/react";

const ShoeCard_ = () => {
  return (
    <div
      className="
    w-64 min-h-[445px] max-h-[445px] p-2
    border hover:shadow-lg hover:cursor-pointer
    "
    >
      <div className="grid grid-cols-1 grid-rows-2">
        <div className="row-span-1">
          <Image
            src="https://calzatodocol.vteximg.com.br/arquivos/ids/216552-292-292/712100069_blanco-verde_02.jpg?v=638376158510500000.jpeg"
            //className="row-span-1"
          />
        </div>        
        <div className="col-span-2">
          <p className=" font-bold">Fratini</p>
        </div>
        {/* <div className="row-span-1">
          <p className=" text-gray-400 text-[14px]">
            Mocasin de Mujer marca Frattini
          </p>
        </div>
        <div className="row-span-1">
          <p className=" font-bold text-[10px] text-gray-400">Ahora</p>
        </div>
        <div className="row-span-1">
          <p className="">precio</p>
        </div>
        <div className="row-span-1">
          <p className="">color</p>
        </div>

        <div className="row-span-1">
          <p className="text-center">talla</p>
          <p className="text-center">Agregar al carrito</p>
        </div> */}
      </div>
    </div>
  );
};

export { ShoeCard_ };
