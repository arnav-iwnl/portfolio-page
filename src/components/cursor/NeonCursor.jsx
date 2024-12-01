
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import "./NeonCursor.css";

const NeonCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsCursorVisible(true); // Show cursor when moving
  }, []);

  const handleTouchStart = useCallback((e) => {
    const touch = e.touches[0];
    setPosition({ x: touch.clientX, y: touch.clientY });
    setIsCursorVisible(true); // Show cursor
    setIsClicking(true); // Simulate click on tap
  }, []);

  const handleTouchMove = useCallback((e) => {
    const touch = e.touches[0];
    setPosition({ x: touch.clientX, y: touch.clientY });
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsClicking(false); // Reset click state
    setIsGrabbing(false); // Reset grab state
  }, []);

  const handleMouseLeave = () => {
    setIsCursorVisible(false); // Hide cursor when leaving the window
    setIsGrabbing(false); // Reset grab state
  };

  const handleMouseDown = () => {
    setIsClicking(true);
    setIsGrabbing(true); // Enable grab state on mouse down
  };

  const handleMouseUp = () => {
    setIsClicking(false);
    setIsGrabbing(false); // Disable grab state on mouse up
  };

  const handleMouseOver = useCallback((e) => {
    const target = e.target;
    if (target.matches("a, button, input, [data-hover='true']")) {
      setIsHovering(true);
    }
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsHovering(false);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    // Add touch events for mobile support
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);

      // Remove touch events
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleMouseMove, handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseOver, handleMouseOut]);

  return (
    <div className="neon-cursor-container">
      {/* Main cursor dot */}
      <motion.div
        className="cursor-main"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
          opacity: isCursorVisible ? 1 : 0, // Transparent when cursor is not visible
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 400,
          mass: 0.5,
        }}
      />

      {/* Trailing circle */}
      <motion.div
        className="cursor-trail"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          opacity: isCursorVisible ? 0.6 : 0, // Transparent when cursor is not visible
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.8,
        }}
        initial={false}
      />

      {/* Outer glow */}
      <motion.div
        className="cursor-glow"
        animate={{
          x: position.x - 30,
          y: position.y - 30,
          opacity: isCursorVisible ? 0.4 : 0, // Transparent when cursor is not visible
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 150,
          mass: 1,
        }}
        initial={false}
      />
    </div>
  );
};

export default NeonCursor;