"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    if (isMobile) {
      return () => window.removeEventListener("resize", checkMobile);
    }

    // Hide default cursor
    document.body.style.cursor = 'none';
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    // Mouse move handler with throttling
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth animation using requestAnimationFrame
    const animateCursor = () => {
      // Smooth following for main cursor (slower)
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      // Faster following for dot (more responsive)
      dotX += (mouseX - dotX) * 0.3;
      dotY += (mouseY - dotY) * 0.3;

      // Update cursor position
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX - 20}px, ${cursorY - 20}px, 0)`;
      }
      
      // Update dot position
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${dotX - 4}px, ${dotY - 4}px, 0)`;
      }

      requestAnimationFrame(animateCursor);
    };

    // Handle hover effects
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add hover listeners to interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer'
      );
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Start the animation
    window.addEventListener("mousemove", handleMouseMove);
    animateCursor();
    addHoverListeners();

    // Cleanup
    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
      
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer'
      );
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile]);

  // Don't render on mobile or server-side
  if (typeof window === 'undefined' || isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-300 ease-out ${
          isHovering 
            ? 'w-12 h-12 bg-blue-500/20 border-2 border-blue-500' 
            : 'w-10 h-10 bg-blue-600/10 border border-blue-400/50'
        }`}
        style={{
          borderRadius: '50%',
          willChange: 'transform',
          transform: 'translate3d(-20px, -20px, 0)',
        }}
      />
      
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[10000] transition-all duration-150 ease-out ${
          isHovering 
            ? 'w-2 h-2 bg-blue-600' 
            : 'w-2 h-2 bg-blue-500'
        }`}
        style={{
          borderRadius: '50%',
          willChange: 'transform',
          transform: 'translate3d(-4px, -4px, 0)',
        }}
      />
    </>
  );
};

export default CustomCursor;
