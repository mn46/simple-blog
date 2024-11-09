import Image from "next/image";
import Headline from "./(components)/Headline";
import PostMini from "./(components)/PostMini";
import { PostType } from "./types";
import Button from "./(components)/Button";
import Link from "next/link";

const getPosts = async () => {
  const posts = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  }).then((res) => res.json());

  if (posts) {
    return posts;
  } else {
    throw new Error("Failed to get the posts.");
  }
};

export default async function Home() {
  const { posts } = await getPosts();

  return (
    <div>
      <main className="font-[family-name:var(--pt-sans)]">
        <section id="create_new" className="mx-10 lg:mx-32 xl:mx-96">
          <Headline text="create new post" />
          <div className="mt-10 p-8 flex items-center justify-center bg-secondary bg-opacity-25 rounded-lg border-2 border-primary border-dashed">
            <Link href={`/post/new`} className="primary-btn">
              create a new post
            </Link>
          </div>
        </section>

        <section id="all_posts" className="mt-16 mx-10 lg:mx-32 xl:mx-96">
          <Headline text="all posts" />
          <div>
            {posts?.map((post: PostType) => (
              <PostMini key={post._id} postData={post} />
            ))}
          </div>
        </section>
      </main>
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
