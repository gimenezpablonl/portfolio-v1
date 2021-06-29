import React from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <>
      <Fade direction="left" triggerOnce cascade>
        <div>
          <p className="font-monospace font-medium lg:text-3xl md:text-xl text-lg text-orchid-600 dark:text-asparagus-300">
            &#x1F44B; Nice to meet you, I'm
          </p>
        </div>
        <div>
          <h1 className="mt-3 font-display lg:text-7xl md:text-6xl text-4xl font-bold">
            Pablo Gimenez.
          </h1>
        </div>
        <div className="lg:w-1/2">
          <p className="mt-3 lg:text-2xl md:text-xl text-lg text-steel-600 dark:text-steel-300">
            I'm a software developer based in Buenos Aires who enjoys learning
            new languages, frameworks, and technologies in general.
          </p>
        </div>
        <div className="h-32 w-full flex items-center">
          <form action="mailto:contact@gimenezpablo.nl">
            <button className="px-8 py-4 border text-2xl border-orchid-600 text-orchid-600 transition-color duration-300 ease-in-out hover:bg-orchid-400 hover:bg-opacity-30 focus:outline-none focus:ring focus:ring-orchid-300 focus:bg-orchid-600 focus:bg-opacity-30 dark:border-asparagus-300 dark:text-asparagus-300  dark:hover:bg-asparagus-300 dark:focus:bg-asparagus-300 dark:focus:ring-asparagus-300 dark:hover:bg-opacity-30 dark:focus:bg-opacity-30">
              Get In Touch
            </button>
          </form>
        </div>
      </Fade>
    </>
  );
};

export default Hero;
