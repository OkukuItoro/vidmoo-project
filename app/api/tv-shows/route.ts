import { connectToDB } from "@/utils/db";
import { Show } from "@/models";

export const GET = async (req: Request) => {
  try {
    await connectToDB();

    /* Extract api Data to each Collection */
    // getData(urls.movieGenres);

    const tvShows = await Show.find();

    return new Response(JSON.stringify(tvShows), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all movies", { status: 500 });
  }
};
