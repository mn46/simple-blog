import Image from "next/image";
import Headline from "./(components)/Headline";
import PostMini from "./(components)/PostMini";

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

  console.log("posts", posts);

  return (
    <div>
      <main className="font-[family-name:var(--pt-sans)]">
        <section id="create_new" className="mx-10 lg:mx-32 xl:mx-96">
          <Headline text="create new post" />
        </section>

        <section id="all_posts" className="mx-10 lg:mx-32 xl:mx-96">
          <Headline text="all posts" />
          <div>
            <PostMini />
            <PostMini />
            <PostMini />
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
