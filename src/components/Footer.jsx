import { socialIcons } from "../constants";
import Guitar from "./Guitar";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 relative overflow-hidden">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-purple-500">
              Let's Talk
            </h2>
            <p className="text-xl sm:text-2xl mb-6">
              Have a project in mind? Let's bring it to life!
            </p>
            <a
              href="mailto:sandeepgajanan2003@gmail.com"
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 border-[1px] border-zinc-700 shadow-sm shadow-white rounded-full text-base sm:text-lg"
            >
              Contact Me
            </a>
          </div>
          <div className="flex justify-center gap-4 sm:gap-6 mt-6 md:mt-0">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-purple-500 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path d={item.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
        <Guitar />
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-base sm:text-lg mt-4">
            Crafted with ❤️ by Sandeep Gajanan Bhandari
          </p>
          <p className="text-base sm:text-lg mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
      <div className="absolute -bottom-16 -left-16 w-40 h-40 sm:w-56 sm:h-56 bg-purple-500 rounded-full opacity-10"></div>
      <div className="absolute -top-16 -right-16 w-40 h-40 sm:w-56 sm:h-56 bg-blue-500 rounded-full opacity-10"></div>
    </footer>
  );
};

export default Footer;
