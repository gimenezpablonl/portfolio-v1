import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import {
  animated,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from "react-spring";

interface bg {
  light: string;
  dark: string;
}

export interface navbarTab {
  title: string;
  id: string;
  bg: bg;
}

const Navbar = () => {
  const [navbarItems, _setNavbarItems] = useState<navbarTab[]>([
    {
      title: "About",
      id: "about",
      bg: {
        light: "bg-olive-300",
        dark: "dark:bg-chocolate-800",
      },
    },
    {
      title: "Experience",
      id: "experience",
      bg: {
        light: "bg-asparagus-300",
        dark: "dark:bg-chestnut-800",
      },
    },
    {
      title: "Skills",
      id: "skills",
      bg: {
        light: "bg-seagreen-300",
        dark: "dark:bg-orchid-800",
      },
    },
    {
      title: "Work",
      id: "work",
      bg: {
        light: "bg-teal-300",
        dark: "dark:bg-royalblue-800",
      },
    },
    {
      title: "Contact",
      id: "contact",
      bg: {
        light: "bg-steel-300",
        dark: "dark:bg-denim-800",
      },
    },
  ]);
  const [menuItems, setMenuItems] = useState<navbarTab[]>([]);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  useEffect(() => {
    if (isToggled) {
      document.body.style.overflow = "hidden";
      headerApi.start({
        transform: "translate3d(0px, 0px 0px)",
        position: "fixed",
      });
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isToggled]);

  const handleScroll = () => {
    onScroll();
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // Navbar Scroll

  const [headerStyle, headerApi] = useSpring(() => ({
    from: {
      position: "fixed" as any,
      transform: "translate3d(0px, 0px, 0px)",
    },
  }));

  const headerHeight = 60;
  let lastScrollTop = 0;
  let accumScrollMovement = 0;
  const UP = 0;
  const DOWN = 1;
  let previousDirection = DOWN;
  let headerTopRevealed = false;

  const onScroll = useCallback(() => {
    let currentDirection;
    const scrollDiff = window.scrollY - lastScrollTop;

    if (scrollDiff > 0) {
      currentDirection = DOWN;
    } else {
      currentDirection = UP;
      if (window.scrollY > headerHeight) {
        if (previousDirection === DOWN) {
          accumScrollMovement = Math.abs(scrollDiff);
        }
        accumScrollMovement += Math.abs(scrollDiff);
        if (accumScrollMovement > 100) {
          headerApi.start({
            transform: "translate3d(0px, 0px 0px)",
            position: "fixed",
          });
          headerTopRevealed = true;
        }
      }
    }

    if (
      window.scrollY > headerHeight &&
      window.scrollY <= headerHeight &&
      !headerTopRevealed &&
      currentDirection === UP
    ) {
      headerApi.start({
        position: "absolute",
        transform: "translate3d(0px, 0px, 0px)",
      });
    } else if (window.scrollY > headerHeight && currentDirection === DOWN) {
      headerApi.start({
        position: "fixed",
        transform: "translate3d(0px, -100%, 0px)",
      });
      headerTopRevealed = false;
    } else if (window.scrollY < headerHeight) {
      headerApi.start({
        position: "fixed",
        transform: "translate3d(0px, 0px, 0px)",
      });
      headerTopRevealed = false;
    }

    lastScrollTop = window.scrollY;
    previousDirection = currentDirection;
  }, []);

  // Menu Button

  const menuTransitionRef = useSpringRef();
  const menuTransition = useTransition(isToggled, {
    ref: menuTransitionRef,
    from: { display: "none", position: "static" as any },
    enter: { display: "flex", position: "fixed" as any },
    leave: {
      display: "none",
      position: "static" as any,
      delay: 200 * navbarItems.length,
    },
  });

  // Menu Icon

  const first = useSpring({
    transform: isToggled
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 7px) rotate(0deg)",
  });
  const second = useSpring({
    transform: isToggled
      ? "translate(10px, 4px) rotate(45deg)"
      : "translate(2px, 19px) rotate(0deg)",
  });
  const third = useSpring({
    transform: isToggled
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 31px) rotate(0deg)",
  });

  // Menu Items

  const itemsTransionRef = useSpringRef();
  const transitions = useTransition(menuItems, {
    ref: itemsTransionRef,
    from: { opacity: 0 as any, transform: `translateX(100%)` },
    enter: { opacity: 1 as any, transform: `translateX(0%)` },
    leave: { transform: `translateX(-100%)` },
    trail: 200,
  });

  // Menu Animation Chain

  useChain([itemsTransionRef, menuTransitionRef]);

  return (
    <React.Fragment>
      <animated.header
        style={headerStyle}
        className="lg:flex hidden z-50 w-full fixed top-0 left-0 right-0 flex-row justify-end lg:py-4 md:py-5 py-4 px-10 bg-steel-100 dark:bg-steel-800"
      >
        <nav className="flex flex-row align-baseline lg:text-xl font-monospace justify-end dark:text-steel-100 gap-x-2">
          {navbarItems.map((tab, index) => (
            <Link key={index} href={`#${tab.id}`}>
              <a className="p-2 focus:outline-none focus:text-orchid-600 dark:focus:text-asparagus-300">
                {tab.title}
              </a>
            </Link>
          ))}
          <div className="flex flex-row m-0 p-o">
            <button className="px-4 py-2 border border-orchid-600 text-orchid-600 transition-color duration-300 ease-in-out hover:bg-orchid-400 hover:bg-opacity-30 focus:outline-none focus:ring focus:ring-orchid-300 focus:bg-orchid-600 focus:bg-opacity-30 dark:border-asparagus-300 dark:text-asparagus-300  dark:hover:bg-asparagus-300 dark:focus:bg-asparagus-300 dark:focus:ring-asparagus-300 dark:hover:bg-opacity-30 dark:focus:bg-opacity-30">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 focus:outline-none focus:text-orchid-600 dark:focus:text-asparagus-300"
              >
                Resume
              </a>
            </button>
          </div>
        </nav>
      </animated.header>

      <animated.header
        style={headerStyle}
        className="lg:hidden flex z-50 fixed top-0 right-0 flex-row justify-end py-4 px-8"
      >
        <button
          onClick={() => {
            if (isToggled) {
              setIsToggled(false);
              setMenuItems([]);
            } else {
              setIsToggled(true);
              setMenuItems(navbarItems);
            }
          }}
          aria-label="Menu"
          className="p-2 border rounded border-orchid-600 text-orchid-600 transition-color duration-300 ease-in-out hover:bg-orchid-400 hover:bg-opacity-30 focus:outline-none focus:ring focus:ring-orchid-300 focus:bg-orchid-600 focus:bg-opacity-30 dark:border-asparagus-300 dark:text-asparagus-300  dark:hover:bg-asparagus-300 dark:focus:bg-asparagus-300 dark:focus:ring-asparagus-300 dark:hover:bg-opacity-30 dark:focus:bg-opacity-30"
        >
          <svg
            width="40"
            height="32"
            viewBox="0 0 44 44"
            className="fill-current dark:text-steel-100 text-steel-800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <animated.rect width="40" height="4" rx="2" style={first} />
            <animated.rect width="40" height="4" rx="2" style={second} />
            <animated.rect width="40" height="4" rx="2" style={third} />
          </svg>
        </button>
      </animated.header>
      {menuTransition(
        (menuStyle, item) =>
          item && (
            <animated.div
              className={`
z-40
w-full h-screen flex flex-col justify-center
${navbarItems[navbarItems.length - 1].bg.dark}
${navbarItems[navbarItems.length - 1].bg.light}
`}
              style={{ ...menuStyle }}
            >
              {transitions((style, item) => (
                <Link href={`#${item.id}`}>
                  <animated.div
                    className={`w-full h-full flex justify-center items-center ${item.bg.light} ${item.bg.dark}`}
                    style={style}
                    onClick={() => {
                      setIsToggled(false);
                      setMenuItems([]);
                    }}
                  >
                    <p>{item.title}</p>
                  </animated.div>
                </Link>
              ))}
            </animated.div>
          )
      )}
    </React.Fragment>
  );
};

export default Navbar;
