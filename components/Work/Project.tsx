import Image from "next/image";
import React from "react";
import { FiCode, FiLink } from "react-icons/fi";
import "tippy.js/dist/tippy.css";
import { projectData } from "./Projects";

type Props = {
  project: projectData;
  isReversed: boolean;
};

const Project = ({ project, isReversed }: Props) => {
  const skillsToShow: number = 5;
  return (
    <>
      <div className={`flex ${isReversed ? "flex-row-reverse" : "flex-row"}`}>
        <div className="w-2/3 aspect-w-10 aspect-h-4 transition-color duration-300 ease-in-out bg-orchid-600 dark:bg-asparagus-300 border border-asparagus-300 hover:bg-steel-100 hover:border-steel-300 rounded-lg overflow-hidden">
          <a
            href={project.url || project.repository}
            aria-label={`${project.title} ${
              project.url ? "website" : "source code"
            }`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              className="mix-blend-multiply filter grayscale hover:filter-none hover:grayscale-0"
              src={project.imageUrl}
              alt="me"
              layout="fill"
            />
          </a>
        </div>
        <div
          className={`${
            isReversed ? "text-left" : "text-right"
          } my-auto w-1/3 h-full flex flex-col justify-between gap-y-8`}
        >
          <div>
            <p className="font-display lg:text-3xl text-xl font-semibold">
              {project.title}
            </p>
            <p className="lg:text-xl font-medium">{project.subtitle}</p>
          </div>
          {project.repository || project.url ? (
            <div
              className={`-mt-4 flex flex-row gap-x-4 ${
                isReversed ? "justify-start" : "justify-end"
              }`}
            >
              {project.repository ? (
                <a
                  href={project.repository}
                  aria-label={`${project.title} source code`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FiCode className="lg:h-8 lg:w-8 w-6 h-6" />
                </a>
              ) : null}
              {project.url ? (
                <a
                  href={project.url}
                  aria-label={`${project.title} website`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FiLink className="lg:h-8 lg:w-8 w-6 h-6" />
                </a>
              ) : null}
            </div>
          ) : null}
          <div
            style={{ width: "calc(100% + 96px)" }}
            className={`h-full bg-steel-50 dark:bg-steel-900 rounded shadow-md relative ${
              isReversed ? "left-0" : "right-24"
            } p-4`}
          >
            <p className="lg:text-lg text-xs">{project.description}</p>
          </div>

          {project.skillsUsed ? (
            <div
              className={`flex flex-row items-center ${
                isReversed ? "justify-start" : "justify-end"
              } gap-x-2`}
            >
              {project.skillsUsed.slice(0, skillsToShow).map((skill, index) => (
                <div key={index} slot="icon">
                  <skill.icon className="lg:h-8 lg:w-8 w-4 h-4" />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Project;
