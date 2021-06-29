import Head from "next/head";
import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Pablo Gimenez - Software Developer</title>
        <meta
          name="description"
          content="Software developer based in Buenos Aires, Argentina. Self taught programmer and enthusiastic learner in computer science. Passion for coding and get most enjoyment from solving problems with writing performant/maintainable code and sharing knowledge. Confident, naturally curious, and perpetually working on improving my chops."
        />
        <meta name="author" content="Pablo Gimenez" />
        <meta name="copyright" content="Pablo Gimenez" />
        <meta
          property="og:title"
          content="Pablo Gimenez - Software Developer"
        />
        <meta property="og:image" content="https://www.gimenezpablo.nl/me.png" />
        <meta
          property="og:description"
          content="Software developer based in Buenos Aires, Argentina. Self taught programmer and enthusiastic learner in computer science."
        />
        <meta property="og:url" content="https://www.gimenezpablo.nl/" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <div className="flex flex-col items-center min-h-screen xl:px-12 lg:px-6">
          <main className="flex flex-col lg:gap-y-0">
            <div className="flex flex-col justify-center min-h-screen pb-36 xl:pl-6 lg:pl-3">
              <Hero />
            </div>
            <div className="lg:mt-0 mt-8 flex flex-col lg:gap-y-48 md:gap-y-36 sm:gap-y-24 gap-y-12 xl:px-12 lg:px-6">
              <About />
              <Experience />
              <Skills />
              <Work />
              <Contact />
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
