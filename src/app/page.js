"use client"

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Facts from "@/components/Facts";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";
import { useEffect, useState, useRef } from "react";
import Toggle from "@/components/sub/Toggle";
import Load from "@/components/sub/Load";

export default function Home() {
  const [id, setId] = useState(0);
  const compsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    const compsArr = Array.from(compsRef.current.children)
    compsArr.forEach((comp) => {
      observer.observe(comp)
    })
  }, []);
  return (
    <>
      <Load />
      <Toggle>
        <NavBar id={id} />
        <div className="w-min" ref={compsRef}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Facts />
          <Projects />
          <Services />
          <Contact />
        </div>
      </Toggle>
    </>
  );
}
