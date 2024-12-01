"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    // (<div
    //   className="w-full bg-white dark:bg-[#141414] font-sans "
    //   ref={containerRef}>
    //   <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
    //     {data.map((item, index) => (
    //       <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
    //         <div
    //           className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
    //           <div
    //             className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
    //             <div
    //               className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
    //           </div>
    //           <h3
    //             className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-white dark:text-white ">
    //             {item.title}
    //           </h3>
    //         </div>

    //         <div className="relative pl-20 pr-4 md:pl-4 w-full">
    //           <h3
    //             className="md:hidden block text-2xl mb-4 text-left font-bold text-white dark:text-white">
    //             {item.title}
    //           </h3>
    //           {item.content}{" "}
    //         </div>
    //       </div>
    //     ))}
    //     <div
    //       style={{
    //         height: height + "px",
    //       }}
    //       className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
    //       <motion.div
    //         style={{
    //           height: heightTransform,
    //           opacity: opacityTransform,
    //         }}
    //         className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
    //     </div>
    //   </div>
    // </div>)
    <div
  className="w-full bg-white dark:bg-[#141414] font-sans"
  ref={containerRef}
>
  <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
    {data.map((item, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 md:gap-10"
      >
        {/* Sticky Left Section */}
        <div
          className="sticky z-40 flex items-center top-40 self-start max-w-full md:max-w-sm lg:max-w-sm md:w-auto"
        >
          <div
            className="h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center relative"
          >
            <div
              className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"
            />
          </div>
          <h3
            className="hidden md:block text-lg md:text-2xl font-bold text-black dark:text-white md:pl-6"
          >
            {item.title}
          </h3>
        </div>

        {/* Right Section */}
        <div className="relative pl-6 pr-4 md:pl-4 w-full">
          <h3
            className="block md:hidden text-lg sm:text-xl mb-4 text-left font-bold text-black dark:text-white"
          >
            {item.title}
          </h3>
          <div className="text-sm sm:text-base text-black dark:text-white">
            {item.content}
          </div>
        </div>
      </div>
    ))}

    {/* Vertical Line */}
    <div
      style={{
        height: height + "px",
      }}
      className="absolute left-4 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
    >
      <motion.div
        style={{
          height: heightTransform,
          opacity: opacityTransform,
        }}
        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
      />
    </div>
  </div>
</div>

  );
};

