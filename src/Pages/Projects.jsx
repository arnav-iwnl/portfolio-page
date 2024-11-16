// import React from "react";

// const projectData = [
//   {
//     name: "BizNiche",
//     image: "https://i.postimg.cc/KjHc9fH9/Biz-Niche-SS.png", // Image moved to the public folder
//     description:
//       "An e-commerce platform empowering local businesses with AI-powered product recommendations and category detection.",
//   },
//   {
//     name: "Course Session Plan",
//     image: "https://i.postimg.cc/Fz7NJcH0/Session-Plan-Management.png",
//     description:
//       "A tool for instructors to create, manage, and share detailed course session plans effectively.",
//   },
//   {
//     name: "Career GPT",
//     image: "https://i.postimg.cc/WpH2c958/Gemini-Project.png",
//     description:
//       "An AI-driven platform offering personalized career guidance based on user profiles and preferences.",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="text-white pt-12  px-10">
//       <h1 className="text-4xl font-extrabold mb-12 text-center bg-transparent">
//         Projects
//       </h1>
//       <div className="space-y-12 bg-transparent">
//         {projectData.map((project, index) => (
//           <div
//             key={index}
//             className="flex flex-col lg:flex-row items-center rounded-xl shadow-lg p-10 bg-transparent hover:shadow-2xl transition duration-300  hover:bg-gray-700"
//           >
//             {/* Project Image */}
//             <div className="w-full flex items-center justify-center mb-6 lg:mb-0  bg-transparent">
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="w-300 h-400 object-contain rounded-lg bg-transparent"
//               />
//             </div>
//             {/* Project Details */}
//             <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6 bg-transparent pl-10">
//               <h2 className="text-2xl font-bold bg-transparent">
//                 {project.name}
//               </h2>
//               <p className="text-l bg-transparent">{project.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";

const projectData = [
  {
    name: "BizNiche",
    image: "https://i.postimg.cc/KjHc9fH9/Biz-Niche-SS.png",
    href: "https://github.com/arnav-iwnl/BizNiche",
    description:
      "An e-commerce platform empowering local businesses with AI-powered product recommendations and category detection.",
  },
  {
    name: "Course Session Plan",
    image: "https://i.postimg.cc/Fz7NJcH0/Session-Plan-Management.png",
    href: "https://github.com/arnav-iwnl/CourseSessionPlan",
    description:
      "A tool for instructors to create, manage, and share detailed course session plans effectively.",
  },
  {
    name: "Career GPT",
    image: "https://i.postimg.cc/WpH2c958/Gemini-Project.png",
    href: "https://github.com/arnav-iwnl/CareerGPT",
    description:
      "An AI-driven platform offering personalized career guidance based on user profiles and preferences.",
  },
  {
    name: "LPR YOLOv8",
    image: "https://i.postimg.cc/J4ZVbT9w/sussex.png",
    href: "https://github.com/arnav-iwnl/LPR-YOLOv8",
    description:
      "License Plate Recognition project uses the YOLO v8 model and OpenCV for real-time detection and recognition of vehicle license plates.",
  },
];

// const Projects = () => {
//   return (
//     <div className="text-white pt-12 px-10">
//       <h1 className="text-4xl font-extrabold mb-12 text-center bg-transparent">
//         Projects
//       </h1>
//       <div className="h-[40rem] w-full flex flex-col col-span-2 items-center justify-center ">
//         {projectData.map((project, index) => {
//           return (
//             <PinContainer title={project.name} href={project.href}>
//               <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
//                 <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
//                   {project.name}
//                 </h3>
//                 <div className="text-base !m-0 !p-0 font-normal">
//                   <span className="text-slate-500 ">{project.description}</span>
//                 </div>
//                 <div
//                   className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
//                   style={{ backgroundImage: `url(${project.image})` }}
//                 />
//               </div>
//             </PinContainer>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

const Projects = () => {
  return (
    <div className="text-white pt-12 px-10 max-w-7xl mx-auto">
    <h1 className="text-4xl font-extrabold mb-12 text-center bg-transparent">
      Projects
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32 place-items-center">
      {projectData.map((project, index) => (
        <div key={index} className="w-full flex justify-center">
          <PinContainer title={project.name} href={project.href}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {project.name}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">{project.description}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  </div>
  );
};

// export default Projects;




export default Projects;

