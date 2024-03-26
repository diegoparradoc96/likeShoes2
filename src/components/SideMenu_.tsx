"use client";

import React from "react";

import { FaAngleRight } from "react-icons/fa";
/* redux hooks */
import { useAppDispatch, useAppSelector } from "../redux/hooks";
/* redux slices */
import { setArrCurrentSection, setArrShoeSections } from "../redux/slices";

const SideMenu_ = () => {
  const dispatch = useAppDispatch();

  const arrShoeSections = useAppSelector(
    (store) => store.shoeSections.arrShoeSections
  );
  return (
    <div>
      {arrShoeSections.map((shoeSection) => (
        <ul key={shoeSection.id}>
          <li>{shoeSection.sectionName}</li>
          {shoeSection.shoeTypes.map((shoeType) => (
            <ul key={shoeType.id}>
              <div className="flex row items-center">
                <FaAngleRight color="grey" />
                <li className="ml-2 text-gray-500">{shoeType.typeName}</li>
              </div>
            </ul>
          ))}
        </ul>
      ))}
    </div>
  );
};

export { SideMenu_ };
