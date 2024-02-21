"use client";

import React from "react";

import { ISelectionBarElements } from "../common/types";

/* components */
import { Dropdown_ } from "../components";

const SelectionBar_ = () => {
  const selectionBarElements: ISelectionBarElements[] = [
    {
      nameButton: "Femenino",
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
      nameButton: "Masculino",
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
      {selectionBarElements.map((selectionBarElement) => {
        return <Dropdown_ selectionBarElement={selectionBarElement} />;
      })}
    </div>
  );
};

export { SelectionBar_ };
