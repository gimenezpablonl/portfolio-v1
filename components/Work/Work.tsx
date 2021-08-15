import {
  Graphql,
  Nextdotjs,
  ReactJs,
  Socketdotio,
  Tailwindcss,
  Typescript,
} from "@icons-pack/react-simple-icons";
import React from "react";
import { FiFeather } from "react-icons/fi";
import { GiHummingbird } from "react-icons/gi";
import WhiteLineHorizontal from "../Layout/WhiteLineHorizontal";
import Projects, { projectData } from "./Projects";
import { Fade } from "react-awesome-reveal";

const Work = () => {
  const projects: projectData[] = [
    {
      title: "Plizi",
      subtitle: "Social network",
      description: "Social network made just to improve my development skills.",
      imageUrl:
        "https://raw.githubusercontent.com/gimenezpablonl/plizi-social-network/main/readme/demo.png",
      repository: "https://github.com/gimenezpablonl/plizi-social-network",
      url: "https://plizi-social-network.vercel.app/",
      skillsUsed: [
        { name: "TypeScript", icon: Typescript },
        { name: "React", icon: ReactJs },
        { name: "NextJS", icon: Nextdotjs },
        { name: "GraphQL", icon: Graphql },
        { name: "Fauna", icon: GiHummingbird },
      ],
    },
    {
      title: "Typing Test",
      subtitle: "A 10fastfingers clone",
      description:
        "Test your typing speed in English, Spanish and French built in TypeScript with React.",
      imageUrl:
        "https://user-images.githubusercontent.com/37600947/114434386-55664780-9b99-11eb-9058-7ffbfe018f9e.gif",
      repository: "https://github.com/gimenezpablonl/typing-test",
      url: "https://gimenezpablonl-typing-test.vercel.app/",
      skillsUsed: [
        { name: "TypeScript", icon: Typescript },
        { name: "Tailwind CSS", icon: Tailwindcss },
        { name: "React", icon: ReactJs },
        { name: "NextJS", icon: Nextdotjs },
      ],
    },
    {
      title: "Realtime chat",
      description:
        "A realtime chat made with SocketIO in TypeScript using React and FeathersJS as backend.",
      imageUrl:
        "https://raw.githubusercontent.com/gimenezpablonl/feathers-react-chat/master/docs/chat.png",
      repository: "https://github.com/gimenezpablonl/feathers-react-chat",
      skillsUsed: [
        { name: "TypeScript", icon: Typescript },
        { name: "React", icon: ReactJs },
        { name: "SocketIO", icon: Socketdotio },
        { name: "Feathers", icon: FiFeather },
      ],
    },
  ];
  return (
    <>
      <section id="work" className="w-full flex flex-col gap-y-8">
        <Fade direction="down" triggerOnce cascade>
          <div className="w-full flex flex-row items-center whitespace-nowrap lg:text-3xl text-2xl font-bold dark:text-steel-100 font-display">
            <div className="mr-4">Some Things I’ve Built</div>
            <WhiteLineHorizontal />
          </div>
        </Fade>
        <Projects projects={projects} />
      </section>
    </>
  );
};

export default Work;
