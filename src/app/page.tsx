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
      <section className="h-10">
        <Header_ />
      </section>

      <section className="mt-10">
        <SelectionBar_ />
      </section>

      <section className="px-16">
        <CurrentSection_ />
      </section>

      <section className="px-16 py-4">
        <BreadCrumbs_ />
      </section>

      <section className="flex row px-16">
        <div className="w-2/12 border-r-1">
          <SideMenu_ />
        </div>

        <div className="w-10/12">
          <FootwearCatalog_ />
        </div>
      </section>
    </div>
  );
};

export default Home;
