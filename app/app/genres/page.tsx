"use client";
import { useState } from "react";
import { ContentCard, CustomButton, CustomDropDown } from "@/components";
import { showGenres, movieGenres } from "@/constants";
import { GenreProps, MoviesStateProps, ShowsStateProps } from "@/types";
import { fetchMovies, fetchShows } from "@/utils/fetchData";

const GenresPage = () => {
  const [filteredData, setFilteredData] = useState<MoviesStateProps[]>([]);
  const [filteredShowsData, setFilteredShowsData] = useState<ShowsStateProps[]>(
    []
  );
  const [header, setHeader] = useState("");
  const [media, setMedia] = useState("Movies");
  const [genre, setGenre] = useState<GenreProps>({
    label: "Select Genre",
    id: 28,
  });

  const handleSubmit = () => {
    setHeader(`${genre.label} ${media}`);
    if (media == "Movies") {
      fetchMovies()
        .then(function (loadedMovies) {
          setFilteredData(
            loadedMovies.filter((movie) => movie.genre_ids[genre.id])
          );
        })
        .catch((err) => console.log(err));
    } else {
      fetchShows()
        .then(function (loadedShows) {
          setFilteredShowsData(
            loadedShows.filter((show) => show.genre_ids[genre.id])
          );
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <main className="w-[80%] py-8 flex flex-col gap-[50px]">
      <section>
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Genres</h1>
          <p>
            Explore a curated list of Movies or TV Shows based on the genres
          </p>
        </div>

        <div className="flex items-center gap-6 w-full">
          <div className="relative w-[20%]">
            <CustomDropDown type="media" media={media} setMedia={setMedia} />
          </div>
          {media == "Movies" ? (
            <div className="relative w-[40%]">
              <CustomDropDown
                type="genres"
                genre={genre}
                setGenre={setGenre}
                whichGenre={movieGenres}
              />
            </div>
          ) : (
            <div className="relative w-[40%]">
              <CustomDropDown
                type="genres"
                genre={genre}
                setGenre={setGenre}
                whichGenre={showGenres}
              />
            </div>
          )}
          <CustomButton title="Submit" handleClick={handleSubmit} />
        </div>
      </section>

      {/* MAIN FEATURE CONTENT SECTION */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold capitalize">{header}</h1>
        </div>

        <div className="flex gap-3 justify-between flex-wrap">
          {media == "Movies"
            ? filteredData.map((item, i) => (
                <ContentCard
                  key={i}
                  movieData={item}
                  containerStyles="w-[30%] mb-4"
                  imageStyles="h-[320px] border-[#303030] border-[1px]"
                />
              ))
            : filteredShowsData.map((item, i) => (
                <ContentCard
                  key={i}
                  showsData={item}
                  containerStyles="w-[30%] mb-4"
                  imageStyles="h-[320px] border-[#303030] border-[1px]"
                />
              ))}
        </div>
      </section>
    </main>
  );
};

export default GenresPage;
