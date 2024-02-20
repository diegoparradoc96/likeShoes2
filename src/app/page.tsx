import React from "react";

/* next */
import Link from "next/link";
/* nextui */
import { Button } from "@nextui-org/react";
/* components */
import { Header_, SelectionBar_ } from "../components";

const Home: React.FC = () => {
  return (
    <div className="">
      <section className="h-10">
        <Header_ />
      </section>

      <section className="mt-10">
        <SelectionBar_ />
      </section>
    </div>
  );
};

export default Home;
