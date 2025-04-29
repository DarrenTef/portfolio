"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import { motion } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }
    const hiddenFieldValue = form.current["hiddenField"].value;

    if (hiddenFieldValue) {
      console.log("Spam detected!");
      return;
    }
    console.log("Form is safe");
  };

  return (
    <div id="contact" className="h-auto lg:h-screen py-40 lg:py-20">
      <div className="flex justify-center">
        <Heading text={"Get in touch"} />
      </div>
      <div className="w-full h-full my-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-x-0 lg:gap-x-20 gap-y-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/contact.gif"}
            alt="Contact Image"
            width={400}
            height={400}
            className="w-[400px] h-[300px] rounded-md opacity-80"
          />
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          ref={form}
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-full md:w-[500px] lg:w-[600px] flex flex-col gap-3"
        >
          <input
            className="hidden"
            name="hiddenField"
            tabIndex={-1}
            autoComplete="off"
            type="text"
          />
          <div className="w-full flex flex-col sm:flex-row gap-3">
            <input
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Name"
              type="text"
            />
            <input
              type="email"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Subject"
          />
          <textarea
            className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Write Me..."
          ></textarea>

          <input
            className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm font-light tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer"
            value={"Send Message"}
            type="submit"
          />
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
