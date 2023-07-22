"use client";
import { useState, useEffect } from "react";

import { MdClose, MdMenu } from "react-icons/md";
import { BsPlusSquareFill } from "react-icons/bs";
import { sideBarItems } from "@/constants";
import SideBarIcons from "./SideBarIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathName = usePathname();
  const path = pathName.split("/");
  const [activeLink, setActiveLink] = useState(path[2]);
  const [vWidth, setVWidth] = useState(0);
  const [toggleSideBar, setToggleSideBar] = useState(false);

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
    <>
      <div
        className={`${toggleSideBar && vWidth < 950 && "hidden"} md:hidden
       w-[50%] h-[50px] mb-6 ml-6 fixed flex items-center`}
      >
        <MdMenu
          size={22}
          className="cursor-pointer"
          onClick={() => setToggleSideBar(true)}
        />
        <h1 className="ml-auto">Vidmoo</h1>
      </div>

      <section
        className={`${
          !toggleSideBar && vWidth < 950 && "hidden"
        } h-[100%] w-[50%] sm:w-[20%] border-r-[#403f3f] bg-black border-r-[1px] fixed z-40 flex flex-col items-center`}
      >
        <div className="w-full h-[50px] border-b-[#403f3f] mb-6 border-b-[1px] flex items-center justify-center gap-8">
          <Link href="/">
            <h1>Vidmoo</h1>
          </Link>
          {vWidth < 950 && (
            <MdClose
              size={22}
              className="cursor-pointer"
              onClick={() => setToggleSideBar(false)}
            />
          )}
        </div>
        <div className="w-[80%] flex flex-col items-center">
          {sideBarItems.map((item, i) => (
            <div key={i} className="w-[90%] border-b-[#1c1c1c] py-4 mb-6">
              <h3 className="uppercase text-[#656565] mb-2 text-[12px] font-bold flex gap-3 items-center">
                <BsPlusSquareFill /> {item.name}
              </h3>
              <div className="flex flex-col gap-3">
                {item.links.map((link, i) => (
                  <Link key={i} href={`/app/${link}`}>
                    <div
                      onClick={() => {
                        setActiveLink(link);
                        setToggleSideBar(false);
                      }}
                      className={` ${
                        activeLink == link && "text-primary-theme font-semibold"
                      } hover:text-primary-theme flex gap-3 items-center capitalize`}
                    >
                      <SideBarIcons icon={link} /> {link}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SideBar;
