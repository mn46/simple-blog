import Post from "../../(models)/Post";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await Post.create(body);

    return NextResponse.json({ message: "Post was created." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create the post.", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const posts = await Post.find();
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get the posts.", error },
      { status: 500 }
    );
  }
}
