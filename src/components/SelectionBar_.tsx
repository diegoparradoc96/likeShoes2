"use client";

import React from "react";

import { ISelectionBarElements } from "../common/types";

/* components */
import { Dropdown_ } from "../components";

const SelectionBar_ = () => {
  const selectionBarElements: ISelectionBarElements[] = [
    {
      nameButton: "Mujeres",
      sections: [
        {
          nameSection: "Tenis",
          sectionElements: ["Cerrados", "Sin cordon"],
        },
        {
          nameSection: "Botas",
          sectionElements: [],
        },
      ],
    },
    {
      nameButton: "Hombres",
      sections: [
        {
          nameSection: "Tenis",
          sectionElements: ["Cerrados", "Sin cordon"],
        },
      ],
    },
  ];

  return (
    <div className="flex justify-center bgPrimary">
      {selectionBarElements.map((selectionBarElement, index) => {
        return (
          <Dropdown_ selectionBarElement={selectionBarElement} key={index} />
        );
      })}
    </div>
  );
};

export { SelectionBar_ };
