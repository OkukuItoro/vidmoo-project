"use client";
import { upcomingMovies } from "@/constants";
import { ContentCard } from "@/components";
import { usePathname } from "next/navigation";

interface SubFeatureProps {
  params: { subFeature: string };
}

const SubFeature = ({ params }: SubFeatureProps) => {
  const pathArray = usePathname().split("/");

  return (
    <main className="w-[85%] py-8 flex flex-col gap-[50px]">
      {/* DYNAMIC ROUTE SECTION (FOR RECOMMENDED/MOVIE OR TV SHOW CONTENT) */}
      <section>
        <h1 className="text-2xl mb-4 font-bold capitalize">
          {params.subFeature === "recommended"
            ? `Recommended ${pathArray[2]} For You`
            : pathArray[2]}
        </h1>

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

export default SubFeature;
