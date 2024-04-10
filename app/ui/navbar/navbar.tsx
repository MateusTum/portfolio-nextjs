'use client';

import { useState } from 'react';
import navLinks from "@/app/lib/navLinks";
import styles from './navbar.module.scss';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full bg-neutral-900/50 p-2 backdrop-blur-lg z-50">
      <div className="flex items-center max-h-[40px] overflow-hidden">
        <div className="absolute p-1 bg-black rounded-lg text-sm">
          <span>Portfolio v2.0</span>
        </div>
        <button
          className="mx-1 ms-auto text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
        {/* Large navbar */}
        <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } hidden md:block w-full md:w-[50%] mx-auto`}
      >
        <ul className="flex flex-col md:flex-row w-full justify-around">
          {Object.keys(navLinks).map((key) => {
            return (
              <li key={key}>
                <div className="w-max relative">
                  <Link className={`uppercase text-lg ${styles["nav-link"]}`} href={`/#${key}`}>
                    {navLinks[key].title}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
      </div>
      {/* Small navbar */}
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full md:w-[50%] mx-auto`}
      >
        <ul className="flex flex-col md:flex-row w-full justify-around">
          {Object.keys(navLinks).map((key) => {
            return (
              <li key={key}>
                <div className="w-max relative my-2">
                  <a className={`uppercase text-xl ${styles["nav-link"]}`} href={`#${key}`}>
                    {navLinks[key].title}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
