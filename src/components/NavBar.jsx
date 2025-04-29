"use client";
import { navbarData, copyRightIcon } from "@/assests";

const NavBar = ({ id }) => {
  return (
    <div className="hidden sm:flex w-[70px] h-full fixed left-0 top-0 flex-col justify-between border-r border-gray-200 px-4 xl:py-6 py-10 z-10">
      <a href="/#home">
        <span className="text-3xl font-semibold text-red-400">D</span>.
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold dark:text-white transition-colors">
          Lee
        </span>
      </a>
      <div className="flex flex-col gap-y-3 xl:gap-y1 sm:gap-y-2">
        {navbarData.map((item, i) => (
          <a
            key={i}
            href={`/#${item.id}`}
            className="group flex flex-col items-center gap-y-2"
          >
            <span
              className={`text-2xl group-hover:scale-125 xl:group-hover:scale-115 transition-all ${
                item.id == id
                  ? "text-red-500 scale-110 xl:scale-100"
                  : "text-yellow-600 scale-100 xl:scale-90"
              }`}
            >
              {item.icon}
            </span>
            <span
              className={`text-[10px] tracking-wide opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 text-center dark:text-white transition-colors ${item.id == id && "-translate-x-0 opacity-100"}`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <p className="flex items-center justify-center text-[13px] text-gray-500 mt-6">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90  origin-bottom-left tracking-wider">
          {copyRightIcon} 2020 - {new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
};

export default NavBar;
