"use client";
import { BiSearch } from "react-icons/bi";

import { SideBar } from "@/components";
import { usePathname } from "next/navigation";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const sideBarNeeded = ["/app/sign-up"];
  const noSideBar = sideBarNeeded.includes(pathName);

  return noSideBar ? (
    <main>{children}</main>
  ) : (
    <main className="w-[100%] h-[100%] flex flex-row relative">
      {sideBarNeeded && <SideBar />}
      <section className="w-[85%] ml-auto flex flex-col items-center justify-start">
        <>
          <div className="w-full px-11 h-[50px] border-b-[#403f3f] border-b-[1px] flex items-center gap-4 justify-end">
            {/* Search Input */}
            <form className="hidden lg:flex lg:flex-row items-center rounded-[6px] border-[1px] bg-transparent h-[35px] w-[55%] lg:w-[417px] p-4">
              <BiSearch />
              <input
                className="ml-3 w-[80%] bg-inherit p-2 outline-none"
                type="text"
                placeholder="Search for anything..."
                // value={search}
              />
            </form>

            <div className="w-[35px] h-[35px] rounded-full bg-primary-theme" />
          </div>
          {children}
        </>
      </section>
    </main>
  );
}
