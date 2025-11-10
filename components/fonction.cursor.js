"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

  
    window.addEventListener("mousemove", handleMouseMove);
    const hoverElements = document.querySelectorAll(".hover-target");
    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Curseur */}
      <div
        className="CustomCursor_cursor_HzHPF"
        data-testid="cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      <div
        className="CustomCursor_cursor__label__pWDCc"
        style={{
          left: `${position.x + 24}px`, 
          top: `${position.y}px`,
          opacity: isHovering ? 1 : 0, 
        }}
      />
      
    </>
  );
};

export default CustomCursor;