"use client";

import React, { useState, useEffect } from "react";

import { ShoeCard_ } from "../components";
import { ObjCurrentSection, Shoe } from "@/common/types";

/* redux hooks */
import { useAppDispatch, useAppSelector } from "../redux/hooks";
/* redux slices */
import { setObjCurrentSection, setArrShoeSections } from "../redux/slices";
/* queries */
import { shoeQueries } from "../services/api_likeshoes";

const FootwearCatalog_ = () => {  
  const [catalog, setCatalog] = useState([]);

  const objCurrentSection = useAppSelector(
    (store) => store.currentSection.objCurrentSection
  );

  useEffect(() => {
    getCatalog(objCurrentSection);
  }, [objCurrentSection]);

  const getCatalog = async (objCurrentSection: ObjCurrentSection) => {
    try {
      const shoeCatalog = await shoeQueries.getShoeCatalog(
        objCurrentSection.shoeSectionId,
        objCurrentSection.shoeTypeId
      );
      console.log("🐊 ~ shoeCatalog:", shoeCatalog)

      setCatalog(shoeCatalog);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ml-2">
      {catalog.map((shoe, index) => {
        return (
          <div className="col-span-1" key={index}>
            <ShoeCard_ shoe={shoe} />
          </div>
        );
      })}
    </div>
  );
};

export { FootwearCatalog_ };
