"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdMovie } from "react-icons/md";
import {
  BsFillCalendarEventFill,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
} from "react-icons/bs";
import { CustomButton, ShowCase, Header, NavBar } from "@/components";
import { dummyMovies, dummyShows } from "@/constants";
import { DummyDataProps } from "@/types";

interface ShowCaseProps {
  dummyData: DummyDataProps[];
}
const Home = () => {
  const [vWidth, setVWidth] = useState(0);

  function handleResize() {
    setVWidth(window.innerWidth);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="relative">
      <NavBar />
      {/* HEADER SECTION */}
      <Header vWidth={vWidth} />

      {/* MOVIES SECTION */}
      <ShowCase type="movies" dummyData={dummyMovies} vWidth={vWidth} />

      {/* SERVICES SECTION */}
      <section className="w-[100%] py-16 flex items-center justify-center">
        <div className="w-[85%] sm:w-[65%] flex items-center justify-center gap-9">
          <div className="hidden md:block w-[40%] h-[400px] bg-primary-theme rounded-sm" />
          <div className="w-[90%] md:w-[60%]">
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
            <div className="w-[100%] xsm:w-[80%] flex flex-col items-center mt-8">
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
      <ShowCase type="shows" dummyData={dummyShows} vWidth={vWidth} />

      {/* LIVE SHOWS SECTION */}
      <section className="bg-white text-black w-[100%] h-[520px] flex items-center justify-center relative overflow-hidden">
        <div className="sm:absolute md:flex md:flex-col md:items-center w-[80%] sm:w-[60%] md:w-[35%] left-[22%] md:left-[90px] top-[80px]">
          <div className="flex gap-3 items-center">
            <div className="w-8 h-[2px] bg-primary-theme" />
            <p className="text-[14px] font-semibold uppercase">
              online streaming
            </p>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Live Movies & TV Shows For
            <span className="block">Friends & Family</span>
          </h1>

          <p className="text-[15px] md:text-[13px] mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem amet
            natus, recusandae magni molestias possimus doloribus dolores quam
            nulla beatae quaerat veniam quis numquam quo neque? Tempore ullam
            fuga incidunt.
          </p>

          <div className="flex justify-center md:justify-start gap-5 items-center mb-4">
            <div className="text-[#e40487] text-[24px] sm:text-[44px] font-extrabold">
              HD 4K
            </div>
            <div className="font-bold">
              <h1 className="text-[16px] sm:text-[24px] mb-[-9px]">8k+</h1>
              <p className="text-[12px] sm:text-[16px]">Active Customers</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-center">
            <CustomButton
              title="Watch Now"
              rightIcon={true}
              containerStyles="flex gap-3 items-center"
            />
          </div>
        </div>
        <div className="hidden md:block header__transparent-3 bg-slate-200 z-40 w-[70%] h-full absolute right-[-60px]">
          <Image src="/live-shows.png" alt="storm trooper" fill />
        </div>
      </section>

      {/* ABOUT & CONTACT SECTION */}
      <section className="w-[100%] py-8 flex justify-center">
        <div className="flex justify-between items-start w-[85%] flex-wrap">
          <div className="w-[100%] md:w-[40%]">
            <h1 className="uppercase font-semibold border-b-2 inline-block border-b-primary-theme mb-6">
              About Vidmoo
            </h1>
            <p className="text-[13px] mb-6 mr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, non amet nihil veniam laborum vel quisquam labore sed,
              repellat eos dolorem, placeat ut harum at fugiat consequatur
              debitis! Architecto, quae!
            </p>
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
};

export default Home;
