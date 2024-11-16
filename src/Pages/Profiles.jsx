import React from "react";
import Slider from "react-slick"; // Import react-slick

// Update image paths to be relative to the public folder
const profileLinks = {
  Leetcode: "https://i.postimg.cc/sX2RtSSb/LCprofile.png", // Moved to public/assets
  CodeChef: "https://i.postimg.cc/T3rGmTfN/codechef-Profile.png", // Moved to public/assets
  CodeForces: "https://i.postimg.cc/W48vWSDM/codeforces-Profile.png", // Moved to public/assets
};

const Profiles = () => {
  // Slick Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Increase to show multiple slides if desired, e.g., 2 or 3
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Time interval for autoplay in milliseconds
  };

  return (
    <div className="text-white px-8 rounded-b-xl py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Profiles</h1>
      <Slider {...settings}>
        {Object.entries(profileLinks).map(([platform, image], index) => (
          <div key={index} className="flex justify-center">
            {/* Increased the image container size */}
            <div className="w-full h-[600px] bg-transparent flex items-center justify-center rounded-xl shadow-lg overflow-hidden">
              <img
                src={image}
                alt={platform}
                className="w-full h-full object-cover" // Changed from object-contain to object-cover to fill the container
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Profiles;
