"use client";
import Marquee from "react-fast-marquee";
import { SKILLS } from "@/lib/const";
import Image from "next/image";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="w-full flex flex-col gap-10 justify-center items-center pt-10"
    >
      <span className="mt-20 text-3xl md:text-5xl font-semibold text-center">
        Skills
      </span>

      <Marquee
        gradient={false}
        speed={130} // Adjust the speed for a slow marquee
        className="mt-10"
      >
        <div className="flex gap-10">
          {SKILLS.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-40 h-40"
            >
              <div className="h-16 w-16">
                <Image
                  src={data.img}
                  alt={data.alt}
                  width={64}
                  height={64}
                  className="h-full w-auto rounded-lg"
                />
              </div>
              <p className="text-foreground text-sm sm:text-lg mt-2">
                {data.alt}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Skills;
