import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const PostSchema = new Schema(
  {
    title: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

// will grab an existing post or create a new one
const Post = mongoose.models.post || mongoose.model("post", postSchema);
export default Post;
