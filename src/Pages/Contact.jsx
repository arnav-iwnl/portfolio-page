
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdBento } from "react-icons/md";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholder";

export function PlaceholdersAndVanishInputDemo() {
 const placeholders = [
  "Seems like you found me! https://your-portfolio-url.com",
  "Reach out to me by sending me email!",
  "Feel free to hit me up when you hit errors!",
];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex w-full flex-col rounded-2xl md:px-10 mt-16 justify-between items-center">
      <h2 className="mb-7 sm:mb-15 pt-10 text-xl font-bold text-center sm:text-3xl  text-white">
        Contact Me
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export const MailIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
      fill="currentColor"
    />
  </svg>
);

const Contact = () => {
  return (
    <div className="bg-[#141414] my-10 rounded-lg sm:w-full">
      <PlaceholdersAndVanishInputDemo />
      <div className="flex flex-row  py-10 justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/arnavmandlik/"
          target="_blank"
          className="text-2xl text-blue-400 underline"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/arnav-iwnl"
          target="_blank"
          className="text-2xl text-blue-400 underline"
        >
          <FaGithub />
        </a>

        <a
          href="https://instagram.com/arnav.socials"
          target="_blank"
          className="text-2xl text-blue-400 underline"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:arnavmandlik1@gmail.com"
          target="_blank"
          className="text-2xl text-blue-400 underline"
        >
          <FaRegEnvelope />
        </a>
        <a
          href="https://bento.me/arnav-socials"
          target="_blank"
          className="text-2xl text-blue-400 underline"
        >
          <MdBento />
        </a>
      </div>
    </div>
  );
};

export default Contact;
