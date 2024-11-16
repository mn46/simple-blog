import { parseDateString } from "@/app/(helpers)/helpers";
import { PostType } from "@/app/types";

interface FetchedPost {
  singlePost: PostType;
}

interface Params {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: Params) => {
  console.log("params", params);
  const { id } = await params;

  const getPostById = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/posts/${id}`);
      return res.json();
    } catch (error) {
      throw new Error("Failed to get the post", { cause: error });
    }
  };

  const { singlePost }: FetchedPost = await getPostById(id);

  return (
    <article
      id={`post_${id}`}
      className="flex flex-col gap-4 mt-10 mx-10 lg:mx-32 xl:mx-96"
    >
      <div>
        <h3 className="text-2xl font-bold">{singlePost.title}</h3>
        <h4 className="text-sm text-secondary">
          {parseDateString(singlePost.createdAt)}
        </h4>
      </div>
      <p className="whitespace-pre-line">{singlePost.content}</p>
    </article>
  );
};

export default Page;
