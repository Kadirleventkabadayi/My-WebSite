import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import React, { useState } from "react";
import { Modal, Box } from "@mui/material";

interface CategoryCardProps {
  image: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: "15vw", overflow: "hidden" }}>
      <Card
        sx={{
          position: "relative",
          color: "var(--background)",
          backgroundColor: "var(--on-background)",
          borderRadius: 2,
        }}
        onClick={handleOpen}
      >
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "var(--background)",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Detailed information about {title}.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default CategoryCard;
