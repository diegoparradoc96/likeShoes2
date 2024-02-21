import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { ISelectionBarElements } from "../common/types";

interface IDropdown_props {
  selectionBarElement: ISelectionBarElements;
}

const Dropdown_: React.FC<IDropdown_props> = ({ selectionBarElement }) => {
  const { nameButton, sections } = selectionBarElement;

  return (
    <Dropdown
      type="listbox"
      classNames={{ trigger: "border-0" }}
      disableAnimation={true}
    >
      <DropdownTrigger>
        <Button variant="bordered">{nameButton}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {selectionBarElement.sections.map((section, index) => {
          return (
            <DropdownSection title="Actions">
              {section.sectionElements.map((sectionElement, index) => {
                return <DropdownItem>{sectionElement}</DropdownItem>;
              })}
            </DropdownSection>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export { Dropdown_ };
