import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/utils/db";
import { Movie } from "@/models";
import { getData, urls } from "@/utils/apiData";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDB();

    /* Extract api Data to each Collection */
    // getData(urls.movieGenres);

    const movies = await Movie.find();

    return res.status(200).json({ movies });
  } catch (error) {
    return new Response("Failed to fetch all movies", { status: 500 });
  }
};
