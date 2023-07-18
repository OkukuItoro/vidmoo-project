import { connectToDB } from "@/utils/db";
import { Movie } from "@/models";

export const GET = async (req: Request, { params }) => {
  try {
    await connectToDB();
    const genreMovies = await Movie.find({ genre_id: params.id });

    return new Response(JSON.stringify(genreMovies), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all movies", { status: 500 });
  }
};
