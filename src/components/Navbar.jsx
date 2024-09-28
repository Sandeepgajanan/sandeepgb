import React from "react";
import { socialIcons } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="max-w-screen-lg mx-auto pt-8 px-4 max-sm:px-6 max-sm:pt-2">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-600 hover:to-purple-400 transition-all duration-300">
              SB
            </span>
          </h1>
          <div className="flex items-center justify-center gap-14 max-sm:gap-4">
            {socialIcons.map((item, index) => (
              <a
                href={item.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <span className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300"></span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative text-zinc-300 group-hover:text-white transition-colors duration-300 max-sm:h-4 max-sm:w-4"
                >
                  <path d={item.icon} />
                </svg>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-zinc-100 text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100  mb-2 max-sm:hidden">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
