import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Gudea:ital,wght@0,400;0,700;1,400&family=Khula:wght@300;400;600;700;800&family=Rambla:ital,wght@0,400;0,700;1,400;1,700&family=Fira+Mono:wght@400;500;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          ></link>
          <link rel="manifest" href="/site.webmanifest"></link>
          <meta name="application-name" content="Pablo Gimenez" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Pablo Gimenez - Software Developer" />
          <meta name="description" content="Software developer based in Buenos Aires, Argentina. Self taught programmer and enthusiastic learner in computer science. Passion for coding and get most enjoyment from solving problems with writing performant/maintainable code and sharing knowledge. Confident, naturally curious, and perpetually working on improving my chops." />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://www.gimenezpablo.nl" />
          <meta name="twitter:title" content="Pablo Gimenez - Software Developer" />
          <meta
            name="twitter:description"
            content="Software developer based in Buenos Aires, Argentina. Self taught programmer and enthusiastic learner in computer science. Passion for coding and get most enjoyment from solving problems with writing performant/maintainable code and sharing knowledge. Confident, naturally curious, and perpetually working on improving my chops."
          />
          <meta
            name="twitter:image"
            content="https://www.gimenezpablo.nl/me.png"
          />
          <meta name="twitter:creator" content="@gimenezpablonl" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Pablo Gimenez - Software Developer" />
          <meta property="og:description" content="Software developer based in Buenos Aires, Argentina. Self taught programmer and enthusiastic learner in computer science." />
          <meta property="og:site_name" content="Pablo Gimenez" />
          <meta property="og:url" content="https://www.gimenezpablo.nl" />
          <meta
            property="og:image"
            content="https://www.gimenezpablo.nl/me.png"
          />
          
        </Head>
        <body className="scrollbar-thin dark:scrollbar-thumb-steel-900 scrollbar-thumb-orchid-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
