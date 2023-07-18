import { BsFillStarFill } from "react-icons/bs";
import { RiThumbUpFill } from "react-icons/ri";
import { MdHighQuality } from "react-icons/md";
import Image from "next/image";
import { DummyDataProps } from "@/types";

interface DummyCardProps {
  data: DummyDataProps;
  containerStyles: string;
  imageStyles: string;
}

const DummyCard = ({ data, containerStyles, imageStyles }: DummyCardProps) => {
  return (
    <div className={containerStyles}>
      <Image
        height={320}
        width={342}
        className={`w-full ${imageStyles} rounded-sm`}
        src={data.img}
        alt={data.title}
      />
      <div className="mt-4 text-[14px]">
        <h3 className="font-semibold">{data.title}</h3>
        <div className="flex justify-between items-end">
          <MdHighQuality size={20} className="text-primary-theme" />

          <div className="flex gap-4 items-center mt-2">
            <div className="flex items-center gap-2">
              <RiThumbUpFill className="text-primary-theme" />
              {data.vote_count}
            </div>
            <div className="flex items-center gap-2">
              <BsFillStarFill className="text-primary-theme" />
              {data.vote_average}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyCard;
