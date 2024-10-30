"use client";

import Button from "@/app/(components)/Button";
import Headline from "@/app/(components)/Headline";
import { useRouter } from "next/navigation";

const NewPost = () => {
  const router = useRouter();
  const handleCancel = () => {
    router.push("/");
  };
  return (
    <div className="mx-10 lg:mx-32 xl:mx-96">
      <Headline text="Create a new post" />
      <form className="mt-10">
        <div className="flex flex-col mb-6">
          <label htmlFor="title">Post title</label>
          <input
            id="title"
            type="text"
            className="border border-primary rounded-xl"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="content">Post content</label>
          <textarea
            id="content"
            className="border border-primary rounded-xl h-[50vh]"
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
