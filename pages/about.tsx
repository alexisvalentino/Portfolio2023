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
            Hey, I’m Alexis Valentino. I’m a Computer Engineer from the Philippines. When I’m not exploring the latest developments in AI and LLMs, you can find me tinkering with web development projects or building robots just for fun.
            <br /><br />
            Currently, I work as a Software Delivery Engineer at Whale Cloud, where I conduct regression testing and create test reports based on solution requirements. Using in-house tools, I identify and track bugs, and actively participate in Development, System Integration Testing (SIT), and User Acceptance Testing (UAT) processes. I collaborate with teams to resolve issues, ensuring smooth application delivery and contributing to the successful implementation of new app features and AI deployments.
            <br /><br />
            In my spare time, I enjoy taking free{" "}
            <a
              href="https://www.credly.com/users/alexis-valentino/badges"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
              courses
            </a>{" "}
            and pushing contributions to{" "}
            <a
              href="https://github.com/alexisvalentino"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              target="_blank"
            >
              GitHub
            </a>
            . Proficient in Python and JavaScript, I’m dedicated to applying my expertise to innovate and tackle real-world challenges through exciting projects. Take a look at my projects to see what I’m working on, and feel free to reach out if you’d like to collaborate!
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
              href="https://drive.google.com/file/d/1BjIMyg-SJE7W7fCTjEAMlBbyhgn8Qn5r/view?usp=sharing"
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
