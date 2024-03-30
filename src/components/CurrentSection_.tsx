"use client";

import React from "react";
/* redux hooks */
import { useAppSelector } from "../redux/hooks";

export const CurrentSection_ = () => {
  const objCurrentSection = useAppSelector(
    (store) => store.currentSection.objCurrentSection
  );

  return (
    <section className="flex h-40 bg-[#C20E2D] justify-center items-center">
      <h1 className="-mt-5 text-white text-center underline text-7xl font-bold font-sans">
        {objCurrentSection.currentSection[0]}
      </h1>
    </section>
  );
};
