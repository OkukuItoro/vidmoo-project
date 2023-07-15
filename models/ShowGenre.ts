import { model, Schema, models } from "mongoose";

interface ShowGenreProps {
  id: number;
  name: string;
}

const ShowGenreSchema = new Schema<ShowGenreProps>({
  id: Number,
  name: String,
});

const ShowGenre =
  models.ShowGenre || model<ShowGenreProps>("ShowGenre", ShowGenreSchema);

export default ShowGenre;
