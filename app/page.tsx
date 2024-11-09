import Headline from "./(components)/Headline";
import PostMini from "./(components)/PostMini";
import { PostType } from "./types";
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
      <main className="font-[family-name:var(--pt-sans)] pb-14">
        <section id="create_new">
          <div className="py-20 mx-10 lg:mx-32 xl:mx-96">
            {/* <Headline text="create new post" /> */}
            <h1 className="text-white font-bold text-6xl md:text-8xl text-center">
              Write it your way.
            </h1>
            <div className="mt-10 p-8 flex items-center justify-center">
              <Link
                href={`/post/new`}
                className="primary-btn !bg-white !text-secondary font-bold"
              >
                create a new post
              </Link>
            </div>
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
    </div>
  );
}
