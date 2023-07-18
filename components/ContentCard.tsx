import { BsFillStarFill } from "react-icons/bs";
import { RiThumbUpFill } from "react-icons/ri";
import { MdHighQuality } from "react-icons/md";
import Image from "next/image";
import { MoviesStateProps, ShowsStateProps } from "@/types";

interface ContentCardProps {
  movieData?: MoviesStateProps;
  showsData?: ShowsStateProps;
  containerStyles: string;
  imageStyles: string;
}

const ContentCard = ({
  movieData,
  showsData,
  containerStyles,
  imageStyles,
}: ContentCardProps) => {
  return (
    <div className={containerStyles}>
      <Image
        height={320}
        width={342}
        className={`w-full ${imageStyles} rounded-sm`}
        src={`https://image.tmdb.org/t/p/w342/${
          movieData ? movieData.poster_path : showsData?.poster_path
        }`}
        alt={movieData ? `${movieData.title}` : `${showsData?.original_name}`}
      />
      <div className="mt-4 text-[14px]">
        <h3 className="font-semibold">
          {movieData ? movieData.title : showsData?.name}
        </h3>
        <div className="flex justify-between items-end">
          <MdHighQuality size={20} className="text-primary-theme" />

          <div className="flex gap-4 items-center mt-2">
            <div className="flex items-center gap-2">
              <RiThumbUpFill className="text-primary-theme" />
              {movieData ? movieData.vote_count : showsData?.vote_count}
            </div>
            <div className="flex items-center gap-2">
              <BsFillStarFill className="text-primary-theme" />
              {movieData ? movieData.vote_average : showsData?.vote_average}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
