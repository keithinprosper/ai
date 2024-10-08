"use client";
import { useEffect, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Check if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return null; // Do not render the custom cursor on mobile devices
  }

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%) scaleX(-1)", // Center and mirror the arrow on the cursor
        pointerEvents: "none", // Let clicks pass through the custom cursor
        zIndex: 10000, // Ensure the custom cursor is always on top
        color: "#fe7d00", // You can customize the color of the arrow
      }}
    >
      <TiLocationArrow size={40} />
    </div>
  );
};

export default CustomCursor;
