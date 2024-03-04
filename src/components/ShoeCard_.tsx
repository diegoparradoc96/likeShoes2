import React from "react";

const ShoeCard_ = () => {
  return (
    <div className="flex flex-col w-56 min-h-80 max-h-80 p-2 border hover:shadow-lg hover:cursor-pointer">
      <p>Imagen del zapato</p>
      <p>nombre</p>
      <p>descripcion</p>
      <p>precio</p>
      <p>color</p>
      <p>talla</p>
      <p>Agregar al carrito</p>
    </div>
  );
};

export { ShoeCard_ };
