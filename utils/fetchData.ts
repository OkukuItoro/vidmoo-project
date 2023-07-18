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

export const fetchMoviesGenre = async (
  genre: GenreProps
): Promise<MoviesStateProps[]> => {
  const res = await fetch(`http://localhost:3000/api/movies-genre/${genre.id}`);
  return res.json();
};

export const fetchShowsGenre = async (
  genre: GenreProps
): Promise<ShowsStateProps[]> => {
  const res = await fetch(`http://localhost:3000/api/shows-genre/${genre.id}`);
  return res.json();
};
