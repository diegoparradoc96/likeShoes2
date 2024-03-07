import React from "react";

import { ShoeCard_ } from "../components";

const FootwearCatalog_ = () => {
  const catalog = [0, 1, 2, 3, 4, 5];

  return (
    <div className="grid grid-cols-4 gap-2 ml-2">
      {catalog.map((shoe, index) => {
        return (
          <div className="col-span-1">
            <ShoeCard_ key={index} />
          </div>
        );
      })}
    </div>
  );
};

export { FootwearCatalog_ };
