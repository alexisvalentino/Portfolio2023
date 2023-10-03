import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export default function about() {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [age, setAge] = useState(0);

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date(2003, 10, 20);

    var currentYear = today.getFullYear();
    var birthYear = birthDate.getFullYear();
    var ageInYears = currentYear - birthYear;

    if (
      birthDate.getMonth() > today.getMonth() ||
      (birthDate.getMonth() == today.getMonth() &&
        birthDate.getDate() > today.getDate())
    ) {
      setAge(ageInYears - 1);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Alexis Valentino | About</title>
        <meta
          name="description"
          content="
    I’m a Front-end Developer & Web Integrator, I’m passionate about creating beautiful, intuitive and responsive websites.
    "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="about">
        {/* <div className="about-illus">
          <Image
            src="/illustrations/1.png"
            alt="illustration"
            width={200}
            height={200}
            
          />
        </div> */}
        <div className="page__lines"></div>
        <motion.div
          className="about-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            style={{
              overflow: "hidden",
            }}
            className="about-left__title"
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              About
            </motion.h2>
          </div>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "15%", opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="about-left__text"
          >
            Hey, I'm Alexis Valentino. I am
            a Computer Engineer{" "}
            <a
              href="https://www.awwwards.com/jury-member/ln-dev"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
            </a>{" "}
            from the Philippines, When I'm not exploring the latest developments in AI and Machine Learning, 
            you can find me tinkering with Web Development projects or Building Robots just for fun.{" "}
            <a
              href="https://open.spotify.com/playlist/2akHeWgVqLdf453oKj4lPH?si=ZdA5H7VMTm2OtjfdxFiEtg"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
            </a>{" "}
            In my spare time I write{" "}
            <a
              href="https://medium.com/@alexisvalentino"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
              articles
            </a>{" "}
            about self-improvement and spent a lot of time pushing on{" "}
            <a
              href="https://github.com/alexisvalentino"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
            Github.
            </a>
            In the recent years, I've been focused on Software Engineering, DevOps, Robotics, Cloud Computing, Data Structures and Algorithms, Network Architecture, Electronics, Operating systems, Signal Processing and Cybersecurity. I gained practical experience in designing and implementing hardware systems and additionally, I am proficient in Python and Javascript. I am committed to utilizing my knowledge and skills to create innovative solutions and developing exciting projects that solve real world problems. Take a look at my projects to see what I'm working on, and get in touch if you'd like to work together!
          </motion.p>
          <div className="about-left__langs">
            <motion.h3 variants={item}>LANGUAGES</motion.h3>
            <motion.li variants={item}>
              <span>Filipino</span>
              <span>Native</span>
            </motion.li>
            <motion.li variants={item}>
              <span>English</span>
              <span>Fluent</span>
            </motion.li>
            <motion.li variants={item}>
              <span>Pidgin</span>
              <span>Basic</span>
            </motion.li>
          </div>
          <div className="about-left__links">
            <motion.a
              variants={item}
              href="https://drive.google.com/file/d/1AKRWT-s8w9u43u-42A9TN3tvdAwEfvWV/view?usp=sharing"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>{" "}
              Resume
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="about-right"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: "25%", opacity: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="about-right__image">
            <Image
              src="/images/profile.jpg"
              alt="alexis valentino"
              width={3024}
              height={4032}
            />
          </div>
        </motion.div>
      </main>
    </>
  );
}
