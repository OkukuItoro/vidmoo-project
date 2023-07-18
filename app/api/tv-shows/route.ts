import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/utils/db";
import { Show } from "@/models";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDB();

    /* Extract api Data to each Collection */
    // getData(urls.movieGenres);

    const tvShows = await Show.find();

    return res.status(200).json({ tvShows });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch all shows" });
  }
};
