import { useState } from "react";
import { mediaData } from "@/constants";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GenreProps } from "@/types";

interface CustomDropDownProps {
  type: string;
  media?: string;
  setMedia?: (media: string) => void;
  genre?: GenreProps;
  setGenre?: (genre: GenreProps) => void;
  whichGenre?: GenreProps[];
}

const CustomDropDown = ({
  type,
  setMedia,
  media,
  genre,
  setGenre,
  whichGenre,
}: CustomDropDownProps) => {
  const [dropDown, setDropDown] = useState(false);
  const [activeOption, setActiveOption] = useState("");
  const [secondActiveOption, setSecondActiveOption] = useState("");

  return (
    <>
      <div className="bg-black flex items-center justify-between rounded-full p-4 h-[27px] w-full border-[1px] text-white border-[#303030] ">
        {type == "media" ? media : genre?.label}
        <div className="cursor-pointer">
          {dropDown ? (
            <IoIosArrowUp color="white" onClick={() => setDropDown(false)} />
          ) : (
            <IoIosArrowDown color="white" onClick={() => setDropDown(true)} />
          )}
        </div>
      </div>
      {dropDown && (
        <div
          onClick={() => setDropDown(false)}
          className={`${
            type == "genres" && "h-[300px] overflow-y-scroll"
          } w-full rounded-lg p-4 absolute top-11 border-[#303030] bg-[white] text-black`}
        >
          {type == "media" &&
            setMedia &&
            mediaData.map((option, i) => (
              <p
                key={i}
                onClick={() => {
                  setMedia(option);
                  setActiveOption(option);
                }}
                className={`hover:text-primary-theme cursor-pointer ${
                  activeOption == option && "font-semibold text-primary-theme"
                }`}
              >
                {option}
              </p>
            ))}{" "}
          {type == "genres" &&
            setGenre &&
            whichGenre?.map((item, i) => (
              <p
                key={i}
                className={`hover:text-primary-theme cursor-pointer ${
                  secondActiveOption == item.label &&
                  "font-semibold text-primary-theme"
                }`}
                onClick={() => {
                  setGenre(item);
                  setSecondActiveOption(item.label);
                }}
              >
                {item.label}
              </p>
            ))}
        </div>
      )}
    </>
  );
};

export default CustomDropDown;
