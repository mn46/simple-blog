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
    </div>
  );
}
