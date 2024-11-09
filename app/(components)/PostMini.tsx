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
      <Link href={`/post/${postData._id}`} className="primary-btn">
        read more
      </Link>
    </article>
  );
};

export default PostMini;
