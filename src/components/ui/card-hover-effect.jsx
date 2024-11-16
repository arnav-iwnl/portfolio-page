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
              <Card image={item.image}>
                <CardTitle>{item.title}</CardTitle>
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
    image // Add image prop
  }) => {
    return (
      <div
        className={cn(
          "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
          className
        )}>
        {/* Image container positioned absolutely in top right */}
        {image && (
          <div className="absolute top-4 right-4 z-50">
            <div className="w-12 h-12 rounded-full bg-slate-800/50 p-2 flex items-center justify-center">
              <img 
                src={image} 
                alt="Tech Icon" 
                className="w-8 h-8 object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
              />
            </div>
          </div>
        )}
        <div className="relative z-50">
          <div className="p-4">{children}</div>
        </div>
      </div>
    );
  };
  
  export const CardTitle = ({
    className,
    children
  }) => {
    return (
      <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
        {children}
      </h4>
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
