import { GenreProps, MoviesStateProps, ShowsStateProps } from "@/types";

interface OptionsProps {
  method: string;
  headers: Headers | Record<string, string>;
}

const options: OptionsProps = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

/* ACCESS API ROUTE TO FETCH DATA FROM THE DATABASE */
export const fetchMovies = async (): Promise<MoviesStateProps[]> => {
  const res = await fetch("/api/movies", options);
  return res.json();
};

export const fetchShows = async (): Promise<ShowsStateProps[]> => {
  const res = await fetch("/api/tv-shows", options);
  return res.json();
};
