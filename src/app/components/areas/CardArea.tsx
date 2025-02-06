"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import AnimCard from "../cards/AnimCard";
import { useGSAP } from "@gsap/react";
import { checkScreenSize } from "@/app/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const CardArea: React.FC = () => {
  useGSAP(() => {
    if (checkScreenSize()) return;
    else {
      const leftXValues = [-800, -900, -400];
      const rightXValues = [800, 900, 400];
      const leftRotationValues = [-30, -20, -35];
      const rightRotationValues = [30, 20, 35];
      const yValues = [100, -150, -400];

      gsap.utils.toArray(".row").forEach((row, i) => {
        const cardLeft = (row as HTMLElement).querySelector(".card-left");
        const cardRight = (row as HTMLElement).querySelector(".card-right");

        gsap.to(cardLeft, {
          scrollTrigger: {
            trigger: ".main",
            start: "top center",
            end: "150% bottom",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              if (cardLeft) {
                (cardLeft as HTMLElement).style.transform = `translateX(${
                  leftXValues[i] * progress
                }px) translateY(${yValues[i] * progress}px) rotate(${
                  leftRotationValues[i] * progress
                }deg)`;
              }
            },
          },
        });

        gsap.to(cardRight, {
          scrollTrigger: {
            trigger: ".main",
            start: "top center",
            end: "150% bottom",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              (cardRight as HTMLElement).style.transform = `translateX(${
                rightXValues[i] * progress
              }px) translateY(${yValues[i] * progress}px) rotate(${
                rightRotationValues[i] * progress
              }deg)`;
            },
          },
        });
      });

      gsap.to(".logo", {
        scale: 1,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".main",
          start: "top 25%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.to(".line p", {
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".main",
          start: "top 25%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.to("button", {
        y: 0,
        opacity: 1,
        delay: 0.25,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".main",
          start: "top 25%",
          toggleActions: "play reverse play reverse",
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div key={i} className="row">
          <AnimCard imageSrc={`/img-${2 * i - 1}.jpg`} position="left" />
          <AnimCard imageSrc={`/img-${2 * i}.jpg`} position="right" />
        </div>
      );
    }
    return rows;
  };

  if (checkScreenSize()) {
    return (
      <section className="main2">
        <div className="logo2">
          <img className="logoImg" src="/newpp.png" alt="pp" />
        </div>
        <div className="copy2">
          <div className="line2">
            <p>Provide Modern Solutions</p>
          </div>
        </div>
        <div className="copy2">
          <div className="line2">
            <p>Turn Your Ideas into Real Applications</p>
          </div>
        </div>
        <div className="copy2">
          <div className="line2">
            <p>Any Design Can Be Coded</p>
          </div>
        </div>

        <div className="btn2" style={{}}>
          <Link href="mailto:kadirleventkabadayi@gmail.com">
            <button className="myBtn2">Get Contact</button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="main">
      <div className="main-content">
        <div className="logo">
          <img className="logoImg" src="/newpp.png" alt="pp" />
        </div>
        <div className="copy">
          <div className="line">
            <p>Provide Modern Solutions</p>
          </div>
        </div>
        <div className="copy">
          <div className="line">
            <p>Turn Your Ideas into Real Applications</p>
          </div>
        </div>
        <div className="copy">
          <div className="line">
            <p>Any Design Can Be Coded</p>
          </div>
        </div>

        <div className="btn" style={{}}>
          <Link href="mailto:kadirleventkabadayi@gmail.com">
            <button className="myBtn">Get Contact</button>
          </Link>
        </div>
      </div>

      {generateRows()}
    </section>
  );
};

export default CardArea;
