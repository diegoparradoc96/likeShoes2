"use client";

import React, { useState } from "react";

/* types */
import { IUserRegister } from "../../common/types";
/* next */
import { useRouter } from "next/navigation";
import Link from "next/link";
/* components */
import { NormalInput, NormalButton, NormalHeader } from "../../components";
/* queries api */
import { userQueries } from "../../services/api_likeshoes";

const Login: React.FC = () => {
  const router = useRouter();

  const [userRegister, setUserRegister] = useState<IUserRegister>({
    email: "",
    password: "",
  });

  const handleInputChanges = (input: string, value: string) => {
    setUserRegister((prevState) => ({ ...prevState, [input]: value }));
  };

  const login = async (user: IUserRegister) => {
    try {
      const login = await userQueries.login(user);

      router.push("/");
    } catch (error) {
      console.error("error => ", error);
    }
  };

  return (
    <div>
      <NormalHeader />
      <div className="flex h-screen justify-center items-center">
        <section className="sm:w-80 md:w-80 h-3/4 flex flex-col justify-center space-y-10 p-10 h-3/4">
          <div>
            <div className="mb-2">
              <NormalInput
                label="Email"
                value={userRegister.email}
                name="email"
                handleInputChanges={handleInputChanges}
              />
            </div>

            <div>
              <NormalInput
                label="Contraseña"
                value={userRegister.password}
                name="password"
                handleInputChanges={handleInputChanges}
              />
            </div>

            <div className="mt-5">
              <NormalButton
                onClick={() => login(userRegister)}
                text="Iniciar sesion"
                textColor="textSecondary"
              />
            </div>
          </div>

          <div className="mt-5 text-center">
            <p className="mb-3 font-bold">
              ¿Aún no tienes cuenta en LikeShoes?
            </p>
            <Link href={"/register"} className="textPrimary font-medium">
              Crea tu cuenta
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
