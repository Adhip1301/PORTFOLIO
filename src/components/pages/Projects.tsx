"use client";
import { PROJECTS } from "@/lib/const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Projects = () => {
  return (
    <section id="Projects" className="w-full flex flex-col gap-10 justify-center pt-10">
      <span className="text-3xl md:text-5xl font-semibold text-center">Projects</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-6 lg:px-14">
        {PROJECTS.map((value, index) => (
          <FlipCard key={index} project={value} />
        ))}
      </div>
    </section>
  );
};

const FlipCard = ({ project }: { project: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isFlipped) {
      timer = setTimeout(() => {
        setIsFlipped(false);
      }, 2500); // Flip back after 3 seconds
    }
    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [isFlipped]);

  return (
    <div className="relative w-full h-80 perspective">
      <div
        className={`card-container w-full h-full relative transform-style preserve-3d transition-transform duration-700 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side - Project Details */}
        <div className="absolute inset-0 w-full h-full bg-card border rounded-lg shadow-lg backface-hidden flex flex-col items-center justify-center p-6">
          <h3 className="text-xl font-semibold text-primary">{project.title}</h3>

          {/* Hovering on this will flip the card */}
          <div
            className="hover-area w-full text-center mt-2 cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
          >
            <p className="text-sm text-foreground">{project.description}</p>
            <span className="text-sm text-muted-foreground">{project.tech}</span>
          </div>

          <div className="flex justify-between gap-4 mt-4">
            <Link href={project.gitLink} target="_blank" className="text-primary hover:text-gray-600">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
            <Link href={project.URL} target="_blank" className="text-primary hover:text-gray-600">
              <MoveUpRight />
            </Link>
          </div>
        </div>

        {/* Back Side - Project Image */}
        <div className="absolute inset-0 w-full h-full rotate-y-180 backface-hidden">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
