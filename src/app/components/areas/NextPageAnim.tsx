"use client";

import { animatePageIn, animatePageOut } from "@/app/lib/animations";
import { useEffect } from "react";

function NextPageAnim() {
  useEffect(() => {
    animatePageOut();

    setTimeout(() => {
      animatePageIn();
    }, 1000);
  }, []);

  return (
    <div className={`absolute top-0 left-0 w-full h-full z-20`}>
      <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-0 w-1/4"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-3/4 w-1/4"
      />
    </div>
  );
}

export default NextPageAnim;
