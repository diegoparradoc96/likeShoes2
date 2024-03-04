"use client";

import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FaCaretDown } from "react-icons/fa";

import { ISelectionBarElements } from "../common/types";

interface IDropdown_props {
  selectionBarElement: ISelectionBarElements;
}

const Dropdown_: React.FC<IDropdown_props> = ({ selectionBarElement }) => {
  const { nameButton, sections } = selectionBarElement;
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="col">
      <div
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        className="flex row p-2 text-white cursor-pointer items-center"
      >
        <p>{selectionBarElement.nameButton}</p>
        <FaCaretDown size={13} className="ml-1"></FaCaretDown>
      </div>

      {showMenu && (
        <div
          className="bg-[#fff] p-5 absolute shadow-md"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <ul>
            {selectionBarElement.sections.map((section, index) => {
              return (
                <>
                  <p
                    className="hover:underline decoration-3 cursor-pointer"
                    key={index}
                  >
                    {section.nameSection}
                  </p>

                  <ul className="ml-5">
                    {section.sectionElements.map((element, index) => {
                      return (
                        <li
                          className="hover:underline hover:text-black decoration-3 cursor-pointer text-gray-500 text-sm"
                          key={index}
                        >
                          {element}
                        </li>
                      );
                    })}
                  </ul>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export { Dropdown_ };
