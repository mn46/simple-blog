"use client";

import Button from "@/app/(components)/Button";
import Headline from "@/app/(components)/Headline";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

interface FormElements extends EventTarget {
  elements: HTMLFormElement[];
}

const NewPost = () => {
  const router = useRouter();
  const handleCancel = () => {
    router.push("/");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const reqBody: { [key: string]: string } = {};

    const formElements = (event.target as FormElements).elements;

    Array.from(formElements).forEach((element: HTMLFormElement) => {
      if (element.value === "") return;
      reqBody[element.name] = element.value;
    });

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: { "content-type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to save the new post.");
    } else {
      router.push("/");
    }
  };
  return (
    <div className="mx-10 lg:mx-32 xl:mx-96">
      <Headline text="Create a new post" />
      <form
        className="mt-10"
        method="post"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="flex flex-col mb-6">
          <label htmlFor="title">Post title</label>
          <input
            id="title"
            name="title"
            type="text"
            required
            className="border border-primary rounded-xl p-4"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="content">Post content</label>
          <textarea
            id="content"
            name="content"
            required
            className="border border-primary rounded-xl h-[50vh] p-4"
          />
        </div>

        <div className="flex justify-between mt-10">
          <Button variant="secondary" onClick={() => handleCancel()}>
            cancel
          </Button>
          <Button variant="primary" type="submit">
            save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
