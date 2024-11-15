"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import burgerMenu from "../burger-menu.svg";
import close from "../close.svg";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="flex justify-end px-10 py-5">
      <button onClick={() => setIsOpen(true)}>
        <Image
          src={burgerMenu}
          alt="burger menu icon"
          width={40}
          height={30}
          className="block md:hidden"
        />
      </button>
      <ul
        className={`${
          isOpen ? "absolute top-0 left-0" : "hidden md:flex"
        } md:static flex flex-col bg-white h-screen w-screen md:h-full md:w-full md:flex-row md:justify-end items-center gap-10`}
      >
        {isOpen && (
          <li className="block md:hidden self-end p-10">
            <button onClick={() => setIsOpen(false)}>
              <Image src={close} alt="close icon" width={30} height={30} />
            </button>
          </li>
        )}
        <li className="font-semibold text-lg hover:text-secondary transition-colors duration-200">
          <Link href="/" onClick={() => setIsOpen(false)}>
            home
          </Link>
        </li>
        <li className="font-semibold text-lg hover:text-secondary transition-colors duration-200">
          <Link href="/post/new" onClick={() => setIsOpen(false)}>
            create a new post
          </Link>
        </li>
        <li className="font-semibold text-lg hover:text-secondary transition-colors duration-200">
          <Link href="/" onClick={() => setIsOpen(false)}>
            log in
          </Link>
        </li>
        <li>
          <Button
            variant="primary"
            onClick={() => {
              setIsOpen(false);
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
