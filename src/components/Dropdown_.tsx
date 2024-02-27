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
    // <Dropdown
    //   type="listbox"
    //   classNames={{ trigger: "border-0" }}
    //   disableAnimation={true}
    // >
    //   <DropdownTrigger>
    //     <Button variant="bordered">{nameButton}</Button>
    //   </DropdownTrigger>
    //   <DropdownMenu aria-label="Static Actions">
    //     {selectionBarElement.sections.map((section, index) => {
    //       return (
    //         <DropdownSection title={section.nameSection}>
    //           {section.sectionElements.map((sectionElement, index) => {
    //             return <DropdownItem>{sectionElement}</DropdownItem>;
    //           })}
    //         </DropdownSection>
    //       );
    //     })}
    //   </DropdownMenu>
    // </Dropdown>
    <div className="col">
      <div
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        className="flex row p-2 text-white cursor-pointer items-center"
      >
        <p>hola</p>
        <FaCaretDown size={13} className="ml-1"></FaCaretDown>
      </div>

      {showMenu && (
        <div
          className="bg-[#3e3] p-10 absolute"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <ul>
            <li className="hover:text-[#fff] hover:underline decoration-3 cursor-pointer">
              hola gente
            </li>
            <li>hola gente</li>
            <li>hola gente</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export { Dropdown_ };
