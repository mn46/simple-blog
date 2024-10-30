import Link from "next/link";
import { PostType } from "../types";

interface Props {
  postData: PostType;
}

const PostMini: React.FC<Props> = ({ postData }) => {
  return (
    <article id={`post_1`} className="flex flex-col gap-4 mt-10">
      <div>
        <h3 className="text-2xl font-bold">{postData.title}</h3>
        <h4 className="text-sm text-secondary">{postData.createdAt}</h4>
      </div>
      <p>{postData.content}</p>
      <Link
        href={`/post/1`}
        className="bg-primary rounded-full px-5 py-2 uppercase text-white self-start hover:bg-secondary transition-colors duration-200"
      >
        read more
      </Link>
    </article>
  );
};

export default PostMini;
