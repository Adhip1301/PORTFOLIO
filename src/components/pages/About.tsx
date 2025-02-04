"use client";
import Connections from "../Connections";
import Image from "next/image";
import DEV from "../../../public/SE.png";
import { useEffect, useState } from "react";
import { getUniqueLanguageCombination } from "@/lib/utils";

const About = () => {
  const [nameCombination, setNameCombination] = useState({
    adhip: { word: "Adhip", language: "English" },
    bhattacharya: { word: "Bhattacharya", language: "English" },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const { randomAdhip, randomBhattacharya } =
        getUniqueLanguageCombination();
      setNameCombination({
        adhip: randomAdhip,
        bhattacharya: randomBhattacharya,
      });
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="About" className="flex flex-col">
      <div className="grid xl:grid-cols-2 gap-2 mt-8 text-center lg:text-left">
        <div className="flex flex-col gap-12 mx-8">
          <div className="flex flex-col gap-4">
            <span className="text-xl text-primary">People call me:</span>
            <span className="text-3xl md:text-5xl font-semibold ">
              {nameCombination.adhip.word}{" "}
              {nameCombination.bhattacharya.word}
            </span>
            <span className="text-xl text-primary">A small into:</span>
            <span className="text-base font-semibold">
            Hey there! I&apos;m a Full Stack Developer passionate about crafting incredible web applications. I specialize in front-end technologies like HTML, CSS, and React, and I'm equally skilled in back-end development with Java, Python, and databases like MongoDB and PostgreSQL. I also explore Web 3.0 and enjoy staying updated with cutting-edge tech advancements. Let&apos;s create something extraordinary together!
            </span>
          </div>
          <span className="text-xl text-primary text-center">
            To interact with me:
          </span>
          <Connections />
          <a
            href="/AdhipBhattacharya_resume.pdf"
            download="AdhipBhattacharya_resume"
            className="bg-primary hover:bg-border font-semibold text-xl text-primary-foreground hover:text-primary text-center px-4 py-2 rounded-lg"
          >
            Here&apos;s my Resume
          </a>
        </div>
        <div className="hidden xl:flex justify-center">
          <Image
            src={DEV}
            alt="Developer"
            className="h-full w-auto items-center"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
