"use client";
import { useState } from "react";

import { MdMenu } from "react-icons/md";
import { BsPlusSquareFill } from "react-icons/bs";
import { sideBarItems } from "@/constants";
import SideBarIcons from "./SideBarIcons";
import Link from "next/link";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState("movies");
  return (
    <section className="h-[100vh] w-[15%] border-r-[#403f3f] border-r-[1px] fixed flex flex-col items-center">
      <div className="w-full h-[50px] border-b-[#403f3f] mb-6 border-b-[1px] flex items-center justify-center gap-3">
        <MdMenu />
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
