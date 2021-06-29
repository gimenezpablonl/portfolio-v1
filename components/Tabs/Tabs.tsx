import { Icon } from "@icons-pack/react-simple-icons";
import React, { useState } from "react";
import { skillData } from "./SkillChip";
import TabInfo from "./TabInfo";

export interface tabData {
  name: string;
  description?: string;
  icon?: Icon;
  role?: string;
  tasks?: string[];
  skills?: skillData[];
}

type Props = {
  tabs: tabData[];
};

const Tabs = ({ tabs }: Props) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const renderTabInfo = (selectedTab: tabData) => (
    <TabInfo info={selectedTab} />
  );

  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-2/6 h-full text-shadow-200 lg:mr-32 mr-0">
        <nav className="flex flex-col lg:text-lg md:text-sm text-xs font-monospace">
          {tabs.map((work, index) => (
            <button key={index} onClick={() => setSelectedTab(index)}>
              <div
                className={`
              lg:whitespace-nowrap whitespace-normal text-left flex items-center focus:outline-none justify-start font-medium
              py-4 pl-6 rounded-none border-l ${
                selectedTab === index
                  ? "border-orchid-600 text-orchid-600 dark:border-asparagus-300 dark:text-asparagus-300"
                  : "border-steel-300 dark:border-steel-700"
              }`}
              >
                {work.icon ? <work.icon className="mr-2" /> : null}
                {work.name}
              </div>
            </button>
          ))}
        </nav>
      </div>
      <div className="lg:items-start items-center w-4/6 h-full">
        {renderTabInfo(tabs[selectedTab])}
      </div>
    </div>
  );
};

export default Tabs;
