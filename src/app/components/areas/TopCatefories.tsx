"use client";

import { useState } from "react";
import { Box } from "@mui/material";

const categories = [
  {
    title: "Technology",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9y6VvHr6HIPDQ1K8uwe_0qDH20HqHxloTg&s",
  },
  {
    title: "Health",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9y6VvHr6HIPDQ1K8uwe_0qDH20HqHxloTg&s",
  },
  {
    title: "Finance",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9y6VvHr6HIPDQ1K8uwe_0qDH20HqHxloTg&s",
  },
  {
    title: "Travel",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9y6VvHr6HIPDQ1K8uwe_0qDH20HqHxloTg&s",
  },
];

const TopCategories: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{
    title: string;
    image: string;
  } | null>(null);

  const handleOpen = (category: { title: string; image: string }) => {
    setSelectedCategory(category);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCategory(null);
  };

  return <Box sx={{ p: 2 }}></Box>;
};

export default TopCategories;
