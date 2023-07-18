import { CustomButton, DummyCard } from "@/components";
import { DummyDataProps } from "@/types";

interface ShowCaseProps {
  type: string;
  dummyData: DummyDataProps[];
}

const ShowCase = ({ type, dummyData }: ShowCaseProps) => {
  return (
    <section
      className={`${
        type == "movies"
          ? "upcoming_movies_container"
          : "best_tv_series_container"
      } h-[1000px] sm:h-[700px] w-[100%] object-cover relative`}
    >
      {/* Overlay */}
      <div className="h-full w-full bg-black opacity-95 absolute z-20" />

      <div className="absolute h-full w-full z-40 flex flex-col items-center justify-center">
        <div className="w-[79%]">
          {/* Section Header */}
          {type == "movies" ? (
            <div className="text-center md:text-start">
              <p className="text-primary-theme text-[14px] font-semibold uppercase">
                online streaming
              </p>
              <div className="flex flex-col items-center md:flex-row justify-between">
                <h2 className="home_section_header">Popular Movies</h2>
                <div className="hidden sm:flex gap-3 items-center">
                  <CustomButton title="Action" />
                  <CustomButton title="Comedy" />
                  <CustomButton title="Drama" />
                  <CustomButton title="Horror" />
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-primary-theme text-[14px] font-semibold uppercase">
                tv series
              </p>
              <h2 className="home_section_header">World Best TV Series</h2>
            </div>
          )}

          {/* Section Content */}
          <div className="w-full mt-8 flex flex-col items-center sm:flex-row justify-center md:justify-normal gap-8">
            {dummyData.map((movie, i) => (
              <DummyCard
                key={i}
                data={movie}
                containerStyles="w-[65%] sm:w-[45%] md:w-[35%] first-of-type:hidden last-of-type:hidden md:first-of-type:block md:last-of-type:block"
                imageStyles="h-[320px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
