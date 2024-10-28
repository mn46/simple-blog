"use client";

import { ReactNode } from "react";

interface Props {
  variant: "primary" | "secondary";
  type?: "submit" | "button";
  onClick: () => void;
  children: ReactNode;
}

const Button: React.FC<Props> = ({
  variant,
  type = "button",
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      className={`${
        variant === "primary"
          ? "bg-primary text-white"
          : "border-2 border-primary text-primary font-semibold"
      } rounded-full px-5 py-2 uppercase`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
