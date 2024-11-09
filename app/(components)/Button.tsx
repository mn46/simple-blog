"use client";

import { ReactNode } from "react";

interface Props {
  variant: "primary" | "secondary";
  type?: "submit" | "button";
  onClick?: () => void;
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
      className={variant === "primary" ? "primary-btn" : "secondary-btn"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
