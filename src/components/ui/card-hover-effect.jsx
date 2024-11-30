import { Link } from "@nextui-org/react";
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className
  }) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);
  
    return (
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            key={item?.title || idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            
            {/* Wrap Card in Link only if item has a link */}
            {item?.link ? (
              <Link href={item.link} className="block h-full w-full">
                <Card >
                  <CardTitle>{item.title} <img src={item.image} /></CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </Link>
            ) : (
              <Card >
                <CardTitle image_bg={item.image_bg} image={item.image}>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            )}
            
            {/* Hover gradient effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(
                  600px circle at ${hoveredIndex === idx ? 'var(--x) var(--y)' : '0 0'},
                  rgba(255,255,255,0.1),
                  transparent 40%
                )`,
              }}
            />
          </div>
        ))}
      </div>
    );
  };

export const Card = ({
    className,
    children,
  }) => {
    return (
      <div
        className={cn(
          "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
          className
        )}>
       
        <div className="relative z-10">
          <div className="p-4">{children}</div>
        </div>
      </div>
    );
  };
  
  export const CardTitle = ({
    className,
    image,
    image_bg,
    children
  }) => {
    const checkImgBg = ()=>{
      if(image_bg === 1){
        return "w-12 h-12 object-contain rounded-full bg-white p-2"; 
      }
      return "w-8 h-8 object-contain"; // Default styling
    }
    return (
      <div className="flex justify-between items-center"> {/* Align with space between */}
      <h4
        className={cn(
          "text-zinc-100 font-bold tracking-wide flex-1 ", // Center text vertically
          className
        )}
      >
        {children}
      </h4>
      <div className="">
      {image && (
        <img
          src={image}
          alt="Tech Icon"
          className={cn(checkImgBg(),"group-hover:brightness-110 transition-all duration-300 ")} // Add spacing between text and image
        />
      )}
      </div>
    </div>
    );
  };
  
  export const CardDescription = ({
    className,
    children
  }) => {
    return (
      <p
        className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
        {children}
      </p>
    );
  };
