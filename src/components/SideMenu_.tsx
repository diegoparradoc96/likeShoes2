import React from "react";

import { FaAngleRight } from "react-icons/fa";

const SideMenu_ = () => {
  return (
    <div>
      <ul>
        <li>Mujeres</li>
        <ul>
          <div className="flex row items-center">
            <FaAngleRight color="grey" />
            <li className="ml-2 text-gray-500">Tacones</li>
          </div>
          <div className="flex row items-center">
            <FaAngleRight color="grey" />
            <li className="ml-2 text-gray-500">Tenis</li>
          </div>
          <div className="flex row items-center">
            <FaAngleRight color="grey" />
            <li className="ml-2 text-gray-500">Zapatos</li>
          </div>
        </ul>
      </ul>
    </div>
  );
};

export { SideMenu_ };
