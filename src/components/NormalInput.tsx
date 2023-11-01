import React from "react";

/* nextui */
import { Input } from "@nextui-org/react";

/* prop types */
interface NormalInputProps {
  label: string;
  value: string;
  name: string;
  handleInputChanges: (input: string, value: string) => void;
  variant?: "bordered"
}

const NormalInput: React.FC<NormalInputProps> = ({
  label,
  value,
  name,
  handleInputChanges,
  variant = "bordered"
}) => {
  return (
    <Input
      label={label}
      value={value}
      name={name}
      onChange={(event) =>
        handleInputChanges(event.target.name, event.target.value)
      }
      variant={variant}
    />
  );
};

export { NormalInput };
