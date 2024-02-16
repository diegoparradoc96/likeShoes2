"use client"

import React from "react";

/* material ui */
import { Input } from "@nextui-org/react";
/* icons */
import { CiSearch } from "react-icons/ci";

const Searcher_ = () => {
  return (
    <Input
      label="Buscar"
      isClearable
      radius="lg"
      classNames={{
        label: "text-black/50 dark:text-white/90",
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [],
      }}
      placeholder="Type to search..."
      startContent={
        <CiSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
      }
    />
  );
};

export { Searcher_ };
