import Post from "../../(models)/Post";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const postData = body.formData;
    await Post.create(postData);

    return NextResponse.json({ message: "Post was created." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create the post.", error },
      { status: 500 }
    );
  }
}
