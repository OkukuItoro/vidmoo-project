import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/utils/db";
import { Show } from "@/models";

export const GET = async (req: NextApiRequest) => {
  try {
    await connectToDB();
    const genreMovies = await Show.find({ genre_id: { $in: [37] } });

    return new Response(JSON.stringify(genreMovies), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all movies", { status: 500 });
  }
};
