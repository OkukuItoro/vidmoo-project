import { model, Schema, models } from "mongoose";

interface MovieGenreProps {
  id: number;
  name: string;
}

const MovieGenreSchema = new Schema<MovieGenreProps>({
  id: Number,
  name: String,
});

const MovieGenre =
  models.MovieGenre || model<MovieGenreProps>("MovieGenre", MovieGenreSchema);

export default MovieGenre;
