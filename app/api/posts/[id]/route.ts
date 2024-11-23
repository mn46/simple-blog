import Post from "@/app/(models)/Post";
import { NextRequest, NextResponse } from "next/server";

// type Params = {
//   params: { id: string };
// };

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const singlePost = await Post.findOne({ _id: id });
    return NextResponse.json({ singlePost }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
