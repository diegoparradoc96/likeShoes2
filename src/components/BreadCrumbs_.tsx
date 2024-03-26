"use client";

import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
/* redux hooks */
import { useAppDispatch, useAppSelector } from "../redux/hooks";
/* redux slices */
import { setArrCurrentSection, setArrShoeSections } from "../redux/slices";
/* types */
import { IShoeType } from "../common/types";

const BreadCrumbs_ = () => {
  const dispatch = useAppDispatch();

  const arrCurrentSection = useAppSelector(
    (store) => store.currentSection.arrCurrentSection
  );

  const toggleShoeType = (sectionName: string) => {
    console.log(arrCurrentSection.length);
    if (arrCurrentSection.length == 1) {
      dispatch(setArrCurrentSection([sectionName]));
    } else {
      const arrayModificado = arrCurrentSection;
      arrayModificado[1] = sectionName;
      console.log(arrayModificado);
      dispatch(setArrCurrentSection(arrayModificado));
    }
  };

  return (
    <Breadcrumbs size="lg">
      {arrCurrentSection.map((currentSection, index) => (
        <BreadcrumbItem
          onClick={() => toggleShoeType(currentSection)}
          className=""
          key={index}
        >
          {currentSection}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};

export { BreadCrumbs_ };
