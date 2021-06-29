import React from "react";
import { Fade } from "react-awesome-reveal";
import WhiteLineHorizontal from "../Layout/WhiteLineHorizontal";
const Contact = () => {
  return (
    <>
      <section id="contact" className="w-full flex justify-center">
        <div className="w-3/5 flex flex-col gap-y-8">
          <Fade direction="up" triggerOnce cascade>
            <div className="w-full flex flex-row whitespace-nowrap">
              <WhiteLineHorizontal />
              <div className="mx-6">
                <p className="lg:text-4xl text-3xl font-bold dark:text-steel-100 font-display">
                  Say Hello to Me
                </p>
              </div>
              <WhiteLineHorizontal />
            </div>
            <div className="px-4">
              <p className="text-lg text-center">
                Always open to new adventures. If you are looking for a
                developer of my profile for your project, feel free to share
                your approach with me. Or you can just say hello to me 😄.
              </p>
            </div>
            <div className="flex flex-row h-full justify-center">
              <div className="mt-4">
                <form action="mailto:contact@gimenezpablo.nl">
                  <button className="px-4 py-2 transition-color duration-300 ease-in-out border border-orchid-600 text-orchid-600 hover:bg-orchid-400 hover:bg-opacity-30 focus:outline-none focus:ring focus:ring-orchid-300 focus:bg-orchid-600 focus:bg-opacity-30 dark:border-asparagus-300 dark:text-asparagus-300  dark:hover:bg-asparagus-300 dark:focus:bg-asparagus-300 dark:focus:ring-asparagus-300  dark:hover:bg-opacity-30 dark:focus:bg-opacity-30">
                    Send a Message
                  </button>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Contact;
