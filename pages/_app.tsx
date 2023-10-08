import "../styles/index.scss";
import Nav from "../Components/Navigation";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Cursor from "../Components/Cursor/Cursor";
import MouseContextProvider from "../context/mouseContext";

import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { NextSeo } from "next-seo";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import { useEffect, useState, useRef } from "react";
import Link from "next/link.js";
//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps, router }: AppProps) {
  const [secondes, setSecondes] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondes((secondes) => secondes + 1);
    }, 1000);
    if (typeof window !== "undefined" && secondes > 3) {
      const loader = document.getElementById("globalLoader");
      if (loader) {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        // loader.style.zIndex = "-1700";
      }
    }
    return () => {
      clearInterval(timer);
    };
  }, [secondes]);

  const [theme, setTheme] = useState("light");
  const bodyElement = useRef<HTMLElement>(null!);

  useEffect(() => {
    bodyElement.current = document.body;
  }, []);

  useEffect(() => {
    if (theme === "light") {
      bodyElement.current.classList.remove("dark");
      bodyElement.current.classList.add("light");
    } else {
      bodyElement.current.classList.remove("light");
      bodyElement.current.classList.add("dark");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <NextSeo
        title="Alexis Valentino"
        description="Hey, I'm Alexis Valentino. I am a Computer Engineer from the Philippines, When I'm not exploring the latest developments in AI and Machine Learning, you can find me tinkering with Web Development projects or Building Robots just for fun."
        canonical="alexisvalentinowebsite.vercel.app"
        openGraph={{
          url: "alexisvalentinowebsite.vercel.app",
          title: "Alexis Valentino",
          description:
            "Hey, I'm Alexis Valentino. I am a Computer Engineer from the Philippines, When I'm not exploring the latest developments in AI and Machine Learning, you can find me tinkering with Web Development projects or Building Robots just for fun.",
          images: [
            {
              url: "",
              alt: "",
              type: "",
              secureUrl: "",
            },
          ],
          siteName: "Alexis Valentino | Computer Engineer",
        }}
        twitter={{
          handle: "",
          site: "",
          cardType: "summary_large_image",
        }}
      />
      <GoogleAnalytics measurementId="G-E7N5LJTEWP" />
      <AnimatePresence mode="wait" initial={true}  onExitComplete={() => window.scrollTo(0, 0)}>
        <MouseContextProvider>
          <Cursor />
          <header className="header">
            <Link href="/" className="header-logo">
              <svg
                width="155"
                height="39"
                viewBox="0 0 155 39"
                fill="none"
                xmlns=""
              >
                <path
                  d=""
                  fill="#222"
                  stroke="#222"
                />
              </svg>
            </Link>
            <button
              onClick={toggleTheme}
              className={
                theme === "light" ? "header-theme dark" : "header-theme light"
              }
            >
              {theme === "light" ? (
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns=""
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>moon</title>{" "}
                    <path d=""></path>{" "}
                  </g>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns=""
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d=""
                      stroke="#000000"
                    ></path>{" "}
                    <path
                      d="M12 3.5V5.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M20.5 12H18.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M5.5 12H3.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M12 18.5V20.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M16.5 7.5L18 6"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M6 18L7.5 16.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M6 6L7.5 7.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M16.5 16.5L18 18"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              )}
            </button>
          </header>
          <Nav />
          <Component key={router.pathname} {...pageProps} />
        </MouseContextProvider>
      </AnimatePresence>
    </>
  );
}
