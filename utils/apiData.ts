import { Movie, Show, ShowGenre, MovieGenre } from "@/models";

interface OptionsProps {
  method: string;
  headers: Headers | Record<string, string>;
}

const options: OptionsProps = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.BEARER_TOKEN,
  },
};

export const urls = {
  movie:
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc",
  shows: "https://api.themoviedb.org/3/discover/tv?language=en-US",
  movieGenres: "https://api.themoviedb.org/3/genre/movie/list?language=en",
  showGenres: "https://api.themoviedb.org/3/genre/tv/list?language=en",
};

/* GET DATA FROM THE TMDB API */
export const getData = async (url: string): Promise<void> => {
  const data = await fetch(url, options);

  const response = await data.json();
  //   Show and Movies

  for (let i = 0; i < response.results.length; i++) {
    const show = new Show({
      adult: response.results[i]["adult"],
      backdrop_path: response.results[i]["backdrop_path"],
      genre_ids: response.results[i]["genre_ids"],
      id: response.results[i]["id"],
      original_language: response.results[i]["original_language"],
      original_title: response.results[i]["original_title"],
      overview: response.results[i]["overview"],
      popularity: response.results[i]["popularity"],
      poster_path: response.results[i]["poster_path"],
      release_date: response.results[i]["release_date"],
      title: response.results[i]["title"],
      video: response.results[i]["video"],
      vote_average: response.results[i]["vote_average"],
      vote_count: response.results[i]["vote_count"],
    });
    await show.save();
  }

  // ShowGenres and MovieGenres
  // for (let i = 0; i < response.genres.length; i++) {
  //   const movieGenre = new MovieGenre({
  //     id: response.genres[i]["id"],
  //     name: response.genres[i]["name"],
  //   });
  //   await movieGenre.save();
  // }
};
