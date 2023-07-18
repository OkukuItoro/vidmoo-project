"use client";
import { useState, useEffect } from "react";

import { MdClose, MdMenu } from "react-icons/md";
import { BsPlusSquareFill } from "react-icons/bs";
import { sideBarItems } from "@/constants";
import SideBarIcons from "./SideBarIcons";
import Link from "next/link";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState("movies");
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

  return vWidth < 950 ? (
    <>
      <div className="w-[20%] h-[50px] mb-6 fixed flex items-center justify-center gap-8">
        <h1>Vidmoo</h1>
        <MdMenu size={22} onClick={() => setToggleSideBar(true)} />
      </div>

      <section
        className={`${
          !toggleSideBar && "hidden"
        } h-[100%] w-[20%] border-r-[#403f3f] bg-black border-r-[1px] fixed z-40 flex flex-col items-center`}
      >
        <div className="w-full h-[50px] border-b-[#403f3f] mb-6 border-b-[1px] flex items-center justify-center gap-8">
          <h1>Vidmoo</h1>
          <MdClose size={22} onClick={() => setToggleSideBar(false)} />
        </div>
        <div className="w-[80%] flex flex-col items-center">
          {sideBarItems.map((item, i) => (
            <div key={i} className="w-[90%] border-b-[#1c1c1c] py-4 mb-6">
              <h3 className="uppercase text-[#656565] mb-2 text-[12px] font-bold flex gap-3 items-center">
                <BsPlusSquareFill /> {item.name}
              </h3>
              <div className="flex flex-col gap-3">
                {item.links.map((link, i) => (
                  <Link href={`/app/${link}`}>
                    <div
                      onClick={() => setActiveLink(link)}
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
  ) : (
    <section
      className={`h-[100%] w-[20%] border-r-[#403f3f] border-r-[1px] fixed z-40 flex flex-col items-center`}
    >
      <div className="w-full h-[50px] border-b-[#403f3f] mb-6 border-b-[1px] flex items-center justify-center gap-8">
        <h1>Vidmoo</h1>
      </div>
      <div className="w-[80%] flex flex-col items-center">
        {sideBarItems.map((item, i) => (
          <div key={i} className="w-[90%] border-b-[#1c1c1c] py-4 mb-6">
            <h3 className="uppercase text-[#656565] mb-2 text-[12px] font-bold flex gap-3 items-center">
              <BsPlusSquareFill /> {item.name}
            </h3>
            <div className="flex flex-col gap-3">
              {item.links.map((link, i) => (
                <Link href={`/app/${link}`}>
                  <div
                    onClick={() => setActiveLink(link)}
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

      {/* <BiLogOut />
        <p className="ml-3">Logout</p>
      </Link> */}
    </section>
  );
};

export default SideBar;
