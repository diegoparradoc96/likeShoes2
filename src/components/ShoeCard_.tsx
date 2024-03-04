import React from "react";

const ShoeCard_ = () => {
  return (
    <div
      className="
    grid w-64 min-h-[445px] max-h-[445px] p-2
    border hover:shadow-lg hover:cursor-pointer
    content-between"
    >
      <p className="row-span-12">Imagen del zapato</p>
      <p>nombre</p>
      <p>descripcion</p>
      <p>precio</p>
      <p>color</p>
      <div className="grid grid-cols-2">
        <p className="text-center">talla</p>
        <p className="text-center">Agregar al carrito</p>
      </div>
    </div>
  );
};

export { ShoeCard_ };
