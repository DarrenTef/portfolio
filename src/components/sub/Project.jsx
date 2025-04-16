"use client";
import Image from "next/image";
import Heading from "./Heading";

const Project = () => {
  return (
    <div className="relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer">
      <Image
        src={"/projects/image-1.jpg"}
        alt="Project Image"
        width={400}
        height={400}
        className="rounded-lg opacity-70"
      />
      <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/95 rounded-lg hidden">
        <h2 className="text-lg font-bold tracking-wide text-gray-500">
          SparkleGrove.com
        </h2>
        <p className="text-justify text-gray-500 first-letter:pl-2">
          Description
        </p>
      </div>
    </div>
  );
};

export default Project;
