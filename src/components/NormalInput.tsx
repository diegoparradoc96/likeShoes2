import React from "react";

/* nextui */
import { Input } from "@nextui-org/react";

/* prop types */
type InputType = "email" | "normal";

interface NormalInputProps {
  label: string;
  value: string;
  name: string;
  handleInputChanges: (input: string, value: string) => void;
  variant?: "bordered";
  inputType?: InputType;
}

const NormalInput: React.FC<NormalInputProps> = ({
  label,
  value,
  name,
  handleInputChanges,
  variant = "bordered",
  inputType = "normal",
}) => {
  const errorMessages = {
    normal: "",
    email: "Por favor, ingresa un correo valido.",
  };

  const inputTypeLogic: Record<InputType, () => boolean> = {
    email: () => {
      const validateEmail = (value: string) =>
        value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

      if (value.length > 1) {
        return validateEmail(value) ? false : true;
      } else {
        return false;
      }
    },
    normal: () => {
      return false;
    },
  };

  const isInvalid = (inputType: InputType) => {
    if (inputTypeLogic[inputType]) {
      return inputTypeLogic[inputType]();
    } else {
      return false;
    }
  };

  return (
    <Input
      label={label}
      value={value}
      name={name}
      onChange={(event) =>
        handleInputChanges(event.target.name, event.target.value)
      }
      variant={variant}
      errorMessage={isInvalid(inputType) && errorMessages[inputType]}
    />
  );
};

export { NormalInput };
