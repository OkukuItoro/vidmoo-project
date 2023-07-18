import { model, Schema, models } from "mongoose";
import { MovieSchemaProps } from "@/types";

const MovieSchema = new Schema<MovieSchemaProps>({
  adult: Boolean,
  backdrop_path: String,
  genre_ids: Array,
  id: Number,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: String,
  title: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number,
});

const Movie = models.Movie || model<MovieSchemaProps>("Movie", MovieSchema);

export default Movie;
