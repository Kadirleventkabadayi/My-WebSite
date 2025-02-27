import gsap from "gsap";
import { useEffect, useRef } from "react";
import { checkScreenSize } from "../lib/utils";

function Sus() {
  const ballRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // GSAP animations for moving the ball
    const xTo = gsap.quickTo(ballRef.current!, "x", {
      duration: 0.6,
      ease: "power3",
    });
    const yTo = gsap.quickTo(ballRef.current!, "y", {
      duration: 0.6,
      ease: "power3",
    });

    // Mouse move event listener
    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY + 20);
    };

    // Adding the mousemove listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    !checkScreenSize() && (
      <img
        ref={ballRef}
        className="sus w-12 h-12 fixed top-0 left-0 pointer-events-none z-50"
        alt="llevı"
        src="https://natsha.me/_vercel/image?url=%2Fimgs%2Famoung-us.gif&w=1536&q=100"
      />
    )
  );
}

export default Sus;
