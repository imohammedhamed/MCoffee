import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

const SearchSchema = z.object({
  query: z.string(),
});

export async function GET(req: Request) {
  try {
    // Parse the URL to extract query parameters
    const url = new URL(req.url);
    const query = url.searchParams.get("query") || "";

    // Validate the query parameter using Zod
    const params = SearchSchema.parse({ query });

    // Query the database using Prisma
    const results = await prisma.item.findMany({
      where: {
        title: {
          contains: params.query,
          mode: 'insensitive',
        },
      },
    });

    // Return the results as JSON
    return NextResponse.json(results);
  } catch (error) {
    console.error('Error fetching search results:', error);
    return NextResponse.json({ error: 'Invalid query parameters' }, { status: 400 });
  }
}
