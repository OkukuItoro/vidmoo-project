import { NextApiRequest, NextApiResponse } from "next";

import { connectToDB } from "@/utils/db";
import { Movie } from "@/models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body;

  try {
    await connectToDB();
    const genreMovies = await Movie.find({ genre_id: { $in: [id] } });

    // return res.json({ id });
    return res.status(200).json({ genreMovies });
  } catch (error) {
    return new Response("Failed to fetch all movies", { status: 500 });
  }
}
