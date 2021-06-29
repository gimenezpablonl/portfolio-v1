import {
  Adobeillustrator,
  Adobephotoshop,
  Adobexd,
  CssThree,
  Docker,
  Electron,
  Expo,
  Express,
  Figma,
  Git,
  Go,
  Graphql,
  Heroku,
  Html5,
  Java,
  Javascript,
  Linux,
  Mongodb,
  Nestjs,
  Netlify,
  NextDotJs,
  Nginx,
  NuxtDotJs,
  Postgresql,
  Qt,
  ReactJs,
  Rust,
  SocketDotIo,
  Tailwindcss,
  Typescript,
  Vercel,
  VueDotJs,
} from "@icons-pack/react-simple-icons";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { AiOutlinePicLeft } from "react-icons/ai";
import { CgBrowser, CgInfinity } from "react-icons/cg";
import { DiDatabase, DiMysql, DiSqllite } from "react-icons/di";
import { FaDesktop, FaFeather, FaMobileAlt } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";
import { VscServerProcess } from "react-icons/vsc";
import WhiteLineHorizontal from "../Layout/WhiteLineHorizontal";
import Tabs, { tabData } from "../Tabs/Tabs";

const Skills = () => {
  const skills: tabData[] = [
    {
      name: "Frontend",
      icon: CgBrowser,
      skills: [
        { name: "HTML", icon: Html5 },
        { name: "CSS", icon: CssThree },
        { name: "Tailwindcss", icon: Tailwindcss },
        { name: "JavaScript", icon: Javascript },
        { name: "TypeScript", icon: Typescript },
        { name: "React", icon: ReactJs },
        { name: "Nextjs", icon: NextDotJs },
        { name: "Vuejs", icon: VueDotJs },
        { name: "Nuxtjs", icon: NuxtDotJs },
      ],
    },
    {
      name: "Backend",
      icon: VscServerProcess,
      skills: [
        { name: "Expressjs", icon: Express },
        { name: "Nestjs", icon: Nestjs },
        { name: "Featherjs", icon: FaFeather },
        { name: "Gin", icon: Go },
        { name: "Echo", icon: Go },
        { name: "Web Sockets", icon: SocketDotIo },
        { name: "GraphQL", icon: Graphql },
      ],
    },
    {
      name: "Databases",
      icon: DiDatabase,
      skills: [
        { name: "MySQL", icon: DiMysql },
        { name: "PostgreSQL", icon: Postgresql },
        { name: "SQLite", icon: DiSqllite },
        { name: "MongoDB", icon: Mongodb },
        { name: "Fauna", icon: GiHummingbird },
      ],
    },
    {
      name: "DevOps",
      icon: CgInfinity,
      skills: [
        { name: "Linux", icon: Linux },
        { name: "Git", icon: Git },
        { name: "Docker", icon: Docker },
        { name: "Nginx", icon: Nginx },
        { name: "Heroku", icon: Heroku },
        { name: "Netlify", icon: Netlify },
        { name: "Vercel", icon: Vercel },
      ],
    },
    {
      name: "Desktop Apps",
      icon: FaDesktop,
      skills: [
        { name: "Electron", icon: Electron },
        { name: "Tauri", icon: Rust },
        { name: "Qt", icon: Qt },
      ],
    },
    {
      name: "Mobile Apps",
      icon: FaMobileAlt,
      skills: [
        { name: "React Native", icon: ReactJs },
        { name: "Expo", icon: Expo },
        { name: "Java", icon: Java },
      ],
    },
    {
      name: "UI/UX Design",
      icon: AiOutlinePicLeft,
      skills: [
        { name: "Figma", icon: Figma },
        { name: "Adobe XD", icon: Adobexd },
        { name: "Adobe Illustrator", icon: Adobeillustrator },
        { name: "Adobe Photoshop", icon: Adobephotoshop },
      ],
    },
  ];
  return (
    <>
      <section id="skills" className="w-full flex flex-col gap-y-8">
        <Fade direction="down" triggerOnce cascade>
          <div className="w-full flex flex-row items-center whitespace-nowrap lg:text-3xl text-2xl font-bold dark:text-steel-100 font-display">
            <div className="mr-4">Skills</div>
            <WhiteLineHorizontal />
          </div>
        </Fade>
        <Fade triggerOnce cascade>
          <Tabs tabs={skills} />
        </Fade>
      </section>
    </>
  );
};

export default Skills;
