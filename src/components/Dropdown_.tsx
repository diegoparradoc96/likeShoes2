"use client";

import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IShoeSection } from "../common/types";
/* redux hooks */
import { useAppDispatch } from "../redux/hooks";
/* redux slices */
import { setArrCurrentSection } from "../redux/slices";

const Dropdown_: React.FC<IShoeSection> = ({ sectionName, shoeTypes }) => {
  const dispatch = useAppDispatch();

  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="col">
      <div
        onClick={() => dispatch(setArrCurrentSection([sectionName]))}
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        className="flex row p-2 text-white cursor-pointer items-center"
      >
        <p>{sectionName}</p>
        <FaCaretDown size={13} className="ml-1"></FaCaretDown>
      </div>

      {showMenu && (
        <div
          className="bg-[#fff] p-5 absolute shadow-md"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <ul>
            {shoeTypes.map((shoeType) => {
              return (
                <div key={shoeType.id}>
                  <p
                    onClick={() =>
                      dispatch(
                        setArrCurrentSection([sectionName, shoeType.typeName])
                      )
                    }
                    className="hover:underline decoration-3 cursor-pointer"
                  >
                    {shoeType.typeName}
                  </p>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export { Dropdown_ };
