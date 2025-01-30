"use client";

import { useRef } from "react";
import CategoryCard from "../cards/CategoryCard";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { technologies } from "@/app/lib/consts";
import { checkScreenSize } from "@/app/lib/utils";

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
    <Box className="relative max-w-[67vw] flex flex-col items-center p-4">
      <Typography
        className="pt-5 font-bold text-foreground text-center"
        variant={checkScreenSize() ? "h5" : "h4"}
      >
        Technologies and Frameworks
      </Typography>

      <Box
        className={`w-full flex ${
          checkScreenSize() ? "justify-center" : "justify-end"
        } </Box> items-center py-2 gap-2`}
      >
        <IconButton
          onClick={handleScrollLeft}
          sx={{
            bgcolor: "white",
            height: checkScreenSize() ? "24px" : "",
            width: checkScreenSize() ? "24px" : "",
          }}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          onClick={handleScrollRight}
          sx={{
            bgcolor: "white",
            height: checkScreenSize() ? "24px" : "",
            width: checkScreenSize() ? "24px" : "",
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>

      <Box
        ref={scrollContainerRef}
        sx={{
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { display: "none" },
        }}
        className="overflow-x-auto scroll-smooth w-full flex gap-3 p-4"
      >
        {technologies.map((category, index) => (
          <Box key={index} className="flex-none w-[15vw]">
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
