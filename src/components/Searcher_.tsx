"use client";

import React from "react";

/* material ui */
import { Input } from "@nextui-org/react";
/* icons */
import { CiSearch } from "react-icons/ci";

const Searcher_ = () => {
  return (
    <Input
      isClearable
      radius="none"
      size="sm"
      color="default"
      className="outline-none"
      classNames={{
        input: [
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "",
        inputWrapper: "border-1 border-grey",
      }}
      placeholder="Busca"
    />
  );
};

export { Searcher_ };
