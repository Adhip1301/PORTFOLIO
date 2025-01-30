"use client";
import { useEffect } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  useEffect(() => {
    // Add the cursor to the DOM
    const cursorContainer = document.createElement("div");
    cursorContainer.id = "cursor-container";
    document.body.appendChild(cursorContainer);

    const cursor = document.createElement("div");
    cursor.className = "cursor";
    cursorContainer.appendChild(cursor);

    let cursorX = 0;
    let cursorY = 0;

    // Update event listener to specify MouseEvent type
    document.addEventListener("mousemove", (e: MouseEvent) => {
      cursorX = e.clientX;
      cursorY = e.clientY;

      gsap.to(cursor, {
        duration: 0.2,
        x: cursorX,
        y: cursorY,
        ease: "power2.out",
      });
    });

    return () => {
      // Clean up when the component unmounts
      document.body.removeChild(cursorContainer);
    };
  }, []);

  return null; // No JSX is rendered; it's purely DOM manipulation
};

export default CustomCursor;
