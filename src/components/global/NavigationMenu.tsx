"use client";

import { useState, useEffect } from "react";
import { desktopMenu, mobileMenu } from "@/config/navigation";
import Link from "next/link";
import Image from "next/image";

export default function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // State to store whether to show mobile or desktop menu
  const [isMobile, setIsMobile] = useState(false);

  // Update state based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Check if window width is less than 768px (Tailwind's md breakpoint)
      setIsMobile(window.innerWidth < 1024);
    };

    // Initialize the size check on component mount
    handleResize();

    // Add event listener to listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    //TODO 3: Fix breadcrumbs
    <>
      <Link
        href="/"
        className="fixed left-5 top-5 z-10 font-sans text-2xl font-bold"
      >
        {/* Galina.to logo */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 148 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-500 hover:scale-110" // Add hover effects here
        >
          <g clipPath="url(#clip0_2522_4563)">
            <path
              d="M147.452 64.7937C147.17 62.4442 145.228 60.6689 142.904 60.6689H134.524H129.342H125.506C123.797 60.6689 122.411 62.0816 122.411 63.8229V73.674C122.411 75.8988 124.179 77.7005 126.362 77.7005C128.749 77.7005 130.617 79.8498 130.276 82.2596C128.686 93.5272 123.868 104.1 116.303 112.648C113.397 115.93 110.165 118.835 106.674 121.328C103.646 123.488 99.4835 121.271 99.4835 117.505V30.4925C99.4835 26.7266 103.646 24.5094 106.674 26.6699C110.165 29.1629 113.397 32.0676 116.303 35.35C118.049 37.3218 119.646 39.403 121.092 41.5749C121.948 42.8592 123.36 43.6335 124.88 43.6335H134.301C137.8 43.6335 140.02 39.777 138.282 36.6834C127.715 17.8803 109.406 4.17267 87.7787 0.0781353C84.9618 -0.454456 82.3525 1.73635 82.3525 4.65616V143.341C82.3525 146.269 84.9693 148.452 87.7935 147.916C122.055 141.419 147.996 110.797 147.996 73.9988C148 70.8826 147.815 67.8117 147.452 64.7937Z"
              fill="#28786D"
            />
            <path
              d="M0.552253 64.7917C0.833939 62.4423 2.77609 60.6669 5.1 60.6669H13.4802H18.6617H22.4978C24.2065 60.6669 25.5926 62.0796 25.5926 63.8209V73.672C25.5926 75.8968 23.8247 77.6985 21.6416 77.6985C19.2547 77.6985 17.3867 79.8478 17.7277 82.2577C19.3177 93.5252 24.136 104.098 31.7008 112.646C34.6066 115.928 37.8386 118.833 41.33 121.326C44.3581 123.486 48.5204 121.269 48.5204 117.503V30.4906C48.5204 26.7246 44.3581 24.5074 41.33 26.668C37.8386 29.161 34.6066 32.0657 31.7008 35.3481C29.9551 37.3198 28.3576 39.4011 26.9121 41.573C26.0559 42.8572 24.6438 43.6316 23.1242 43.6316H13.6951C10.1963 43.6316 7.97616 39.775 9.71446 36.6815C20.2814 17.8783 38.591 4.17071 60.2178 0.0761821C63.0346 -0.456409 65.6439 1.73439 65.6439 4.6542V143.343C65.6439 146.271 63.0272 148.454 60.2029 147.917C25.941 141.421 0 110.799 0 73.9968C0 70.8806 0.189026 67.8097 0.552253 64.7917Z"
              fill="#28786D"
            />
          </g>
          <defs>
            <clipPath id="clip0_2522_4563">
              <rect width="148" height="148" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <button
        className="fixed right-4 top-5 z-10 font-sans text-2xl font-bold"
        onClick={toggleMenu}
      >
        Menu
      </button>
      <Link
        href="/now"
        className="fixed bottom-5 left-5 z-10 hidden font-sans text-2xl font-bold lg:block"
      >
        Now
      </Link>
      <Link
        href="/projects"
        className="fixed bottom-5 right-5 z-10 hidden font-sans text-2xl font-bold lg:block"
      >
        Projects
      </Link>
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full transform items-center justify-center bg-bg-menu transition-transform duration-700 ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0"
            : "pointer-events-none -translate-y-full"
        }`}
      >
        <nav className="mt-8 flex flex-col gap-10 space-y-4 text-center">
          <button onClick={toggleMenu} className="absolute right-4 top-4">
            Close
          </button>
          {/* Conditionally map desktopMenu or mobileMenu based on isMobile */}
          {(isMobile ? mobileMenu : desktopMenu).map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              className="text-4xl font-bold md:text-5xl"
              onClick={toggleMenu}
            >
              {menu.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
