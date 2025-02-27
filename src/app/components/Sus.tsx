import gsap from "gsap";
import { useEffect, useRef } from "react";
import { checkScreenSize } from "../lib/utils";

function Sus() {
  const ballRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(ballRef.current!, "x", {
      duration: 0.6,
      ease: "power3",
    });
    const yTo = gsap.quickTo(ballRef.current!, "y", {
      duration: 0.6,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY + 20);
    };

    window.addEventListener("mousemove", handleMouseMove);

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
