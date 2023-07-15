"use client";
import { MoviesStateProps, ShowsStateProps } from "@/types";
import { useState, useEffect } from "react";
import { AppSlider, ContentCard } from "@/components";

interface FeaturePageProps {
  params: { feature: string };
}

/* ACCESS API ROUTE TO FETCH DATA FROM THE DATABASE */
const fetchMovies = async (): Promise<MoviesStateProps[]> => {
  const res = await fetch("http://localhost:3000/api/movies");
  return res.json();
};
const fetchShows = async (): Promise<ShowsStateProps[]> => {
  const res = await fetch("http://localhost:3000/api/tv-shows");
  return res.json();
};

const FeaturePage = ({ params }: FeaturePageProps) => {
  const { feature } = params;

  // MOVIE'S STATE
  const [movieContent, setMovieContent] = useState<MoviesStateProps[]>([]);
  const [popularMovies, setPopularMovies] = useState<MoviesStateProps[]>([]);

  // TV SHOW'S STATE
  const [showContent, setShowContent] = useState<ShowsStateProps[]>([]);
  const [popularShows, setPopularShows] = useState<ShowsStateProps[]>([]);

  useEffect(() => {
    if (feature == "movies") {
      fetchMovies().then(function (loadedMovies) {
        const popularData = loadedMovies.slice(0, 4);
        const mainData = loadedMovies.slice(4);

        setPopularMovies(popularData);
        setMovieContent(mainData);
      });
    } else {
      fetchShows().then(function (loadedShows) {
        const popularData = loadedShows.slice(0, 4);
        const mainData = loadedShows.slice(4);
        setPopularShows(popularData);
        setShowContent(mainData);
      });
    }
  }, []);

  return (
    <main className="w-[85%] py-8 flex flex-col gap-[50px]">
      {/* POPULAR CONTENT SECTION */}
      <section>
        <h1 className="text-2xl font-bold mb-4">Popular</h1>
        {feature == "movies" ? (
          <AppSlider movies={popularMovies} />
        ) : (
          <AppSlider shows={popularShows} />
        )}
      </section>

      {/* MAIN FEATURE CONTENT SECTION */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold capitalize">{feature}</h1>
        </div>

        <div className="flex gap-4">
          {feature == "movies"
            ? movieContent.map((item, i) => (
                <ContentCard
                  key={i}
                  moviesData={item}
                  containerStyles="w-[25%]"
                  imageStyles="h-[320px]"
                />
              ))
            : showContent.map((item, i) => (
                <ContentCard
                  key={i}
                  showsData={item}
                  containerStyles="w-[25%]"
                  imageStyles="h-[320px]"
                />
              ))}
        </div>
      </section>
    </main>
  );
};

export default FeaturePage;
