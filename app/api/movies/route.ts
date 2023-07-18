import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/utils/db";
import { Movie } from "@/models";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDB();
    const movies = await Movie.find();

    return res.status(200).json({ movies });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch all movies" });
  }
};
