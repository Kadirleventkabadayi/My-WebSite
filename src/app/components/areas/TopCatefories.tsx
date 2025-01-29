"use client";

import { Box, IconButton, Typography } from "@mui/material";
import CategoryCard from "../cards/CategoryCard";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { useRef } from "react";
import { technologies } from "@/app/lib/consts";

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
        {technologies.map((category, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 auto",
              width: "15vw",
            }}
          >
            <CategoryCard
              image={category.image}
              title={category.title}
              description={category.description}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopCategories;
