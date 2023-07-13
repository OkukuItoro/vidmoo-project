import { BsFillStarFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { MdHighQuality } from "react-icons/md";
import { ContentDataProps } from "@/types";

interface ContentCardProps {
  data: ContentDataProps;
  containerStyles: string;
  imageStyles: string;
}

const ContentCard = ({
  data,
  containerStyles,
  imageStyles,
}: ContentCardProps) => {
  const { title, year, duration, reviews } = data;
  return (
    <div className={containerStyles}>
      <div className={`w-full ${imageStyles} bg-primary-theme rounded-sm`} />
      <div className="mt-4 text-[14px]">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-primary-theme">{year}</p>
        </div>
        <div className="flex justify-between items-end">
          <MdHighQuality size={20} className="text-primary-theme" />

          <div className="flex gap-4 items-center mt-2">
            <div className="flex items-center gap-2">
              <BiTimeFive className="text-primary-theme" />
              {duration}
            </div>
            <div className="flex items-center gap-2">
              <BsFillStarFill className="text-primary-theme" />
              {reviews}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
