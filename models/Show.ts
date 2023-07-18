import { model, Schema, models } from "mongoose";
import { ShowSchemaProps } from "@/types";

const ShowSchema = new Schema<ShowSchemaProps>({
  backdrop_path: String,
  first_air_date: String,
  genre_ids: Array,
  id: Number,
  name: String,
  origin_country: Array,
  original_language: String,
  original_name: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  vote_average: Number,
  vote_count: Number,
});

const Show = models.Show || model<ShowSchemaProps>("Show", ShowSchema);

export default Show;
