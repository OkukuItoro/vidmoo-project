import { IconContext } from "react-icons";
import { MdMovie, MdWatchLater, MdOutlineHistory } from "react-icons/md";
import { CgInsights } from "react-icons/cg";
import { PiTelevisionBold } from "react-icons/pi";
import { BiLogOut, BiCategory, BiSearch } from "react-icons/bi";

interface SideBarIconProp {
  icon: string;
}

const SideBarIcons = ({ icon }: SideBarIconProp) => {
  const getIconComponent = (icon: string) => {
    switch (icon) {
      case "movies":
        return <MdMovie />;
      case "tv-shows":
        return <PiTelevisionBold />;
      case "insights":
        return <CgInsights />;
      case "genres":
        return <BiCategory />;
      case "search":
        return <BiSearch />;
      case "watch-later":
        return <MdWatchLater />;
      case "history":
        return <MdOutlineHistory />;
      default:
        return;
    }
  };

  return (
    <div>
      <IconContext.Provider value={{ size: "18px" }}>
        {getIconComponent(icon)}
      </IconContext.Provider>
    </div>
  );
};

export default SideBarIcons;
