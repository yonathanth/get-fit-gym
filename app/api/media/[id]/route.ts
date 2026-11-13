import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/** Serves an uploaded image. Ids are never reused, so it can be cached forever. */
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const asset = await prisma.mediaAsset.findUnique({ where: { id } });
    if (!asset) return new NextResponse("Not found", { status: 404 });
    return new NextResponse(new Uint8Array(asset.data), {
      headers: {
        "Content-Type": asset.mimeType,
        "Content-Length": String(asset.size),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Media GET error:", error);
    return new NextResponse("Error", { status: 500 });
  }
}
