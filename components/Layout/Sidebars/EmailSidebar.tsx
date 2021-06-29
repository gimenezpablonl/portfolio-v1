import React from "react";
import { Fade } from "react-awesome-reveal";
import WhiteLine from "./WhiteLine";

const EmailSidebar = () => {
  return (
    <>
      <aside className="fixed lg:right-12 md:right-6 right-3 bottom-0">
        <Fade direction="up">
          <nav>
            <ul className="flex flex-col justify-items-center justify-center align-center text-center">
              <li className="lg:text-lg md:text-md sm:text-sm text-xs mt-5 transition duration-300 ease-in-out hover:text-orchid-600 dark:hover:text-asparagus-300 transform hover:-translate-y-1">
                <a
                  href="mailto:contact@gimenezpablo.nl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span
                    style={{ writingMode: "vertical-rl" }}
                    className="font-monospace"
                  >
                    contact@gimenezpablo.nl
                  </span>
                </a>
              </li>
              <WhiteLine />
            </ul>
          </nav>
        </Fade>
      </aside>
    </>
  );
};
export default EmailSidebar;
