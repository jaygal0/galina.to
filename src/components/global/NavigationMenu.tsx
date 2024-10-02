"use client";

import { useState, useEffect } from "react";
import { MobileSidebar } from "./MobileSidebar";
import { desktopMenu } from "@/config/navigation";
import Link from "next/link";

export default function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [isProjects, setIsProjects] = useState<boolean>(false);

  const now = "now";
  const timeline = "timeline";
  const projects = "projects";
  const contact = "contact";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
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

  console.log(isMenuOpen);

  return (
    //TODO 3: Fix breadcrumbs
    <>
      <Link href="/" className="fixed left-5 top-5 z-10">
        Logo
      </Link>

      <button className="fixed right-4 top-5 z-10" onClick={toggleMenu}>
        Menu
      </button>
      <Link href="/now" className="fixed bottom-5 left-5 z-10">
        Now
      </Link>
      <Link href="/projects" className="fixed bottom-5 right-5 z-10">
        Projects
      </Link>
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full transform items-center justify-center bg-slate-400 transition-transform duration-700 ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0"
            : "pointer-events-none -translate-y-full"
        }`}
      >
        <nav className="mt-8 flex flex-col gap-8 space-y-4 text-center">
          <button onClick={toggleMenu} className="absolute right-4 top-4">
            Close
          </button>
          {desktopMenu.map((menu, index) => {
            return (
              <Link
                key={index}
                href={menu.href}
                className="text-4xl font-bold"
                onClick={toggleMenu}
              >
                {menu.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
