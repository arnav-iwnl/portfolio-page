import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";

export const techStackData = [
  {
    title: "React",
    image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    description: "A JavaScript library for building user interfaces with a robust ecosystem and component-based architecture."
  },
  {
    title: "Node.js",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg",
    description: "A runtime environment that executes JavaScript code outside a web browser, perfect for building scalable network applications."
  },
  {
    title: "Express.js",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDneBGnQL7E9hZDwztRO1GfQcCj1FqRrhBw&s",
    description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
  },
  {
    title: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    description: "A NoSQL database that provides high performance, high availability, and easy scalability for modern applications."
  },
  {
    title: "PostgreSQL",
    image: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    description: "A powerful, open source object-relational database system with a strong reputation for reliability and data integrity."
  },
  {
    title: "MySQL",
    image: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg",
    description: "An open-source relational database management system that is fast, reliable, and easy to use."
  },
  {
    title: "Prisma",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3eGfRrGq0iRlsBrumJqeUXxK747tpEpaCuA&s",
    description: "Next-generation ORM for Node.js & TypeScript, offering type safety and automated migrations."
  },
  
  {
    title: "AWS",
    image: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    description: "Amazon Web Services provides on-demand cloud computing platforms and APIs used for hosting, serverless computing, and cloud storage."
  },
  {
    title: "C++",
    image: "https://cdn.worldvectorlogo.com/logos/c.svg",
    description: "A powerful general-purpose programming language commonly used for system/software development and game development."
  }
];



const TechStack = () => {
  return (
    <div className="text-white mt-10 space-y-6">
      <h1 className="text-3xl font-bold pb-4 text-center">Tech Stack</h1>
      <div className=" gap-6 sm:grid-cols-3">
        <HoverEffect items={techStackData}/>
      </div>
    </div>
  );
};




export default TechStack;
