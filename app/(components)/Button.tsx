"use client";

import { ReactNode } from "react";

interface Props {
  variant: "primary" | "secondary";
  onClick: () => void;
  children: ReactNode;
}

const Button: React.FC<Props> = ({ variant, onClick, children }) => {
  return (
    <button
      className={`${
        variant === "primary" ? "bg-primary" : "border-2 border-primary"
      } rounded-full px-5 py-2 uppercase text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
