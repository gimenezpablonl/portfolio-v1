import React from "react";
import SkillChip from "./SkillChip";
import Task from "./Task";
import { tabData } from "./Tabs";
import { useSpring, animated } from "react-spring";
type Props = {
  info: tabData;
};

const tabInfo = ({ info }: Props) => {
  const styles = useSpring({ opacity: info ? 1 : 0 });
  return (
    <>
      <animated.div
        style={styles}
        className={`flex ${info.tasks ? "flex-col" : null} w-full h-full`}
      >
        {info.role ? (
          <div>
            <p className="font-display text-lg mb-1">{info.role}</p>
          </div>
        ) : null}
        {info.description ? (
          <div>
            <p className="font-monospace text-xs mb-5">{info.description}</p>
          </div>
        ) : null}
        {info.tasks ? (
          <div className="w-full h-full flex flex-col gap-y-2">
            {info.tasks.map((task, index) => (
              <Task key={index} task={task} />
            ))}
          </div>
        ) : null}
        {info.skills ? (
          <div className="font-body flex flex-row flex-wrap justify-start lg:w-5/6 w-full h-full gap-x-2 gap-y-2">
            {info.skills.map((skill, index) => (
              <SkillChip key={index} skill={skill} />
            ))}
          </div>
        ) : null}
      </animated.div>
    </>
  );
};

export default tabInfo;
