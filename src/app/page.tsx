import React from "react";

/* next */
import Link from "next/link";
/* nextui */
import { Button } from "@nextui-org/react";
/* components */
import {
  Header_,
  SelectionBar_,
  CurrentSection_,
  BreadCrumbs_,
  SideMenu_,
  FootwearCatalog_,
} from "../components";

const Home: React.FC = () => {
  return (
    <div className="mb-5">
      <section className="h-10 w-full fixed z-10">
        <Header_ />
      </section>

      <section className="mt-16 mb-56 w-full fixed z-10">
        <SelectionBar_ />
      </section>

      <div className="pt-24 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-52">
        <section className="">
          <CurrentSection_ />
        </section>

        <section className=" py-4">
          <BreadCrumbs_ />
        </section>

        <section className="flex row">
          <div className="w-2/12 border-r-1">
            <SideMenu_ />
          </div>

          <div className="w-10/12">
            <FootwearCatalog_ />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
