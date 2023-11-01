import React from "react";

/* nextui components */
import { Button } from "@nextui-org/react";

/* prop types */
interface NormalButtonProps {
  text: string;
  variant?: "solid";
  backgroundColor?: "bgPrimary";
  textColor?: "textPrimary";
}

const NormalButton: React.FC<NormalButtonProps> = ({
  text,
  variant = "solid",
  backgroundColor = "bgPrimary",
  textColor = "textPrimary",
}) => {
  return (
    <Button
      variant={variant}
      color="success"
      className={`w-full ${backgroundColor} ${textColor}`}
    >
      <p className="font-bold">{text}</p>
    </Button>
  );
};

export { NormalButton };
