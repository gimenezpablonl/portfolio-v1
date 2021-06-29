import React from "react";
import { FaCaretRight } from "react-icons/fa";

type Props = {
  task: string;
};

const Task = ({ task }: Props) => {
  return (
    <>
      <div className="flex flex-row gap-x-2">
        <div>
          <FaCaretRight className="mt-[1px] text-orchid-600 dark:text-asparagus-300" />
        </div>
        <p className="font-body">{task}</p>
      </div>
    </>
  );
};

export default Task;
