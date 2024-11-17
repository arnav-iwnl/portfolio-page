import React from "react";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

const HomePage = () => {
  return (
    <div className="flex h-screen justify-center bg-[#141414] rounded-t-xxl w-[50em] no-scrollbar text-white ">
      <div className="flex-1 h-full overflow-y-auto bg-[#141414]k no-scrollbar p-6">
        <div className="flex flex-col items-center justify-center mb-4 h-full rounded-t-xl bg-[#141414] border-gray-700">
          <div className="w-[200px] bg-[#141414] h-[200px] rounded-full overflow-hidden mb-6 flex items-center justify-center border-4 border-gray-700">
            <img
              src="https://creatorspace.imgix.net/users/clmza562300dwq301fv2kegam/NjN4W9FBvqBbwmL7-WhatsApp%2520Image%25202024-07-30%2520at%252010.01.35%2520PM.jpg?w=300&h=300"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center space-y-4 bg-[#141414] px-4">
            <p className="text-2xl font-bold">Arnav Mandlik</p>
            <p className="text-xl font-medium">
              MERN Developer <br />
              <br />
              <p className="italic font-light">"Code is poetry in motion"</p>
            </p>
            <div className="flex flex-row justify-around px-20">
              <a
                href="https://www.linkedin.com/in/arnavmandlik/"
                target="_blank"
                className="text-lg text-blue-400 underline"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/arnav-iwnl"
                target="_blank"
                className="text-lg text-blue-400 underline"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/arnav.socials"
                target="_blank"
                className="text-lg text-blue-400 underline"
              >
                <FaInstagram />
              </a>
            </div>
            <p className="font-medium text-xl pt-2 ">
              Third Year Undergrad at SIES - Graduate School of Technology.
            </p>
            <br />
            <div className="flex justify-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-[#141414]  text-black  dark:text-white flex items-center space-x-2"
              >
                <AceternityLogo />
                <a
                  href="https://drive.usercontent.google.com/download?id=1LNwqtifU5cJgZRF9JWfIpYU4NTHJCKQ2&export=download&authuser=0&confirm=t&uuid=dc1c08ae-ab14-414a-b4e7-159cd282c72b&at=AENtkXYkaOeZlR5Y9Nvh3qq6bY9h:1731755142249
"
                >
                  Download CV
                </a>
              </HoverBorderGradient>
            </div>
          </div>
        </div>
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
