import Post from "@/app/(models)/Post";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: Promise<{ id: string }>;
};

export async function GET(req: NextRequest, { params }: { params: Params }) {
  try {
    const { id } = params;
    const singlePost = await Post.findOne({ _id: id });
    return NextResponse.json({ singlePost }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
