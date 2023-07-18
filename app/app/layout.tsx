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
      <section className="w-[100%] md:w-[80%] ml-auto flex flex-col items-center justify-start">
        {children}
      </section>
    </main>
  );
}
