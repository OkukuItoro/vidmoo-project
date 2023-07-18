import { NextApiRequest, NextApiResponse } from "next";

import { connectToDB } from "@/utils/db";
import { Movie } from "@/models";

export const GET = async (req: NextApiRequest) => {
  // const { id } = req.query;

  try {
    await connectToDB();
    const genreMovies = await Movie.find({ genre_id: { $in: [37] } });

    // return res.json({ id });
    return new Response(JSON.stringify({ genreMovies }), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all movies", { status: 500 });
  }
};
