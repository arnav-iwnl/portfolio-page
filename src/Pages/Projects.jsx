"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";

const projectData = [
  {
    name: "BizNiche",
    image: "https://raw.githubusercontent.com/arnav-iwnl/portfolio-page/refs/heads/main/src/lib/assets/BizNicheSS.png",
    href: "https://github.com/arnav-iwnl/BizNiche",
    description:
      "An e-commerce platform empowering local businesses with AI-powered product recommendations and category detection.",
  },
  {
    name: "Course Session Plan",
    image: "https://raw.githubusercontent.com/arnav-iwnl/portfolio-page/refs/heads/main/src/lib/assets/SessionPlanManagement.png",
    href: "https://github.com/arnav-iwnl/CourseSessionPlan",
    description:
      "A tool for instructors to create, manage, and share detailed course session plans effectively.",
  },
  {
    name: "Career GPT",
    image: "https://raw.githubusercontent.com/arnav-iwnl/portfolio-page/refs/heads/main/src/lib/assets/Gemini-Project.png",
    href: "https://github.com/arnav-iwnl/CareerGPT",
    description:
      "An AI-driven platform offering personalized career guidance based on user profiles and preferences.",
  },
  {
    name: "LPR YOLOv8",
    image: "https://raw.githubusercontent.com/arnav-iwnl/portfolio-page/refs/heads/main/src/lib/assets/sussex.png",
    href: "https://github.com/arnav-iwnl/LPR-YOLOv8",
    description:
      "License Plate Recognition project uses the YOLO v8 model and OpenCV for real-time detection and recognition of vehicle license plates.",
  },
];

const Projects = () => {
  return (
    <div className="text-white pt-12  max-w-7xl mx-auto">
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

export default Projects;

