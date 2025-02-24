import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent, Typography } from "@mui/material";

const HowerCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;
    const svg = svgRef.current;

    // İlk animasyon: card başta küçük ve dönük geliyor
    gsap.from(card, {
      duration: 0.2,
      scale: 0.9,
      rotation: 0,
      ease: "power2.out",
    });

    // content başta görünmez ve döndürülmüş
    gsap.to(content, {
      opacity: 0,
      rotation: -45,
      transformOrigin: "center center", // dönme merkezi
      duration: 0.2,
      ease: "power2.out",
    });

    if (!card || !content || !svg) return;

    card.addEventListener("mouseenter", () => {
      // Hover animasyonu: card büyür ve döner
      gsap.to(card, {
        scale: 1.1,
        rotation: -5,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        duration: 0.2,
        ease: "power2.out",
      });

      // content animasyonu: opacity 1 ve dönüş sıfırlanır
      gsap.to(content, {
        opacity: 1,
        rotation: 0,
        transformOrigin: "center center", // dönüş merkezi yine ortada
        duration: 0.2,
        ease: "power2.out",
      });

      // svg animasyonu: küçülme ve dönüş
      gsap.to(svg, {
        scale: 0,
        rotation: -45,
        duration: 0.2,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      // Hover'dan çıkınca animasyon: card eski haline gelir
      gsap.to(card, {
        scale: 1,
        rotation: 0,
        boxShadow: "none",
        duration: 0.2,
        ease: "power2.out",
      });

      // content animasyonu: tekrar kaybolur ve döner
      gsap.to(content, {
        opacity: 0,
        rotation: -45,
        transformOrigin: "center center",
        duration: 0.2,
        ease: "power2.out",
      });

      // svg animasyonu: normale döner
      gsap.to(svg, {
        scale: 1,
        rotation: -5,
        duration: 0.2,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <Card
      ref={cardRef}
      sx={{
        position: "relative",
        width: 300,
        height: 200,
        background: "linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%)",
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* SVG kodunu doğrudan yerleştiriyoruz */}
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        style={{
          width: 48,
          fill: "#333",
          transition: "all 0.2s cubic-bezier(0.23, 1, 0.320, 1)",
        }}
      >
        <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
      </svg>

      <CardContent
        ref={contentRef}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-45deg)",
          width: "100%",
          height: "100%",
          padding: 2,
          boxSizing: "border-box",
          backgroundColor: "#fff",
          opacity: 0,
          transition: "all 0.2s cubic-bezier(0.23, 1, 0.320, 1)",
        }}
      >
        <Typography
          variant="h6"
          component="p"
          sx={{ margin: 0, fontSize: 24, color: "#333", fontWeight: 700 }}
        >
          Card Title
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{ marginTop: 1, fontSize: 14, color: "#777", lineHeight: 1.4 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HowerCard;
