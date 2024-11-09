import Post from "@/app/(models)/Post";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    console.log("id", id);
    const singlePost = await Post.findOne({ _id: id });
    return NextResponse.json({ singlePost }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
