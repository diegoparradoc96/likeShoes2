"use client";

import React from "react";

/* components */
import { Dropdown_ } from "../components";

const SelectionBar_ = () => {
  return (
    <div className="flex justify-center bgPrimary">
      <Dropdown_ />
      <Dropdown_ />
      <Dropdown_ />
    </div>
  );
};

export { SelectionBar_ };
