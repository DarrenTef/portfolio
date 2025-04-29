"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import Achievements from "./sub/Achievements";
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/assests";

const About = () => {
  return (
    <div id="about" className="min-h-screen flex-col items-center justify-center">
      <div className="flex justify-center">
        <Heading text={"About Me"} />
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-y-10 px-4">
        <Image
          src={"/about.png"}
          alt="About Image"
          width={400}
          height={400}
          //   className="w-[300px] lg:w-[200px] md:hidden"
          className="hidden md:block w-[300px] lg:w-[200px]"
        />
        <div className="relative w-full max-w-[800px] md:max-w-[90%] sm-max-w-full rounded-xl bg-zinc-100 p-5 text-justify dark:bg-zinc-700 transition-colors">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 dark:text-zing-700 transition-colors">
            {arrowLeftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px] dark:text-white">
            {aboutText}
          </p>
          <a
            href="/DL_Resume.pdf"
            download=""
            className="w-max flex items-center gap-x-2 mt-6 rounded-full boarder boarder-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
          >
            <span>Download Resume</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((item, i) => (
          <Achievements key={i} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements>
        ))}
      </div>
    </div>
  );
};

export default About;
