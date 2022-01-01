import React from "react";
import { Fade } from "react-awesome-reveal";
import WhiteLineHorizontal from "../Layout/WhiteLineHorizontal";
import Tabs, { tabData } from "../Tabs/Tabs";

const Experience = () => {
  const jobs: tabData[] = [
    {
      name: "Media.Monks",
      description: "Aug 2021 - Present",
      role: "Frontend Developer",
      tasks: [
        "Developed websites for important brands as: Verizon, Canon, Aeroméxico using primarily React with Typescript.",
        "Build application logic, state management, user interactions, and other component logic using React's best practices and patterns to deliver scalable code.",
      ],
    },
    {
      name: "EmpreWebs",
      description: "Oct 2020 - Mar 2021",
      role: "Backend Developer & Frontend Support Developer",
      tasks: [
        "Worked closely with our UI/UX designers in creating web and mobile applications that served the needs of our clients using React.",
        "Develop mobile apps using React Native and Expo.",
        "Single-handedly design & develop databases with MySQL and MongoDB.",
        "Single-handedly develop backend with JavaScript using Express and NestJS.",
      ],
    },
    {
      name: "Freelance",
      description: "Aug 2019 - Present",
      role: "Frontend Developer & UX Designer",
      tasks: [
        "I've developed websites and small projects for local businesses to help them to start their business in the digital world.",
      ],
    },
  ];
  return (
    <>
      <section id="experience" className="w-full flex flex-col gap-y-8">
        <Fade direction="down" triggerOnce cascade>
          <div className="w-full flex flex-row items-center whitespace-nowrap lg:text-3xl text-2xl font-bold dark:text-steel-100 font-display">
            <div className="mr-4">Where I’ve Worked</div>
            <WhiteLineHorizontal />
          </div>
        </Fade>
        <Fade cascade>
          <Tabs tabs={jobs} />
        </Fade>
      </section>
    </>
  );
};

export default Experience;
