import Image from "next/image";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdMovie } from "react-icons/md";
import {
  BsInfinity,
  BsFillCalendarEventFill,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
} from "react-icons/bs";
import { HiPlayPause } from "react-icons/hi2";
import { CustomButton, ContentCard } from "@/components";
import { NavBar } from "@/components";
import { upcomingMovies } from "@/constants";

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      {/* HEADER SECTION */}
      <header className="w-full h-[100vh] relative">
        {/* Hero Text */}
        <div className="absolute left-[84px] top-[40%] z-40">
          <h1 className="text-4xl font-extrabold w-[60%] mb-8">
            Unlimited <span className="text-[#E4D804]">Movies</span>, TV Shows,
            Amazing Insights & Analytics.
          </h1>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex gap-2">
              <div className="bg-white px-3 text-black font-semibold rounded-sm">
                HD
              </div>
              <div className="bg-white px-3 text-black font-semibold rounded-sm">
                4K
              </div>
            </div>
            <div className="flex gap-2">
              <div className="border-[1px] px-3 font-semibold rounded-sm">
                PG
              </div>
              <div className="border-[1px] px-3 font-semibold rounded-sm">
                SNVL
              </div>
            </div>
            <div className="flex gap-2">
              <div className="border-[1px] px-3 font-semibold rounded-sm">
                <HiPlayPause size={23} />
              </div>
              <div className="border-[1px] px-3 font-semibold rounded-sm">
                <BsInfinity size={23} />
              </div>
            </div>
          </div>

          <CustomButton
            title="Launch App"
            rightIcon={true}
            containerStyles="flex gap-3 items-center"
          />
        </div>
        <Image src="/hero-1.jpg" fill alt="hero 1" className="object-cover" />
        <div className="header__transparent-2 w-[50%] h-[100%] absolute left-0 top-0">
          <Image src="/hero-2.jpg" fill alt="hero-2" className="object-cover" />
        </div>
        <div className="header__transparent bg-black opacity-80 z-20 w-[70%] h-[100%]" />
      </header>

      {/* UPCOMING MOVIES SECTION */}
      <section className="upcoming_movies_container h-[700px] w-[100%] object-cover relative">
        {/* Overlay */}
        <div className="h-full w-full bg-black opacity-95 absolute z-20" />

        {/* Section Content */}
        <div className="absolute h-full w-full z-40 flex flex-col items-center justify-center">
          <div className="w-[79%]">
            <p className="text-primary-theme text-[14px] font-semibold uppercase">
              online streaming
            </p>
            <div className="flex justify-between">
              <h2 className="home_section_header">Upcoming Movies</h2>
              <div className="flex gap-3 items-center">
                <CustomButton title="Action" />
                <CustomButton title="Comedy" />
                <CustomButton title="Drama" />
                <CustomButton title="Horror" />
              </div>
            </div>

            <div className="w-full mt-8 flex gap-8">
              {upcomingMovies.map((movie, i) => (
                <ContentCard
                  key={i}
                  data={movie}
                  containerStyles="w-[25%]"
                  imageStyles="h-[320px]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="w-[100%] py-16 flex items-center justify-center">
        <div className="w-[65%] flex items-center justify-center gap-9">
          <div className="w-[40%] h-[400px]  bg-primary-theme rounded-sm" />
          <div className="w-[60%]">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-[2px] bg-primary-theme" />
              <p className="text-[14px] font-semibold uppercase">
                our services
              </p>
            </div>

            {/* Section Header */}
            <h1 className="text-[24px] font-bold mb-4">
              <span className="block mb-[-6px]">Enjoy Trending TV Shows.</span>
              Explore Data Analytics
            </h1>

            <p className="text-[12px] opacity-95">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              doloribus, exercitationem qui nemo omnis fugit inventore alias
              magni rerum aut? Assumenda aut id aperiam incidunt ex nostrum
              blanditiis ut saepe.
            </p>
            <div className="w-[80%] flex flex-col items-center mt-8">
              <div className="flex gap-4 items-center">
                <div className="border-primary-theme border-[1px] rounded-full p-4">
                  <IoAnalyticsOutline size={30} />
                </div>
                <div>
                  <h4 className="text-[18px] font-semibold">
                    Movies, TV shows and analytics.
                  </h4>
                  <p className="text-[12px] opacity-95">
                    Explore the vast genres of movies, tv shows and analytics.
                    The insights are carefullly curated from historical data to
                    give our users the best information.
                  </p>
                </div>
              </div>
              <div className="my-2 border-[1px] opacity-40 w-[94%]" />
              <div className="flex gap-4 items-center">
                <div className="border-primary-theme border-[1px] rounded-full p-4">
                  <MdMovie size={30} />
                </div>
                <div>
                  <h4 className="text-[18px] font-semibold">
                    Latest blockbuster content.
                  </h4>
                  <p className="text-[12px] opacity-95">
                    Stay up to date with the latest blockbusters content. You
                    can get first-hand information for upcoming movies and
                    series.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST TV SHOWS SECTION */}
      <section className="best_tv_series_container h-[700px] w-[100%] object-cover relative">
        {/* Overlay */}
        <div className="h-full w-full bg-black opacity-90 absolute z-20" />

        {/* Section Content */}
        <div className="absolute h-full w-full z-40 flex flex-col items-center justify-center">
          <div className="w-[79%]">
            <div className="text-center">
              <p className="text-primary-theme text-[14px] font-semibold uppercase">
                tv series
              </p>
              <h2 className="home_section_header">World Best TV Series</h2>
            </div>

            <div className="w-full mt-8 flex gap-8">
              {upcomingMovies.map((movie, i) => (
                <ContentCard
                  key={i}
                  data={movie}
                  containerStyles="w-[25%]"
                  imageStyles="h-[320px]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIVE SHOWS SECTION */}
      <section className="bg-white text-black w-[100%] h-[520px] relative overflow-hidden">
        <div className="absolute w-[35%] left-[90px] top-[80px]">
          <div className="flex gap-3 items-center">
            <div className="w-8 h-[2px] bg-primary-theme" />
            <p className="text-[14px] font-semibold uppercase">
              online streaming
            </p>
          </div>

          <h1 className="text-3xl font-bold mb-4">
            Live Movies & TV Shows For
            <span className="block">Friends & Family</span>
          </h1>

          <p className="text-[13px] mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem amet
            natus, recusandae magni molestias possimus doloribus dolores quam
            nulla beatae quaerat veniam quis numquam quo neque? Tempore ullam
            fuga incidunt.
          </p>

          <div className="flex gap-5 items-center mb-4">
            <div className="text-[#e40487] text-[44px] font-extrabold">
              HD 4K
            </div>
            <div className="font-bold">
              <h1 className="text-[24px] mb-[-9px]">8k+</h1>
              <p className="text-[16px]">Active Customers</p>
            </div>
          </div>

          <CustomButton
            title="Watch Now"
            rightIcon={true}
            containerStyles="flex gap-3 items-center"
          />
        </div>
        <div className="header__transparent-3 bg-slate-200 z-40 w-[70%] h-full absolute right-[-60px]">
          <Image src="/live-shows.png" alt="storm trooper" fill />
        </div>
      </section>

      {/* ABOUT & CONTACT SECTION */}
      <section className="w-[100%] py-8 flex justify-center">
        <div className="flex justify-between items-start w-[75%]">
          <div className="w-[40%]">
            <h1 className="uppercase font-semibold border-b-2 inline-block border-b-primary-theme mb-6">
              About Vidmoo
            </h1>
            <p className="text-[13px] mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, non amet nihil veniam laborum vel quisquam labore sed,
              repellat eos dolorem, placeat ut harum at fugiat consequatur
              debitis! Architecto, quae!
            </p>
            {/* <div>

            </div> */}
          </div>

          <div>
            <h3 className="text-[18px] font-semibold border-b-2 inline-block border-b-primary-theme mb-6">
              Recent Posts
            </h3>
            <div>
              <div className="flex gap-4 items-center mb-6">
                <div className="w-[70px] h-[70px] bg-primary-theme" />
                <div>
                  <p className="text-[13px] font-semibold">
                    Watch English movies free
                  </p>
                  <div className="flex items-center gap-2 text-[12px]">
                    <BsFillCalendarEventFill className="text-primary-theme" />
                    13th July 2023
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-[70px] h-[70px] bg-primary-theme" />
                <div>
                  <p className="text-[13px] font-semibold">
                    Get the most out of data insights
                  </p>
                  <div className="flex items-center gap-2 text-[12px]">
                    <BsFillCalendarEventFill className="text-primary-theme" />
                    1th July 2023
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold border-b-2 inline-block border-b-primary-theme mb-6">
              Follow Us
            </h3>

            <div className="text-primary-theme text-[22px] flex gap-4">
              <BsTwitter />
              <BsInstagram />
              <BsFacebook />
              <BsLinkedin />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
