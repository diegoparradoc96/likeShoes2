import React from "react";

/* next */
import Link from "next/link";
/* nextui */
import { Button } from "@nextui-org/react";
/* components */
import { Header_ } from "../components/Header_";

const Home: React.FC = () => {
  return (
    <div className="grid h-screen">
      <Header_ />
    </div>
  );
};

export default Home;
