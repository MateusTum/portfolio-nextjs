"use client";

import { useState } from "react";
import MenuIcon from "./menuIcon";
import navLinks from "@/app/lib/navLinks";
import styles from "./navbar.module.scss";
import { Link } from "@/navigation";

import React from "react";

const getLocaleFromPath = (url: string): string | null => {
  const pathname = new URL(url, "http://dummybase").pathname;
  const segments = pathname.split("/").filter(Boolean);
  const possibleLocale = segments[0];

  const supportedLocales = ["en", "pt"];

  if (supportedLocales.includes(possibleLocale)) {
    return possibleLocale;
  }

  return null;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setLocale] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLocale(getLocaleFromPath(window.location.href));
  }, []);

  return (
    <div className="fixed top-0 w-full bg-neutral-900/50 p-2 backdrop-blur-lg z-50">
      <div className="flex items-center max-h-[40px] overflow-hidden">
        <div className="absolute p-1 bg-black rounded-lg text-sm">
          <span>Mateus Tum Dev</span>
        </div>
        <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* Large navbar */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } hidden md:block w-full md:w-[50%] mx-auto`}
        >
          <ul className="flex flex-col md:flex-row w-full justify-around">
            {Object.keys(navLinks).map((key) => {
              return (
                <li key={key}>
                  <div className="w-max relative">
                    <Link
                      href={navLinks[key].href}
                      className={`uppercase text-lg ${styles["nav-link"]}`}
                    >
                      {currentLocale === "en" && navLinks[key].title}
                      {currentLocale === "pt" && navLinks[key].titulo}
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
        {currentLocale === "en" && (
          <div className="hidden sm:block w-max absolute right-[15px]">
            <Link locale='pt' href='/'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 512 512"
              >
                <circle cx="256" cy="256" r="256" fill="#6da544"></circle>
                <path
                  fill="#ffda44"
                  d="M256 100.174L467.478 256 256 411.826 44.522 256z"
                ></path>
                <circle cx="256" cy="256" r="89.043" fill="#f0f0f0"></circle>
                <g fill="#0052b4">
                  <path d="M211.478 250.435c-15.484 0-30.427 2.355-44.493 6.725.623 48.64 40.227 87.884 89.015 87.884 30.168 0 56.812-15.017 72.919-37.968-27.557-34.497-69.958-56.641-117.441-56.641zM343.393 273.06a89.45 89.45 0 001.651-17.06c0-49.178-39.866-89.043-89.043-89.043-36.694 0-68.194 22.201-81.826 53.899a183.693 183.693 0 0137.305-3.812c51.717-.001 98.503 21.497 131.913 56.016z"></path>
                </g>
              </svg>
            </Link>
          </div>
        )}
        {currentLocale === "pt" && (
          <div className="hidden sm:block w-max absolute right-[15px]">
            <Link locale='en' href='/'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 512 512"
              >
                <circle cx="256" cy="256" r="256" fill="#f0f0f0"></circle>
                <g fill="#d80027">
                  <path d="M244.87 256H512c0-23.106-3.08-45.49-8.819-66.783H244.87zM244.87 122.435h229.556a257.35 257.35 0 00-59.07-66.783H244.87zM256 512c60.249 0 115.626-20.824 159.356-55.652H96.644C140.374 491.176 195.751 512 256 512zM37.574 389.565h436.852a254.474 254.474 0 0028.755-66.783H8.819a254.474 254.474 0 0028.755 66.783z"></path>
                </g>
                <path
                  fill="#0052b4"
                  d="M118.584 39.978h23.329l-21.7 15.765 8.289 25.509-21.699-15.765-21.699 15.765 7.16-22.037a257.407 257.407 0 00-49.652 55.337h7.475l-13.813 10.035a255.58 255.58 0 00-6.194 10.938l6.596 20.301-12.306-8.941a253.567 253.567 0 00-8.372 19.873l7.267 22.368h26.822l-21.7 15.765 8.289 25.509-21.699-15.765-12.998 9.444A258.468 258.468 0 000 256h256V0c-50.572 0-97.715 14.67-137.416 39.978zm9.918 190.422l-21.699-15.765L85.104 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm-8.289-100.083l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822zM220.328 230.4l-21.699-15.765L176.93 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm-8.289-100.083l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822zm0-74.574l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822z"
                ></path>
              </svg>
            </Link>
          </div>
        )}
      </div>
      {/* Small navbar */}
      <nav
        className={`${isOpen ? "block" : "hidden"} w-full md:w-[50%] mx-auto`}
      >
        <ul className="flex flex-col md:flex-row w-full justify-around">
          {Object.keys(navLinks).map((key) => {
            return (
              <li key={key}>
                <div className="w-max relative my-2">
                  <Link
                    className={`uppercase text-xl ${styles["nav-link"]}`}
                    href={navLinks[key].href}
                    onClick={() => setIsOpen(false)}
                  >
                    {currentLocale === "en" && navLinks[key].title}
                    {currentLocale === "pt" && navLinks[key].titulo}
                  </Link>
                </div>
              </li>
            );
          })}
          {currentLocale === "en" && (
            <li className="w-max relative">
            <Link locale='pt' href='/'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 512 512"
                >
                  <circle cx="256" cy="256" r="256" fill="#6da544"></circle>
                  <path
                    fill="#ffda44"
                    d="M256 100.174L467.478 256 256 411.826 44.522 256z"
                  ></path>
                  <circle cx="256" cy="256" r="89.043" fill="#f0f0f0"></circle>
                  <g fill="#0052b4">
                    <path d="M211.478 250.435c-15.484 0-30.427 2.355-44.493 6.725.623 48.64 40.227 87.884 89.015 87.884 30.168 0 56.812-15.017 72.919-37.968-27.557-34.497-69.958-56.641-117.441-56.641zM343.393 273.06a89.45 89.45 0 001.651-17.06c0-49.178-39.866-89.043-89.043-89.043-36.694 0-68.194 22.201-81.826 53.899a183.693 183.693 0 0137.305-3.812c51.717-.001 98.503 21.497 131.913 56.016z"></path>
                  </g>
                </svg>
              </Link>
            </li>
          )}
          {currentLocale === "pt" && (
            <li className="w-max relative">
            <Link locale='en' href='/'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 512 512"
                >
                  <circle cx="256" cy="256" r="256" fill="#f0f0f0"></circle>
                  <g fill="#d80027">
                    <path d="M244.87 256H512c0-23.106-3.08-45.49-8.819-66.783H244.87zM244.87 122.435h229.556a257.35 257.35 0 00-59.07-66.783H244.87zM256 512c60.249 0 115.626-20.824 159.356-55.652H96.644C140.374 491.176 195.751 512 256 512zM37.574 389.565h436.852a254.474 254.474 0 0028.755-66.783H8.819a254.474 254.474 0 0028.755 66.783z"></path>
                  </g>
                  <path
                    fill="#0052b4"
                    d="M118.584 39.978h23.329l-21.7 15.765 8.289 25.509-21.699-15.765-21.699 15.765 7.16-22.037a257.407 257.407 0 00-49.652 55.337h7.475l-13.813 10.035a255.58 255.58 0 00-6.194 10.938l6.596 20.301-12.306-8.941a253.567 253.567 0 00-8.372 19.873l7.267 22.368h26.822l-21.7 15.765 8.289 25.509-21.699-15.765-12.998 9.444A258.468 258.468 0 000 256h256V0c-50.572 0-97.715 14.67-137.416 39.978zm9.918 190.422l-21.699-15.765L85.104 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm-8.289-100.083l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822zM220.328 230.4l-21.699-15.765L176.93 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm-8.289-100.083l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822zm0-74.574l8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822z"
                  ></path>
                </svg>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
