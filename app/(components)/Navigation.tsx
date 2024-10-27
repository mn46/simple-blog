"use client";

import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-end px-10 py-5">
      <ul className="flex items-center gap-10">
        <li className="font-semibold text-lg">
          <Link href="/post">create a new post</Link>
        </li>
        <li className="font-semibold text-lg">
          <Link href="/">log in</Link>
        </li>
        <li>
          <Button
            variant="primary"
            onClick={() => {
              return;
            }}
          >
            sign up
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
