"use client";

import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
/* redux hooks */
import { useAppDispatch, useAppSelector } from "../redux/hooks";
/* redux slices */
import { setObjCurrentSection, setArrShoeSections } from "../redux/slices";
/* types */
import { IShoeType } from "../common/types";

const BreadCrumbs_ = () => {
  const dispatch = useAppDispatch();

  const objCurrentSection = useAppSelector(
    (store) => store.currentSection.objCurrentSection
  );

  const toggleShoeType = (sectionName: string, index: number) => {
    console.log("sectionName", sectionName);
    console.log(objCurrentSection.currentSection.length);
    if (index == 0) {
      dispatch(
        setObjCurrentSection({
          shoeSectionId: objCurrentSection.shoeSectionId,
          shoeTypeId: 0,
          currentSection: [sectionName],
        })
      );
    } else {
      const arrayModificado = objCurrentSection.currentSection.slice();
      arrayModificado[1] = sectionName;

      dispatch(
        setObjCurrentSection({
          shoeSectionId: objCurrentSection.shoeSectionId,
          shoeTypeId: objCurrentSection.shoeTypeId,
          currentSection: arrayModificado,
        })
      );
    }
  };

  return (
    <Breadcrumbs size="lg">
      {objCurrentSection.currentSection.map((currentSection, index) => (
        <BreadcrumbItem
          onClick={() => toggleShoeType(currentSection, index)}
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
