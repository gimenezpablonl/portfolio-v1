import React from "react";
import { skillData } from "../Tabs/SkillChip";
import Project from "./Project";

export interface projectData {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  skillsUsed?: skillData[];
  url?: string;
  repository?: string;
}

type Props = {
  projects: projectData[];
};
import { Fade } from "react-awesome-reveal";

const Projects = ({ projects }: Props) => {
  return (
    <>
      <div className="w-full h-full flex flex-col lg:gap-y-32 gap-y-16">
        {projects
          ? projects.map((project, index) => {
              let reversed = index % 2 !== 0;
              return (
                <Fade
                  key={index}
                  direction={`${reversed ? "left" : "right"}`}
                  triggerOnce
                  cascade
                >
                  <Project project={project} isReversed={reversed} />
                </Fade>
              );
            })
          : null}
        <div className="flex flex-col items-center">
          <Fade direction="down" triggerOnce cascade>
            <button className="px-8 py-4 border text-2xl border-orchid-600 text-orchid-600 transition-color duration-300 ease-in-out hover:bg-orchid-400 hover:bg-opacity-30 focus:outline-none focus:ring focus:ring-orchid-300 focus:bg-orchid-600 focus:bg-opacity-30 dark:border-asparagus-300 dark:text-asparagus-300  dark:hover:bg-asparagus-300 dark:focus:bg-asparagus-300 dark:focus:ring-asparagus-300 dark:hover:bg-opacity-30 dark:focus:bg-opacity-30">
              <a
                href="https://github.com/gimenezpablonl?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 focus:outline-none focus:text-orchid-600 dark:focus:text-asparagus-300"
              >
                See All My Projects
              </a>
            </button>
          </Fade>
        </div>
      </div>
    </>
  );
};
export default Projects;
