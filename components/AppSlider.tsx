import { MoviesStateProps, ShowsStateProps } from "@/types";

interface AppSliderProps {
  movies?: MoviesStateProps[];
  shows?: ShowsStateProps[];
}

const AppSlider = ({ movies, shows }: AppSliderProps) => {
  return (
    <div className="w-full h-[300px] bg-primary-theme rounded-md">
      {/* <Image
        fill
        src={`https://image.tmdb.org/t/p/w1280/${data[0].backdrop_path}`}
        alt="item.title"
      /> */}
    </div>
  );
};

export default AppSlider;
