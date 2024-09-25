"use client";

import * as React from "react";
import { MobileSidebar } from "./MobileSidebar";
import { desktopMenu } from "@/config/navigation";
import Link from "next/link";

export default function NavigationMenu() {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  React.useEffect(() => {
    const closeMobileMenuOnClickOutside = (event: MouseEvent) => {
      if (showMobileMenu) {
        setShowMobileMenu(false);
      }
    };

    //    document.addEventListener("click", closeMobileMenuOnClickOutside);

    return () => {
      document.removeEventListener("click", closeMobileMenuOnClickOutside);
    };
  }, [showMobileMenu]);

  return (
    <div className="fixed z-50 flex flex-col items-center justify-center gap-8 bg-slate-400 p-4">
      {showMobileMenu && <MobileSidebar state={toggleMobileMenu} />}
      {showMobileMenu && (
        <svg
          onClick={toggleMobileMenu}
          className="md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 17h18M3 12h18M3 7h18"
          />
        </svg>
      )}
      {desktopMenu.map((menu, index) => {
        return (
          <Link key={index} href={menu.href} className="text-4xl font-bold">
            {menu.title}
          </Link>
        );
      })}
    </div>
  );
}
