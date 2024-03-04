import React from "react";

import { ShoeCard_ } from "../components";

const FootwearCatalog_ = () => {
  const catalog = [0, 1, 2, 3, 4, 5];

  return (
    <div className="flex row flex-wrap gap-4">
      {catalog.map((shoe, index) => {
        return <ShoeCard_ key={index} />;
      })}
    </div>
  );
};

export { FootwearCatalog_ };
