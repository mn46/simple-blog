"use client";

import Image from "next/image";
import Button from "./(components)/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
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
      </header>
      <main className="font-[family-name:var(--pt-sans)]"></main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
