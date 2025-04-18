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
    <div className="relative py-20 px-96">
      <div className="flex justify-center">
        <Heading text={"Experience & Education"} />
      </div>
      <div className="relative w-[300px] h-[300px]">
        <Image
          src="/education.png"
          alt="Illustration showing experience and education"
          fill
          className="object-contain"
        />
      </div>
      <div
        ref={containerRef}
        className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
      >
        {experienceData.map((data, i) => (
          <div
            key={`id-${i}`}
            className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative z-10 ${
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
              className=" relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm"
            >
              <h1 className="text-xl sm:text-lg font-bold text-gray-700">
                {data.title}
              </h1>
              <p className="text-gray-800">
                <span className="block font-light">Education:</span>
                <span className="block pl-2 font-extralight">
                  {data.education}
                </span>
              </p>
              <div className="text-gray-800">
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
                className={`absolute top-20 text-red-300 -translate-y-1/2 ${
                  i % 2 == 0 ? "left-full rotate-180" : "right-full"
                }`}
              >
                {arrowLeftIcon}
              </span>
            </motion.div>
            <div
              className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square
                 grid place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-white ${
                   i % 2 === 0
                     ? "left-[calc(100%+100px)] lg:left-[106.5%]"
                     : "right-[calc(100%+100px)] lg:right-[106.5%]"
                 }`}
            >
              {date - experienceData.length + i + 1}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
          className="absolute top-35 w-1 h-full rounded-full bg-gray-300 origin-top"
        ></motion.div>
      </div>
    </div>
  );
};

export default Experience;
