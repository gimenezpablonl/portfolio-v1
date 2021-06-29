import React from "react";
import { Fade } from "react-awesome-reveal";
import { socialNetworks } from "../../db/socialNetworks";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-y-8 dark:bg-steel-900 bg-steel-200 lg:mt-24 md:mt-12 mt-6 pb-8">
      <Fade direction="up" duration={400} cascade triggerOnce>
        <div className="lg:hidden block pt-10">
          <nav>
            <ul className="flex flex-row justify-center gap-x-4 text-center">
              {socialNetworks.map((sn, index) => (
                <li
                  key={index}
                  className="w-8 h-8 transition duration-300 ease-in-out hover:text-orchid-600 dark:hover:text-asparagus-300"
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
            </ul>
          </nav>
        </div>
        <div className="flex flex-row align-middle justify-items-center justify-center">
          <a
            href="https://www.github.com/gimenezpablonl/portfolio-v1"
            className="focus:outline-none focus:text-orchid-600 dark:focus:text-asparagus-300"
            aria-label="Pablo Gimenez portfolio's source code"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="font-body text-xl">Pablo Gimenez &copy;2021</p>
          </a>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
