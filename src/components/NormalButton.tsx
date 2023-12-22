import React from "react";

/* nextui components */
import { Button } from "@nextui-org/react";

/* prop types */
interface NormalButtonProps {
  text: string;
  variant?: "solid";
  backgroundColor?: string;
  icon?: JSX.Element;
  textColor?: string;
  onClick?: () => any;
}

const NormalButton: React.FC<NormalButtonProps> = ({
  text,
  variant = "solid",
  backgroundColor = "bgPrimary",
  icon,
  textColor = "textPrimary",
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      color="success"
      startContent={icon}
      className={`w-full ${backgroundColor} ${textColor}`}
      onClick={onClick}
    >
      <p className="font-bold">{text}</p>
    </Button>
  );
};

export { NormalButton };
