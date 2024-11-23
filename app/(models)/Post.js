import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
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
const Post = mongoose.models.post || mongoose.model("post", PostSchema);
export default Post;
