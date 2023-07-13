import { BiSearch } from "react-icons/bi";
import { upcomingMovies } from "@/constants";
import { ContentCard } from "@/components";
import Link from "next/link";

interface FeaturePageProps {
  params: { feature: string };
}
const FeaturePage = ({ params }: FeaturePageProps) => {
  return (
    <main className="w-[85%] py-8 flex flex-col gap-[50px]">
      {/* NEWLY ADDED CONTENT SECTION */}
      <section>
        <h1 className="text-2xl font-bold mb-4">Newly Added</h1>
        <div className="w-full h-[300px] bg-primary-theme rounded-md"></div>
      </section>

      {/* RECOMMENDED SECTION */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Recommended For You</h1>
          <Link href={`/app/${params.feature}/recommended`}>
            <h3 className="text-[18px] ">View All</h3>
          </Link>
        </div>

        <div className="flex gap-4">
          {upcomingMovies.map((movie, i) => (
            <ContentCard
              key={i}
              data={movie}
              containerStyles="w-[25%]"
              imageStyles="h-[320px]"
            />
          ))}
        </div>
      </section>

      {/* MAIN FEATURE CONTENT SECTION */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold capitalize">{params.feature}</h1>
          <Link href={`/app/${params.feature}/all`}>
            <h3 className="text-[18px] ">View All</h3>
          </Link>
        </div>

        <div className="flex gap-4">
          {upcomingMovies.map((movie, i) => (
            <ContentCard
              key={i}
              data={movie}
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
