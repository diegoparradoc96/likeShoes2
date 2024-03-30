"use client";

import React from "react";

import { FaAngleRight } from "react-icons/fa";
/* redux hooks */
import { useAppDispatch, useAppSelector } from "../redux/hooks";
/* redux slices */
import { setObjCurrentSection } from "../redux/slices";

const SideMenu_ = () => {
  const dispatch = useAppDispatch();

  const arrShoeSections = useAppSelector(
    (store) => store.shoeSections.arrShoeSections
  );
  const objCurrentSection = useAppSelector(
    (store) => store.currentSection.objCurrentSection
  );

  return (
    <div>
      {arrShoeSections.map(
        (shoeSection) =>
          shoeSection.id == objCurrentSection.shoeSectionId && (
            <ul key={shoeSection.id}>
              <li
                className="cursor-pointer text-lg"
                onClick={() =>
                  dispatch(
                    setObjCurrentSection({
                      shoeSectionId: shoeSection.id,
                      shoeTypeId: 0,
                      currentSection: [shoeSection.sectionName],
                    })
                  )
                }
              >
                {shoeSection.sectionName}
              </li>
              {shoeSection.shoeTypes.map((shoeType) => (
                <ul key={shoeType.id}>
                  <div
                    className="flex row items-center cursor-pointer hover:underline"
                    onClick={() =>
                      dispatch(
                        setObjCurrentSection({
                          shoeSectionId: objCurrentSection.shoeSectionId,
                          shoeTypeId: shoeType.id,
                          currentSection: [
                            shoeSection.sectionName,
                            shoeType.typeName,
                          ],
                        })
                      )
                    }
                  >
                    <FaAngleRight color="grey" />
                    <li className="ml-2 text-gray-500">{shoeType.typeName}</li>
                  </div>
                </ul>
              ))}
            </ul>
          )
      )}
    </div>
  );
};

export { SideMenu_ };
