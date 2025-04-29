"use client";

import Heading from "./sub/Heading";
import Image from "next/image";
import { experienceData } from "@/assests";
import { arrowLeftIcon } from "@/assests";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const date = new Date().getFullYear();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  });
  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

  return (
    <div id="experience" className="relative py-20">
      <div className="flex justify-center">
        <Heading text={"Experience & Education"} />
      </div>
      <div className="relative py-20">
        <Image
          src="/education.png"
          alt="Illustration showing experience and education"
          height={400}
          width={400}
          className="absolute -top-4 right-0 opacity-90 hidden xl:block"
        />
      </div>
      <div
        ref={containerRef}
        className="relative w-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
      >
        {experienceData.map((data, i) => (
          <div
            key={`id-${i}`}
            className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative z-10 xl:translate-x-0 xl:self-auto${
              i % 2 == 0
                ? "-left-[400px] xl:-left-[300px] lg:-left-0"
                : "left-[400px] xl:left-[300px] lg:left-0"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
              viewport={{ once: true }}
              className=" relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm dark:bg-zinc-700 transition-colors z-20"
            >
              <h1 className="text-xl sm:text-lg font-bold text-gray-700 dark:text-white">
                {data.title}
              </h1>
              <p className="text-gray-800 dark:text-gray-100">
                <span className="block font-light">Education:</span>
                <span className="block pl-2 font-extralight">
                  {data.education}
                </span>
              </p>
              <div className="text-gray-800 dark:text-gray-200 transition-colors">
                <span className="font-light">Experience:</span>
                <ul className="pl-2">
                  {data.experience.map((exp, j) => (
                    <li key={j} className="my-1 font-extralight">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
              {/* The 2020 Div and Icon span are modified on my own */}
              <span
                className={`absolute top-20 text-red-300 -translate-y-1/2 hidden xl:block ${
                  i % 2 == 0 ? "left-full rotate-180" : "right-full"
                }`}
              >
                {arrowLeftIcon}
              </span>
            </motion.div>
            <div
              className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square
                hidden xl:grid place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-white ${
                  i % 2 === 0
                    ? "left-[calc(100%+100px)] xl:left-[106.5%]"
                    : "right-[calc(100%+100px)] xl:right-[106.5%]"
                }`}
            >
              {date - experienceData.length + i + 1}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY, height: "calc(100% - 30px)" }}
          className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gray-300 origin-top z-0 
    h-[200px] sm:h-[300px] md:h-[350px] lg:h-[600px]"
        ></motion.div>
      </div>
    </div>
  );
};

export default Experience;
