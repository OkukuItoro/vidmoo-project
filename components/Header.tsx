import { HiPlayPause } from "react-icons/hi2";
import { BsInfinity } from "react-icons/bs";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

interface HeaderProps {
  vWidth: number;
}

const Header = ({ vWidth }: HeaderProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/app/movies");
  };

  return (
    <header className="w-full flex justify-center items-center h-[70vh] md:h-[100vh] relative">
      {/* Hero Text */}
      <div className=" md:absolute w-[85%] sm:w-[65%] flex flex-col items-center left-[55%] sm:left-[84px] z-40 top-[40%]">
        <h1 className="font-extrabold mb-8 text-center text-2xl sm:text-4xl w-[100%] sm:w-[80%] md:w-[60%] md:text-start">
          Unlimited <span className="text-[#E4D804]">Movies</span>, TV Shows,
          Amazing Insights & Analytics.
        </h1>
        <div className="flex items-center md:items-start gap-4 mb-8">
          <div className="flex gap-2">
            <div className="bg-white px-3 text-black font-semibold rounded-sm">
              HD
            </div>
            <div className="bg-white px-3 text-black font-semibold rounded-sm">
              4K
            </div>
          </div>
          <div className="flex gap-2">
            <div className="border-[1px] px-3 font-semibold rounded-sm">PG</div>
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
          handleClick={handleClick}
        />
      </div>
      {vWidth > 950 ? (
        <>
          <Image src="/hero-1.jpg" fill alt="hero 1" className="object-cover" />
          <div className="header__transparent-2 w-[50%] h-[100%] absolute left-0 top-0">
            <Image
              src="/hero-2.jpg"
              fill
              alt="hero-2"
              className="object-cover"
            />
          </div>
          <div className="header__transparent absolute left-0 bg-black opacity-80 z-20 w-[70%] h-[100%]" />
        </>
      ) : (
        <div className="w-[100%] h-[100%] absolute left-0 top-0">
          <Image src="/hero-2.jpg" fill alt="hero-2" className="object-cover" />
          <div className="bg-black opacity-80 z-20 w-[100%] h-[100%]" />
        </div>
      )}
    </header>
  );
};

export default Header;
