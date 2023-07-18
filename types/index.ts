import { Types } from "mongoose";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  isDisabled?: boolean;
}

export interface ContentDataProps {
  title: string;
  year: number;
  duration: string;
  reviews: number;
}

export interface SearGenreProps {
  genre: string;
  setGenre: (manufacturer: string) => void;
}

/* Mongoose Schemas */
export interface MovieSchemaProps {
  genres?: Types.ObjectId;
  adult: boolean;
  backdrop_path: string;
  genre_ids: Types.Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ShowSchemaProps {
  genres: Types.ObjectId;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: Types.Array<number>;
  id: number;
  name: string;
  origin_country: Types.Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: number;
  vote_average: number;
  vote_count: number;
}

// Movie State Props
export interface MoviesStateProps {
  adult?: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
}

// TV Shows State Props
export interface ShowsStateProps {
  genres?: number;
  backdrop_path: string;
  first_air_date: string;
  genre_ids?: number[];
  id?: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview?: string;
  popularity: number;
  poster_path: number;
  vote_average: number;
  vote_count: number;
}

export interface GenreProps {
  label: string;
  id: number;
}

export interface DummyDataProps {
  title: string;
  vote_count: number;
  vote_average: number;
  img: string;
}
