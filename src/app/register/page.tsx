"use client";

import React, { useState, useEffect } from "react";

/* react icons */
import { IoLogoFacebook } from "react-icons/io5";

/* next */
import Link from "next/link";

/* components */
import { NormalInput, NormalButton } from "../../components";

const Register: React.FC = () => {
  const [inputs, setInputs] = useState({
    email: "",
    fullName: "",
    password: "",
    repeatPassword: "",
  });

  const handleInputChanges = (input: string, value: string) => {
    setInputs((prevState) => ({ ...prevState, [input]: value }));
  };

  const createUser = () => {
    console.log("inputs: ", inputs.email, inputs.fullName, inputs.password);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center font-sans h-screen">
        <section className="w-80 sm:w-80 md:w-80 px-5 sm:px-5 md:px-8 py-5 border-1">
          <h1 className="textPrimary text-center text-3xl font-bold tracking-wide">
            LikeShoes
          </h1>

          <p className="text-center mt-3 text-md font-medium text-slate-500">
            Registrate y compra el calzado que mas te gusta.
          </p>

          <div className="mt-3">
            <NormalButton
              text="Iniciar sesion con facebook"
              backgroundColor="bgTertiary"
              textColor="textSecondary"
              icon={<IoLogoFacebook size={25} />}
            />
          </div>

          <div className="flex justify-center items-center mt-3">
            <section className="border-b-2 w-28 mr-5"></section>
            <p>Ó</p>
            <section className="border-b-2 w-28 ml-5"></section>
          </div>

          <div className="mb-1 ">
            <NormalInput
              value={inputs.email}
              label="Correo electronico"
              name="email"
              handleInputChanges={handleInputChanges}
              inputType="email"
            />
          </div>
          <div className="mb-1 ">
            <NormalInput
              value={inputs.fullName}
              label="Nombres completos"
              name="fullName"
              handleInputChanges={handleInputChanges}
            />
          </div>
          <div className="mb-1">
            <NormalInput
              value={inputs.password}
              label="Contraseña"
              name="password"
              handleInputChanges={handleInputChanges}
            />
          </div>
          <div className="mb-1">
            <NormalInput
              value={inputs.repeatPassword}
              label="Repetir contraseña"
              name="repeatPassword"
              handleInputChanges={handleInputChanges}
            />
          </div>

          <div>
            <p className="text-center text-xs my-5">
              Al registrarte, aceptas nuestras Condiciones, <br></br> nuestra
              Política de privacidad y nuestra Política de cookies.
            </p>
          </div>

          <div className="mt-3">
            <NormalButton
              text="Registrarte"
              backgroundColor="bgTertiary"
              textColor="textSecondary"
              onClick={createUser}
            />
          </div>
        </section>

        <section className="w-80 sm:w-80 md:w-80 mt-4 px-14 py-5 border-1">
          <p className="text-center">
            ¿Tienes una cuenta?{" "}
            <Link href={"/login"} className="textTertiary font-medium">
              Entrar
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Register;
