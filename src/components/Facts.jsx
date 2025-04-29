"use client";

import React, { useRef, useState, useEffect } from "react";
import Heading from "./sub/Heading";
import Image from "next/image";
import { funFacts, arrowIcons } from "@/assests";
import { animate, motion } from "framer-motion";

const Facts = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(false);
  const prevIndex = useRef(0);
  const slides = useRef([]);
  const rightClickHandler = () => {
    animate(slides.current[index], { x: 0 }, { delay: 0.3 });
    animate(slides.current[prevIndex.current], {
      scale: index == 0 ? 1 : 0.4,
      rotate: index == 0 ? 0 : index % 2 == 0 ? 10 : -10,
    });
  };

  const leftClickHandler = () => {
    animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 });
    animate(slides.current[prevIndex.current], { x: "100%" });
  };

  useEffect(() => {
    direction ? leftClickHandler() : rightClickHandler();
    prevIndex.current = index;
  }, [index]);

  return (
    <div id="facts" className="my-20">
      <div className="flex justify-center">
        <Heading text={"Fun Facts"} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative w-[800px] lg:w-[600] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px] flex items-center justify-center overflow-hidden"
        >
          {funFacts.map((fact, i) => (
            <motion.div
              initial={{ x: "100%" }}
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl dark:bg-zinc-700 transition-colors"
              ref={(el) => slides.current.push(el)}
            >
              <Image
                src={fact.image}
                alt="facts Image"
                width={150}
                height={150}
                className="w-[250px] aspect-square rounded-full border border-yellow-500 p-1 object-contain"
              />
              <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600">
                {fact.fact}
              </h1>
              <p className="text-lg md:text-sm text-center font-extralight tracking-wide text-gray-600 first-letter:pl-2 dark:text-white transition-colors">
                {fact.comment}
              </p>
              {/* <div className="flex flex-col items-center justify-center gap-y-2">
                <span className="text-lg font-light text-yellow-600 mr-3">
                  4.5
                </span>
                <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                  <span>Stars</span>
                </div>
              </div> */}
            </motion.div>
          ))}
        </motion.div>
        <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
          <button
            className={`${
              index === 0
                ? "opacity-30 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }  hover:scale-150 transition-all`}
            onClick={() => {
              setDirection(true);
              setIndex(index - 1);
            }}
          >
            {arrowIcons[0]}
          </button>
          <button
            className={`${
              index === funFacts.length - 1
                ? "opacity-30 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }  hover:scale-150 transition-all`}
            onClick={() => {
              setDirection(false);
              setIndex(index + 1);
            }}
          >
            {arrowIcons[1]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Facts;
