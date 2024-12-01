import React from "react";

import { Timeline } from "../components/ui/timeline";

  const Experience = () => {
    const data = [
      {
        title: "CyberSecurity Coord - GDG SIESGST",
        content: (
          <div>
            <p className="text-sm text-gray-100">Oct 2024- Present</p>
            <p className="text-lg text-gray-400">
              Leading cybersecurity initiatives, organizing events, and managing workshops for tech enthusiasts.
            </p>
          </div>
        ),
      },
      {
        title: "Joint Secretary - IETE SIESGST",
        content: (
          <div>
            <p className="text-sm text-gray-100">Oct 2024 - Present</p>
            <p className="text-lg text-gray-400">
              Coordinated tech events, ideathons, and workshops, promoting innovation and learning among students.
            </p>
          </div>
        ),
      },
      {
        title: "Technical Volunteer - IETE SIESGST",
        content: (
          <div>
            <p className="text-sm text-gray-100">Oct 2023 - Sep 2024</p>
            <p className="text-lg text-gray-400">
             Managed Deployments of Club's Website and events.
            </p>
          </div>
        ),
      },
    ];
    return (
      <div className="bg-[#141414] px-5 py-3 rounded-xl shadow-lg">
        <h2 className="text-4xl text-center font-bold  text-white">Experience</h2>
        <Timeline data={data} />
      </div>
    );
  };
  
  export default Experience;

