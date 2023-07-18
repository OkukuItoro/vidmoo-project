import { NextApiRequest } from "next";
import { connectToDB } from "@/utils/db";
import { Movie } from "@/models";
import { getData, urls } from "@/utils/apiData";

export const GET = async (req: NextApiRequest) => {
  try {
    await connectToDB();

    /* Extract api Data to each Collection */
    // getData(urls.movieGenres);

    const movies = await Movie.find();

    return new Response(JSON.stringify(movies), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all movies", { status: 500 });
  }
};
