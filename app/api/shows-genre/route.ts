import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/utils/db";
import { Show } from "@/models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { id } = req.body;
    try {
      await connectToDB();
      const genreMovies = await Show.find({ genre_id: { $in: [id] } });

      return res.status(200).json({ genreMovies });
    } catch (error) {
      return new Response("Failed to fetch all movies", { status: 500 });
    }
  }
}
