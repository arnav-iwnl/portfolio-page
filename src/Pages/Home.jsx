import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import StringWire from "../components/string/StringWire";

export default function Home() {
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

  return (
    // <div className="flex flex-col items-center xl:mt-10 h-screen justify-center rounded-t-xl bg-[#141414] border-gray-700">
    //   <div className="bg-[#141414] rounded-full overflow-hidden mb-6  w-[200px] h-[200px] border-4 border-gray-700">
    //     <img
    //       src="https://creatorspace.imgix.net/users/clmza562300dwq301fv2kegam/NjN4W9FBvqBbwmL7-WhatsApp%2520Image%25202024-07-30%2520at%252010.01.35%2520PM.jpg?w=300&h=300"
    //       alt="Profile"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>

    //   <div className="text-center flex flex-col justify-between space-y-4 px-4">
    //     <div>
    //       <p className="text-2xl font-bold">Arnav Mandlik</p>
    //       <p className="text-xl font-medium">
    //         MERN Developer <br />
    //         <br />
    //         <p className="italic font-light">"Code is poetry in motion"</p>
    //       </p>
    //     </div>
    //     <div className="flex flex-row justify-around px-20">
    //       <a
    //         href="https://www.linkedin.com/in/arnavmandlik/"
    //         target="_blank"
    //         className="text-lg text-blue-400 underline"
    //       >
    //         <FaLinkedin />
    //       </a>

    //       <a
    //         href="https://github.com/arnav-iwnl"
    //         target="_blank"
    //         className="text-lg text-blue-400 underline"
    //       >
    //         <FaGithub />
    //       </a>
    //       <a
    //         href="https://instagram.com/arnav.socials"
    //         target="_blank"
    //         className="text-lg text-blue-400 underline"
    //       >
    //         <FaInstagram />
    //       </a>
    //     </div>
    //     <div className="pt-4">
    //       <p className="font-medium text-center tracking-wider text-xl  ">
    //         Third Year Undergrad at SIES Graduate School of Technology.
    //       </p>
    //     </div>
    //     <br />
    //     <div className="flex justify-center">
    //       <button className="inline-flex h-12 cursor-none animate-shimmer items-center justify-between rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    //         <AceternityLogo />
    //         <a
    //           className="pl-5 cursor-none"
    //           href="https://drive.usercontent.google.com/download?id=1LNwqtifU5cJgZRF9JWfIpYU4NTHJCKQ2&export=download&authuser=0&confirm=t&uuid=dc1c08ae-ab14-414a-b4e7-159cd282c72b&at=AENtkXYkaOeZlR5Y9Nvh3qq6bY9h:1731755142249"
    //         >
    //           Download CV
    //         </a>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    
      <div className="flex flex-col items-center xl:mt-10 h-screen justify-center rounded-t-xl bg-[#141414] border-gray-700">
        {/* Profile Image */}
        <div className="bg-[#141414] rounded-full overflow-hidden mb-6 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] border-4 border-gray-700">
          <img
            src="https://creatorspace.imgix.net/users/clmza562300dwq301fv2kegam/NjN4W9FBvqBbwmL7-WhatsApp%2520Image%25202024-07-30%2520at%252010.01.35%2520PM.jpg?w=300&h=300"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
    
        {/* Text Content */}
        <div className="text-center flex flex-col justify-between space-y-4 px-4">
          <div>
            <p className="text-lg sm:text-2xl font-bold">Arnav Mandlik</p>
            <p className="text-base sm:text-xl font-medium">
              MERN Developer <br />
              <br />
              <p className="italic font-light text-sm sm:text-base">
                "Code is poetry in motion"
              </p>
            </p>
          </div>
    
          {/* Social Links */}
          <div className="flex flex-row justify-around px-10 sm:px-20">
            <a
              href="https://www.linkedin.com/in/arnavmandlik/"
              target="_blank"
              className="text-sm sm:text-lg text-blue-400 underline"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/arnav-iwnl"
              target="_blank"
              className="text-sm sm:text-lg text-blue-400 underline"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/arnav.socials"
              target="_blank"
              className="text-sm sm:text-lg text-blue-400 underline"
            >
              <FaInstagram />
            </a>
          </div>
    
          {/* Additional Text */}
          <div className="pt-4">
            <p className="text-sm sm:text-xl font-medium text-center tracking-wider">
              Third Year Undergrad at SIES Graduate School of Technology.
            </p>
          </div>
    
          <br />
    
          {/* Download Button */}
          <div className="flex justify-center">
            <button className="inline-flex cursor-none h-10 sm:h-12 items-center justify-between rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 sm:px-6 font-medium text-sm sm:text-base text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <AceternityLogo />
              <a
                className="pl-3 sm:pl-5 cursor-none"
                href="https://drive.usercontent.google.com/download?id=1LNwqtifU5cJgZRF9JWfIpYU4NTHJCKQ2&export=download&authuser=0&confirm=t&uuid=dc1c08ae-ab14-414a-b4e7-159cd282c72b&at=AENtkXYkaOeZlR5Y9Nvh3qq6bY9h:1731755142249"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    );
    
  
}
