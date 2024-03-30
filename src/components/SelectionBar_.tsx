"use client";
import React, { useEffect } from "react";

/* queries */
import { shoeQueries } from "../services/api_likeshoes";
/* components */
import { Dropdown_ } from "../components";
/* redux hooks */
import { useAppDispatch, useAppSelector } from "../redux/hooks";
/* redux slices */
import { setObjCurrentSection, setArrShoeSections } from "../redux/slices";

const SelectionBar_ = () => {
  const dispatch = useAppDispatch();

  const arrShoeSections = useAppSelector(
    (store) => store.shoeSections.arrShoeSections
  );

  useEffect(() => {
    loadSections();
  }, []);

  
  const loadSections = async () => {
    try {
      const sections = await shoeQueries.getShoeSections();
      dispatch(setArrShoeSections(sections));
      dispatch(setObjCurrentSection({
        shoeSectionId: sections[0].id || 1,
        shoeTypeId: 1,
        currentSection: [sections[0].sectionName]
      }));
    } catch (error) {
      alert("Error al cargar secciones");
    }
  };

  return (
    <div className="flex justify-center bgPrimary">
      {arrShoeSections.map((shoeSection, index) => {
        return (
          <Dropdown_
            id={shoeSection.id}
            sectionName={shoeSection.sectionName}
            shoeTypes={shoeSection.shoeTypes}
            key={index}
          />
        );
      })}
    </div>
  );
};

export { SelectionBar_ };
