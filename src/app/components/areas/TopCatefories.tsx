"use client";

import { Box, IconButton, Typography } from "@mui/material";
import CategoryCard from "../cards/CategoryCard";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { useRef } from "react";

const categories = [
  {
    title: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/225px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    title: "TypeScript",
    image:
      "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png",
  },
  {
    title: "Java Spring",
    image:
      "https://miro.medium.com/v2/resize:fit:624/1*dwa1SCG85BAzQttURVUvrA.png",
  },
  {
    title: "Node.js",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mkk0TKy0Hww7V1J9JkVUaHoF35GhtJN1Tw&s",
  },
  {
    title: "React",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLnaWpiWTDkNU459gZ_p_KvqEe3YusUHguCFAB03VIR9hNzfIA8JiEzUrD8UAmKVOKk8",
  },
  {
    title: "Next",
    image:
      "https://images.seeklogo.com/logo-png/44/2/next-js-logo-png_seeklogo-449824.png",
  },
  ,
  {
    title: "Tailwind CSS",
    image:
      "https://brandlogos.net/wp-content/uploads/2023/11/tailwind_css-logo_brandlogos.net_v91ni.png",
  },
];

const TopCategories: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll left
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  // Scroll right
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "67vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <Typography
        sx={{
          paddingBlockStart: 5,
          fontWeight: "bold",
          color: "var(--foreground)",
          textAlign: "center",
        }}
        variant="h2"
      >
        Technologies and Frameworks{" "}
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "2%",
          gap: 2,
        }}
      >
        <IconButton
          onClick={handleScrollLeft}
          sx={{
            bgcolor: "white",
          }}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          onClick={handleScrollRight}
          sx={{
            bgcolor: "white",
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>

      <Box
        ref={scrollContainerRef}
        sx={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { display: "none" },
          display: "flex",
          gap: 3,
          padding: "16px",
          scrollBehavior: "smooth",
          width: "100%",
        }}
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 auto",
              width: "15vw",
            }}
          >
            <CategoryCard image={category.image} title={category.title} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopCategories;
