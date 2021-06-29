import { Icon } from "@icons-pack/react-simple-icons";
import React from "react";

export interface skillData {
  name: string;
  icon: Icon;
}

type Props = {
  skill: skillData;
};

const SkillChip = ({ skill }: Props) => {
  return (
    <>
      <div className="flex flex-row items-center justify-start lg:py-1 pl-2 pr-2 bg-steel-50 dark:bg-steel-900 shadow rounded-lg">
        <div slot="icon">
          <skill.icon className="xl:w-5 xl:h-5 md:w-4 md:h-4 w-3 h-3" />
        </div>
        <div className="ml-2 mt-1 xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs">
          {skill.name}
        </div>
      </div>
    </>
  );
};

export default SkillChip;
