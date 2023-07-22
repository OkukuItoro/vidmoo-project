"use client";
import { MoviesStateProps, ShowsStateProps } from "@/types";
import { fetchMovies, fetchShows } from "@/utils/fetchData";
import { useState, useEffect } from "react";
import { ContentCard, Loading } from "@/components";
import Image from "next/image";

interface FeaturePageProps {
  params: { feature: string };
}

const FeaturePage = ({ params }: FeaturePageProps) => {
  const { feature } = params;

  // MOVIE'S STATE
  const [movieContent, setMovieContent] = useState<MoviesStateProps[]>([]);
  const [popularMovies, setPopularMovies] = useState<MoviesStateProps[]>([]);

  // TV SHOW'S STATE
  const [showContent, setShowContent] = useState<ShowsStateProps[]>([]);
  const [popularShows, setPopularShows] = useState<ShowsStateProps[]>([]);

  let popularData;
  let mainData;

  useEffect(() => {
    if (feature == "movies") {
      fetchMovies()
        .then(function (loadedMovies) {
          console.log(loadedMovies);

          popularData = loadedMovies.slice(0, 4);
          mainData = loadedMovies.slice(4);

          setPopularMovies(popularData);
          setMovieContent(mainData);
        })
        .catch((err) => console.log(err.message));
    } else {
      fetchShows()
        .then(function (loadedShows) {
          popularData = loadedShows.slice(0, 4);
          mainData = loadedShows.slice(4);
          setPopularShows(popularData);
          setShowContent(mainData);
        })
        .catch((err) => console.log(err.message));
    }
  }, []);

  return (
    <main className="w-[80%] mt-10 md:mt-0 py-8 flex flex-col gap-[50px]">
      {/* POPULAR CONTENT SECTION */}
      <section>
        <h1 className="text-2xl font-bold mb-4">Popular</h1>
        <div className="w-full h-[30%] md:h-[300px] flex relative rounded-md">
          {feature == "movies"
            ? popularMovies.map((movie) => (
                <Image
                  fill
                  src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                  alt={movie.title}
                  className="rounded-md border-[#303030] border-[1px]"
                />
              ))
            : popularShows.map((show) => (
                <Image
                  fill
                  src={`https://image.tmdb.org/t/p/w1280/${show.backdrop_path}`}
                  alt={show.original_name}
                  className=" rounded-md border-[#303030] border-[1px]"
                />
              ))}
        </div>
      </section>

      {/* MAIN FEATURE CONTENT SECTION */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold capitalize">{feature}</h1>
        </div>

        <div className="flex gap-6 justify-evenly flex-wrap">
          {feature == "movies"
            ? movieContent.map((item, i) => (
                <ContentCard
                  key={i}
                  movieData={item}
                  containerStyles="mb-4"
                  imageStyles="h-[320px] border-[#303030] border-[1px]"
                />
              ))
            : showContent.map((item, i) => (
                <ContentCard
                  key={i}
                  showsData={item}
                  containerStyles="mb-4"
                  imageStyles="h-[320px] border-[#303030] border-[1px]"
                />
              ))}
        </div>
      </section>
    </main>
  );
};

export default FeaturePage;
