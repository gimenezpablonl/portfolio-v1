import React from "react";
import WhiteLineHorizontal from "../Layout/WhiteLineHorizontal";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <>
      <section id="about" className="w-full flex flex-col gap-y-8">
        <Fade direction="down" cascade triggerOnce>
          <div className="w-full flex flex-row items-center whitespace-nowrap lg:text-3xl text-2xl font-bold dark:text-steel-100 font-display">
            <div className="mr-4">About Me</div>
            <WhiteLineHorizontal />
          </div>
            </Fade>
            <Fade cascade triggerOnce>
          <div className="w-full h-full flex lg:gap-x-32 lg:gap-y-0 gap-x-0 gap-y-8 flex-col-reverse lg:flex-row items-center">
            <div className="lg:w-1/2 w-full h-full flex flex-col gap-y-4">
              <p>
                I'm a software developer based in Buenos Aires, Argentina. I am
                self taught programmer and enthusiastic learner in computer
                science. I am in this freelancing market for the past 2 years in
                different domains and have earned a great reputation.
              </p>
              <p>
                I have a passion for coding and get most enjoyment from solving
                problems with writing performant/maintainable code and sharing
                knowledge. I'm confident, naturally curious, and perpetually
                working on improving my chops.
              </p>
            </div>
            <div className="w-1/2 h-full transition-color duration-300 ease-in-out bg-orchid-600 dark:bg-asparagus-300 hover:bg-steel-100 rounded-full overflow-hidden">
              <img
                className="rounded-full mix-blend-multiply filter grayscale hover:filter-none hover:grayscale-0"
                src="/me.png"
                alt="me"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          </Fade>
      </section>
    </>
  );
};

export default About;
