import React from "react";
import { Fade } from "react-awesome-reveal";
import { socialNetworks } from "../../../db/socialNetworks";
import WhiteLine from "./WhiteLine";

const SocialSidebar = () => {
  return (
    <>
      <aside className="fixed lg:left-12 md:left-6 left-3 bottom-0">
        <Fade direction="up">
          <nav>
            <ul className="flex flex-col justify-items-center justify-center align-center text-center">
              {socialNetworks.map((sn, index) => (
                <li
                  key={index}
                  className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:w-4 sm:h-4 w-3 h-3 mt-5 transition duration-300 ease-in-out hover:text-orchid-600 dark:hover:text-asparagus-300 transform hover:-translate-y-1 hover:scale-[1.20]"
                >
                  <a
                    href={sn.url}
                    aria-label={sn.name}
                    className="focus:outline-none focus:text-orchid-600 dark:focus:text-asparagus-300 focus:scale-[1.20]"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <sn.icon size="100%" strokeWidth="1.5" />
                  </a>
                </li>
              ))}
              <WhiteLine />
            </ul>
          </nav>
        </Fade>
      </aside>
    </>
  );
};

export default SocialSidebar;
