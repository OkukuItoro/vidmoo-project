import { GenreProps, MoviesStateProps, ShowsStateProps } from "@/types";

/* ACCESS API ROUTE TO FETCH DATA FROM THE DATABASE */
export const fetchMovies = async (): Promise<MoviesStateProps[]> => {
  const res = await fetch("http://localhost:3000/api/movies");
  return res.json();
};

export const fetchShows = async (): Promise<ShowsStateProps[]> => {
  const res = await fetch("http://localhost:3000/api/tv-shows");
  return res.json();
};
