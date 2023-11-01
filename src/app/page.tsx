import React from "react";

import Link from "next/link";

/* nextui */
import { Button } from "@nextui-org/react";

const Home: React.FC = () => {
  return (
    <div className="grid h-screen place-content-center">
      <Button className="p-6">
        <Link href={"/login"} className="text-xl font-medium">
          Iniciar sesion
        </Link>
      </Button>
    </div>
  );
};

export default Home;
