"use client";

import React, { useState } from "react";

/* next */
import Link from "next/link";

/* components */
import { NormalInput, NormalButton, NormalHeader } from "../../components";

const Login: React.FC = () => {
  const [inputs, setInputs] = useState({
    user: "",
    password: "",
  });

  const handleInputChanges = (input: string, value: string) => {
    setInputs((prevState) => ({ ...prevState, [input]: value }));
  };

  return (
    <>
      <NormalHeader />
      <div className="flex h-screen justify-center items-center">
        <section className="flex flex-col justify-center space-y-10 p-10 sm:w-2/4 h-3/4 md:w-1/4 h-3/4">
          <div>
            <div className="mb-2">
              <NormalInput
                label="Usuario"
                value={inputs.user}
                name="user"
                handleInputChanges={handleInputChanges}
              />
            </div>

            <div>
              <NormalInput
                label="Contraseña"
                value={inputs.password}
                name="password"
                handleInputChanges={handleInputChanges}
              />
            </div>

            <div className="mt-5">
              <NormalButton text="Iniciar sesion" />
            </div>
          </div>

          <div className="mt-5 text-center">
            <p className="mb-3 font-bold">
              ¿Aún no tienes cuenta en LikeShoes?
            </p>
            <Link href={"/register"} className="textSecondary font-medium">
              Crea tu cuenta
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
