import Link from "next/link";
import { Post } from "../types";

interface Props {
  postData?: Post;
}

const PostMini: React.FC<Props> = ({ postData }) => {
  return (
    <article id={`post_1`} className="flex flex-col gap-4 mt-10">
      <div>
        <h3 className="text-2xl font-bold">Post title</h3>
        <h4 className="text-sm text-secondary">27/10/2024</h4>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
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
